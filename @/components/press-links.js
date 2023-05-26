import ardi, { css, html } from 'https://unpkg.com/ardi'
import links from '/@/assets/press/press.js'

ardi({
  tag: 'press-links',
  template() {
    return links.map(
      (link, i) => html`
        <h2>${link.title}</h2>
        <p>${link.subtitle}</p>
        <div>
          <a href=${link.url} class="arrow">Read More</a>
          <small>${link.publisher}</small>
        </div>
        ${i < links.length - 1 ? html`<hr />` : ''}
      `
    )
  },
  styles: css`
    div {
      align-items: baseline;
      display: flex;
      justify-content: space-between;
    }
    a.arrow {
      color: var(--primary);
      text-decoration: none;
    }
    .arrow:hover,
    .arrow:focus {
      color: var(--primary);
    }
    .arrow:after {
      content: '➔';
      margin-left: 0.25rem;
      transition: margin-left 0.25s;
    }
    .arrow:hover:after {
      margin-left: 0.5rem;
    }
    hr {
      background: var(--border);
      border: none;
      height: 1px;
      margin: 1.5rem 0;
    }
  `,
})
