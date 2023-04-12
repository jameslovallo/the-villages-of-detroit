// load global components
const globals = [
  'app-footer',
  'app-layout',
  'app-nav',
  'list-item',
  'spa-link',
  'spa-root',
  'video-player',
]
globals.forEach((c) => import(`/@/components/${c}.js`))

import('//unpkg.com/ardi@latest/demos/dialog/dialog.js')

// fade in gracefully when components are loaded
const all = ['ardi-dialog', 'ardi-youtube', ...globals]
const isDefined = all.map((c) => customElements.whenDefined(c))
await Promise.allSettled(isDefined)
document.body.style.opacity = 1
