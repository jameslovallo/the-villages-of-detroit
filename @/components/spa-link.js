import ardi, { html } from 'https://unpkg.com/ardi'

ardi({
  tag: 'spa-link',
  props: { href: [String, '/'] },
  state: () => ({ pageData: '' }),
  template() {
    return html`
      <style>
        :host {
          display: inline-block;
        }
      </style>
      <a
        part="link"
        href=${this.href}
        @mouseover=${(e) => appRoot && this.hover(e)}
        @click=${(e) => appRoot && this.click(e)}
      >
        <slot></slot>
      </a>
    `
  },
  pagePath() {
    return (this.href !== '/' ? this.href : '') + '/index.html'
  },
  getPage(setPage) {
    if (!this.pageData) {
      fetch(this.pagePath())
        .then((res) => res.text())
        .then((html) => {
          this.pageData = html
            .split('<app-layout>')[1]
            .split(`</app-layout>`)[0]
          setPage && this.setPage()
        })
    }
  },
  setPage() {
    if (this.pageData) {
      appRoot.setPage(this.pageData, this.href)
      appRoot.pushHistory(this.href, this.pageData)
    } else this.getPage(true)
  },
  hover(e) {
    e.preventDefault()
    this.getPage()
  },
  click(e) {
    e.preventDefault()
    if (this.href !== location.pathname) {
      sessionStorage.removeItem('spa-reload')
      this.setPage()
    }
  },
})
