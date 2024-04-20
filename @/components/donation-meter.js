import ardi, { css, html } from 'https://unpkg.com/ardi'

const parts = [
	'https://www.eventbriteapi.com/v3',
	'/events/789472532597/?token=',
	'JRT2IPFXB44ANL7YIDLO',
	'&expand=sales_data_with_null',
]

ardi({
	tag: 'donation-meter',
	state: () => ({ gross: 0 }),
	async created() {
		const data = await fetch(parts.join('')).then((res) => res.json())
		this.gross = data.sales_data_with_null.gross
	},
	template() {
		return html`
			<h3>Help us meet our goal of $15,000!</h3>
			<div part="thermometer">
				<div part="track" style=${`--gross: ${this.gross}`}></div>
			</div>
			<div
				style="display: flex; justify-content: space-between; margin-top: -1em;"
			>
				<small>$0</small>
				<small>$15,000</small>
			</div>
			<p style="margin-top: -1em">
				Can't attend?
				<a href="https://syndon.us/campaign/the%20villages%20of%20detroit">
					Donate!
				</a>
			</p>
		`
	},
	styles: css`
		:host {
			--village-blue: #92d5da;
			display: grid;
			gap: 1rem;
			margin: 2rem 0 3rem;
		}
		* {
			margin: 0;
		}
		[part='thermometer'] {
			border: 2px solid currentcolor;
			padding: 2px;
		}
		[part='track'] {
			background: var(--village-blue);
			box-sizing: border-box;
			height: 1rem;
			width: calc((var(--gross) / 15000) * 100%);
		}
		h3,
		a {
			color: var(--village-blue);
		}
		a {
			font-size: inherit;
		}
	`,
})
