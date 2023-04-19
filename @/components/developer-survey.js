import ardi from 'https://unpkg.com/ardi'

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

    this.root.innerHTML += `<h2>Developer Survey Response</h2>`

    for (let i = 1; i < questions.length; i++) {
      this.root.innerHTML += `
				<p part="question">${questions[i]}</p>
				<p part="answer">${response[i] || 'No reponse'}</p>
			`
    }
  },
  created() {
    fetch(
      'https://sheets.googleapis.com/v4/spreadsheets/1A09bCVNcygBPIGPVXMqQdS87BII54Rtw9Dd4Rm9weOI/values/A1:AZ100?key=AIzaSyCSD5oD-d2ORbqI6375p_CnRhdrHXEXM14'
    )
      .then((res) => res.json())
      .then((data) => this.displayResponses(data.values))
  },
  template: () => '',
  css: /* css */ `
    [part=question] {
      color: var(--primary);
      margin: 0;
    }
    [part=answer] {
      margin: 0 0 1rem;
    }
  `,
})
