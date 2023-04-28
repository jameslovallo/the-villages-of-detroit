import ardi, { html } from 'https://unpkg.com/ardi'
import nav from '../nav.js'

ardi({
  tag: 'app-footer',
  template() {
    return html`
      <footer>
        <p>
          <a
            class="arrow"
            href="https://thevillagesofdetroit.us10.list-manage.com/subscribe/post?u=491160fdb6c928b779465812e&id=df5c91e13e"
          >
            Subscribe to Our Newsletter
          </a>
        </p>
        <div part="footer-nav">
          ${nav.map(
            (page) => html`
              <app-link><a href=${page.href}>${page.label}</a></app-link>
            `
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
    [part=footer-nav] app-link:first-of-type {
      display: none;
    }
    [part=footer-nav] a {
      color: var(--heading-color);
      text-decoration: none;
    }
    [part=footer-nav] a:hover {
      color: var(--primary);
      text-decoration: underline;
    }
  `,
})
