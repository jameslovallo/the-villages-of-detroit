import ardi, { html } from 'https://unpkg.com/ardi'
import head from '/@/head.js'

ardi({
  tag: 'spa-root',
  template() {
    return html`<slot></slot>`
  },
  setHead() {
    Object.keys(head).forEach((tagType) => {
      head[tagType].forEach((el) => {
        this.createTag(document.head, tagType, el)
      })
    })
  },
  async setPage(doc, path, init) {
    // check if page is prebuilt
    const prebuilt = document.querySelector('meta[name=prebuilt][content=true]')
    // handle head
    if (init && !prebuilt) {
      this.setHead()
    }
    // allow page to request native loading
    if (doc.includes('<!-- spa-reload -->')) {
      if (!sessionStorage.getItem('spa-reload')) {
        sessionStorage.setItem('spa-reload', true)
        location = path
        return
      }
    } else sessionStorage.removeItem('spa-reload')
    // set page content
    this.appLayout.innerHTML = doc
    // handle page title
    this.handleTitle(doc)
    const pathArray = path.split('/')
    const pageClass = pathArray[1] || 'home'
    const pageLevel = 'level-' + pathArray.filter((i) => i.length).length
    this.appLayout.classList = `${pageClass} ${pageLevel}`
    // handle scripts
    this.appLayout.querySelectorAll('script').forEach((tag) => {
      const newTag = document.createElement('script')
      newTag.src = tag.src
      newTag.type = tag.type
      tag.innerHTML && Function(tag.innerHTML)()
      tag.replaceWith(newTag)
    })
  },
  handleTitle() {
    document.title = document.querySelector('h1').innerText
  },
  createTag(target, type, attrs) {
    const tag = document.createElement(type)
    Object.keys(attrs).forEach((key) => {
      tag[key] = attrs[key]
    })
    target.appendChild(tag)
  },
  pushHistory(href, data) {
    history.pushState(
      { path: href.replace('index.html', '') },
      undefined,
      href.replace('index.html', '')
    )
    if (!sessionStorage[href]) sessionStorage[href] = data
  },
  created() {
    if (!window.ramidusInitialized) {
      window.appRoot = this
      this.appLayout = document.querySelector('app-layout')
      this.setPage(this.appLayout.innerHTML, location.pathname, true)
      // history stuff
      this.pushHistory(location.pathname, this.appLayout.innerHTML)
      addEventListener('popstate', (e) => {
        if (e.state.path) {
          this.setPage(sessionStorage.getItem(e.state.path), e.state.path)
        }
      })
      window.ramidusInitialized = true
    }
  },
})
