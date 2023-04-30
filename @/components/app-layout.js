import ardi, { html } from 'https://unpkg.com/ardi@0.2.14/@/assets/ardi-min.js'

ardi({
  tag: 'app-layout',
  template() {
    return html`
      <app-nav part="nav"></app-nav>
      <main part="main">
        <app-root>
          <slot></slot>
        </app-root>
      </main>
      <app-footer part="footer"></app-footer>
    `
  },
  css: /* css */ `
    main {
      line-height: 1.5;
      margin: 0 auto;
      max-width: 80ch;
      padding: 0 1rem 4rem;
    }
  `,
})
