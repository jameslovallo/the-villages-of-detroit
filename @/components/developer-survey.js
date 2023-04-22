import ardi from 'https://unpkg.com/ardi'

ardi({
  tag: 'developer-survey',
  props: {
    property: [Number],
  },
  displayResponses(data) {
    const questions = data[0]
    const response = data[this.property]

    this.root.innerHTML += `<h3>Developer Survey Response</h3>`

    for (let i = 1; i < questions.length; i++) {
      this.root.innerHTML += `
				<p part="question">${questions[i]}</p>
				<p part="answer">${response[i] || 'No reponse'}</p>
			`
    }
  },
  created() {
    if (this.property) {
      fetch(
        'https://sheets.googleapis.com/v4/spreadsheets/1A09bCVNcygBPIGPVXMqQdS87BII54Rtw9Dd4Rm9weOI/values/A1:AZ100?key=AIzaSyCSD5oD-d2ORbqI6375p_CnRhdrHXEXM14'
      )
        .then((res) => res.json())
        .then((data) => this.displayResponses(data.values))
    }
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
