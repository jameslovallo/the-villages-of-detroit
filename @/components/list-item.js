import ardi, { html } from 'https://unpkg.com/ardi@0.2.15/@/assets/ardi-min.js'

ardi({
  tag: 'list-item',
  props: {
    primary: [String],
    secondary: [String],
    href: [String],
    target: [String, null],
    icon: [String],
  },
  template() {
    const content = html`
      <div part="icon-wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d=${this.icon} />
        </svg>
      </div>
      <div part="text-wrapper">
        <span part="primary">${this.primary}</span>
        ${this.secondary
          ? html`<small part="secondary">${this.secondary}</small>`
          : ''}
      </div>
    `
    return !this.href.startsWith('/') || this.target
      ? html`<a href=${this.href} target=${this.target}>${content}</a>`
      : html`
          <app-link>
            <a href=${this.href}>${content}</a>
          </app-link>
        `
  },
  css: /* css */ `
    a {
      align-items: center;
      color: inherit;
      display: flex;
      gap: 1rem;
      text-decoration: none;
    }
    a:hover {
      color: var(--primary);
    }
    [part=icon-wrapper] {
      background: var(--primary);
      border-radius: 50%;
      flex-shrink: 0;
      padding: .5rem;
    }
    svg {
      display: block;
      fill: var(--on-primary);
      height: 1.5rem;
      width: 1.5rem;
    }
    [part=text-wrapper] {
      display: grid;
      gap: .25rem;
      line-height: 1;
    }
  `,
})
