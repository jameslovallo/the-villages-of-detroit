import ardi, { html } from '//unpkg.com/ardi'

ardi({
  tag: 'contact-form',
  template() {
    return html`
      <form action="https://formsubmit.co/mac@thevillagesofdetroit.com">
        <input />
      </form>
    `
  },
})
