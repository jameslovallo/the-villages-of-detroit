import nav from '../nav.js'
import ardi, { html } from '//unpkg.com/ardi'

ardi({
  tag: 'app-footer',
  template() {
    return html`
      <footer>
        <p><a class="arrow">Subscribe to Our Newsletter</a></p>
        <div part="footer-nav">
          ${nav.map(
            (page) => html`<spa-link href=${page.href}>${page.label}</spa-link>`
          )}
        </div>
        <p>© ${new Date().getFullYear()} The Villages of Detroit</p>
        <p>
          Made with <a href="https://ardi.netlify.app">Ardi</a> &
          <a href="https://ramidus.netlify.app">Ramidus</a>
        </p>
      </footer>
    `
  },
  css: /* css */ `
    @import "/@/css/style.css";
    :host {
      background: var(--surface);
      display: block;
      left: 0;
      padding: 1rem 1rem;
      position: sticky;
      text-align: center;
      top: 100vh;
    }
    [part=footer-nav] {
      display: none;
      gap: 1rem;
      justify-content: center;
    }
    @media (min-width: 768px) {
      [part=footer-nav] {
        display: flex;
      }
    }
    [part=footer-nav] spa-link:first-of-type {
      display: none;
    }
    [part=footer-nav] spa-link::part(link) {
      color: var(--heading-color);
      text-decoration: none;
    }
    [part=footer-nav] spa-link:hover::part(link) {
      color: var(--primary);
    }
  `,
})
