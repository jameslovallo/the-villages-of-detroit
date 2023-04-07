import nav from '../nav.js'
import ardi, { html } from '//unpkg.com/ardi'

ardi({
  tag: 'app-nav',
  template() {
    return html`
      <nav>
        <ardi-dialog drawer ref="drawer">
          <button slot="opener" aria-label="Open primary navigation.">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
            </svg>
          </button>
          <div part="drawer-links">
            ${nav.map(
              (page) =>
                html`
                  <spa-link
                    href=${page.href}
                    @click=${() => (this.refs.drawer.open = false)}
                  >
                    ${page.label}
                  </spa-link>
                `
            )}
          </div>
        </ardi-dialog>
        ${nav.map(
          (page) => html`<spa-link href=${page.href}>${page.label}</spa-link>`
        )}
      </nav>
    `
  },
  css: /* css */ `
    nav {
      align-items: center;
      display: flex;
      gap: 1rem;
      padding: 1rem;
    }
    spa-link:first-of-type {
      font-weight: bold;
      margin-right: auto;
    }
    nav > spa-link:last-of-type::part(link) {
      background: var(--primary);
      border-radius: 3rem;
      color: var(--on-primary);
      padding: .5rem 1rem;
    }
    spa-link:hover {
      color: var(--primary);
    }
    spa-link::part(link) {
      align-items: center;
      color: inherit;
      display: flex;
      font-size: 1rem;
      height: 100%;
      text-decoration: none;
    }
    [slot=opener] {
      align-items: center;
      background: none;
      border-radius: 50%;
      border: none;
      display: flex;
      height: 48px;
      justify-content: center;
      margin-left: -8px;
      width: 48px;
    }
    [slot=opener]:hover,
    [slot=opener]:focus {
      background: var(--surface-heavy);
    }
    [slot=opener] svg {
      display: block;
      fill: currentcolor;
      width: 24px;
    }
    [part=drawer-links] {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
      height: calc(100vh - 2rem);
    }
    [part=drawer-links] spa-link::part(link) {
      font-size: 1.25rem;
    }
    nav > spa-link:not(:first-of-type):not(:last-of-type) {
      display: none;
    }
    @media (min-width: 768px) {
      nav ardi-dialog[drawer] {
        display: none;
      }
      nav > spa-link:not(:first-of-type):not(:last-of-type) {
        display: block;
      }
    }
  `,
})
