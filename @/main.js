import 'https://unpkg.com/@snappywc/calendar'
import 'https://unpkg.com/ardi@0.2.16/@/components/app-link.js'
import 'https://unpkg.com/ardi@0.2.16/@/components/app-root.js'
import 'https://unpkg.com/ardi@0.2.16/demos/dialog/dialog.js'

// load global components
const globals = ['app-layout', 'app-nav', 'app-footer', 'list-item']
globals.forEach((c) => import(`/@/components/${c}.js`))

// fade in gracefully when components are loaded
const all = ['app-link', 'app-root', 'ardi-dialog', ...globals]
const isDefined = all.map((c) => customElements.whenDefined(c))
await Promise.allSettled(isDefined)
document.body.style.opacity = 1
