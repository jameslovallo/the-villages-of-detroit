import ardi, { html } from 'https://unpkg.com/ardi@0.2.15/@/assets/ardi-min.js'
import '/@/components/form-field.js'

ardi({
  tag: 'contact-form',
  template() {
    return html`
      <form
        action="https://formsubmit.co/mac@thevillagesofdetroit.com"
        method="post"
      >
        <form-field type="text" label="Name" required="true"></form-field>
        <form-field
          type="tel"
          label="Phone Number"
          required="true"
        ></form-field>
        <form-field
          type="email"
          label="Email Address"
          required="true"
          style="grid-column: 1/span 2;"
        ></form-field>
        <form-field
          type="textarea"
          label="Your Message"
          required="true"
          style="grid-column: 1/span 2;"
        ></form-field>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    `
  },
  css: /* css */ `
		@import "/@/css/formfield.css";
		form {
			display: grid;
			gap: 1rem;
			grid-template-columns: repeat(2, 1fr);
		}
		form button {
			background: var(--primary);
			border: none;
			border-radius: 3rem;
			color: var(--on-primary);
			cursor: pointer;
      letter-spacing: 1;
			padding: .75rem 1.5rem;
      text-transform: uppercase;
		}
	`,
})
