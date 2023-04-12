import ardi, { html } from 'https://unpkg.com/ardi'

ardi({
  tag: 'app-layout',
  template() {
    return html`
      <app-nav></app-nav>
      <main>
        <spa-root>
          <slot></slot>
        </spa-root>
      </main>
      <app-footer></app-footer>
    `
  },
  css: /* css */ `
    main {
      line-height: 1.5;
      margin: 0 auto;
      max-width: 80ch;
      padding: 0 1rem 4rem;
    }
    :host(.developments.level-1) {
      height: 100%;
      display: grid;
      grid-template-rows: auto 1fr;
    }
    :host(.developments.level-1) app-footer {
      display: none;
    }
    :host(.developments.level-1) main {
      margin: 0;
      max-width: unset;
      padding: 0;
    }
  `,
})
