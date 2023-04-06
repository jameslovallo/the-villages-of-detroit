import ardi, { html } from '//unpkg.com/ardi'

const nav = [
  { label: 'The Villages', href: '/' },
  { label: 'What We Do', href: '/what-we-do' },
  { label: 'Our Community', href: '/our-community' },
  { label: 'Events', href: '/events' },
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Contact', href: '/contact' },
  { label: 'Donate', href: '/donate' },
]

ardi({
  tag: 'app-nav',
  template() {
    return html`
      <nav>
        <ardi-dialog drawer ref="drawer">
          <button slot="opener">
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
      box-shadow: 0 0 3px rgba(0,0,0,0.25);
      display: flex;
      gap: 1rem;
      padding: 1rem;
    }
    spa-link:first-of-type {
      margin-right: auto;
    }
    spa-link::part(link) {
      align-items: center;
      color: inherit;
      display: flex;
      font-size: 14px;
      height: 100%;
      text-decoration: none;
    }
    [slot=opener] {
      background: none;
      border: none;
      border-radius: 50%;
      margin-left: -8px;
      padding: .5rem;
    }
    [slot=opener]:hover,
    [slot=opener]:focus {
      background: var(--surface-heavy);
    }
    [slot=opener] svg {
      fill: currentcolor;
      width: 24px;
    }
    [part=drawer-links] {
      display: grid;
      gap: 1rem;
      height: 100%;
    }
    nav > spa-link:not(:first-of-type):not(:last-of-type) {
      display: none;
    }
    @media (min-width: 650px) {
      nav ardi-dialog[drawer] {
        display: none;
      }
      nav > spa-link:not(:first-of-type):not(:last-of-type) {
        display: block;
      }
    }
  `,
})
