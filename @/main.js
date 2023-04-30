import 'https://unpkg.com/ardi/@/components/app-link.js'
import 'https://unpkg.com/ardi/@/components/app-root.js'
import 'https://unpkg.com/ardi/demos/dialog/dialog.js'

// load global components
const globals = [
  'app-root',
  'app-link',
  'app-layout',
  'app-nav',
  'app-footer',
  'list-item',
]
globals.forEach((c) => import(`/@/components/${c}.js`))

// fade in gracefully when components are loaded
const all = ['app-link', 'app-root', 'ardi-dialog', ...globals]
const isDefined = all.map((c) => customElements.whenDefined(c))
await Promise.allSettled(isDefined)
document.body.style.opacity = 1
