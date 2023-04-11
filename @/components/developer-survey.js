import ardi from '//unpkg.com/ardi'

ardi({
  tag: 'developer-survey',
  props: {
    property: [Number],
  },
  displayResponses(data) {
    const property =
      new URLSearchParams(window.location.search).get('property') ||
      this.property
    const questions = data[0]
    const response = data[property || 1]

    this.root.innerHTML += `
			<p
				class="h3"
				style="color: var(--primary); line-height: calc(1em + 2rem);"
			>
				${response[property]}
			</p>
		`

    for (let i = 1; i < questions.length; i++) {
      this.root.innerHTML += `
				<p><b>${questions[i]}</b></p>
				<p>${response[i] || 'No reponse'}</p>
			`
    }
  },
  ready() {
    fetch(
      'https://sheets.googleapis.com/v4/spreadsheets/1A09bCVNcygBPIGPVXMqQdS87BII54Rtw9Dd4Rm9weOI/values/A1:AZ100?key=AIzaSyCSD5oD-d2ORbqI6375p_CnRhdrHXEXM14'
    )
      .then((res) => res.json())
      .then((data) => this.displayResponses(data.values))
  },
})
