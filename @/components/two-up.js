import ardi, { html } from 'https://cdn.skypack.dev/ardi@0.1.26'

ardi({
  tag: 'two-up',
  props: { percent: [Number, 50] },
  template() {
    return html`
      <div part="slots">
        <slot name="first"></slot>
        <slot
          name="second"
          style=${`clip-path: polygon(${this.percent}% 0, 100% 0, 100% 100%, ${this.percent}% 100%);`}
        ></slot>
      </div>
      <input
        type="range"
        value=${this.percent}
        name="vol"
        min="0"
        max="100"
        @input=${(e) => {
          this.percent = e.target.value
        }}
      />
    `
  },
  css: /* css */ `
    :host {
			background: var(--surface-heavy);
			border-radius: .5rem;
      display: block;
			overflow: hidden;
      position: relative;
    }
    [name=second] {
      display: block;
      position: absolute;
      left: 0;
      top: 0;width: 100%
    }
		input[type="range"] {
			-webkit-appearance: none;
			appearance: none;
			background: transparent;
			cursor: pointer;
			height: 100%;
			left: 0;
			margin: 0;
			position: absolute;
			top: 0;
			width: 100%;
		}
		input[type="range"]:focus {
			outline: none;
		}
		input[type="range"]::-webkit-slider-runnable-track {
			background-color: transparent;
			height: 100%;  
		}
		input[type="range"]::-webkit-slider-thumb {
			-webkit-appearance: none;
			appearance: none;
			background-color: white;
			box-shadow: 0 0 5px black;
			cursor: ew-resize;
			height: 100%;
			width: .5rem;
		}
		input[type="range"]::-moz-range-track {
			background-color: transparent;
			height: 100%;
		}
		input[type="range"]::-moz-range-thumb {
			background-color: white;
			box-shadow: 0 0 5px black;
			border: none;
			border-radius: 0;
			cursor: ew-resize;
			height: 100%;
			width: .5rem;
		}
  `,
})
