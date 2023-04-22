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
      const question = questions[i].trim()
      const punc = question.endsWith('?') || question.endsWith('.') ? '' : '?'
      this.root.innerHTML += `
				<p part="question">
          <span part="bubble">${question + punc}</span>
        </p>
				<p part="answer">
          <span part="bubble">${response[i] || 'No reponse'}</span>
        </p>
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
    [part=question],
    [part=answer] {
      margin: 2rem 0;
    }
    [part=question] {
      display: flex;
      justify-content: flex-end;
    }
    [part=bubble] {
      border: 1px solid var(--border);
      border-radius: 1rem;
      display: inline-block;
      max-width: 66%;
      padding: .5rem;
    }
    [part=question] [part=bubble] {
      background: var(--surface-heavy);
      border-bottom-right-radius: 2px;
    }
    [part=answer] [part=bubble] {
      border-bottom-left-radius: 2px;
    }
  `,
})
