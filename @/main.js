// load global components
const globals = [
  'app-footer',
  'app-layout',
  'app-link',
  'app-nav',
  'app-root',
  'list-item',
  'video-player',
]
globals.forEach((c) => import(`/@/components/${c}.js`))

import('https://unpkg.com/ardi/demos/dialog/dialog.js')

// fade in gracefully when components are loaded
const all = ['ardi-dialog', ...globals]
const isDefined = all.map((c) => customElements.whenDefined(c))
await Promise.allSettled(isDefined)
document.body.style.opacity = 1
