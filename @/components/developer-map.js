import {
  icon,
  map,
  marker,
  tileLayer,
} from 'https://cdn.skypack.dev/leaflet@1.9.3'
import developments from '/@/assets/developments/developments.js'

window.addEventListener('load', () => {
  // create map
  const devMap = map('map').setView(
    [42.361582463007856, -82.99748471510723],
    14
  )
  // create tiles
  tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20,
    }
  ).addTo(devMap)
  // get data from Google sheet
  fetch(
    'https://sheets.googleapis.com/v4/spreadsheets/1A09bCVNcygBPIGPVXMqQdS87BII54Rtw9Dd4Rm9weOI/values/A1:AZ100?key=AIzaSyCSD5oD-d2ORbqI6375p_CnRhdrHXEXM14'
  )
    .then((res) => res.json())
    .then((data) => {
      const { values } = data
      const questions = values[0]
      // loop over developments
      developments.forEach(async (d) => {
        // define data
        const {
          title,
          color,
          position: { lat, lng },
          response,
          mediaHTML,
        } = d
        // create pin
        const pin = marker([lat, lng], {
          icon: icon({
            iconUrl: `/@/assets/developments/${color}.svg`,
            iconSize: [32, 32],
            iconAnchor: [16, 30],
            popupAnchor: [0, -30],
          }),
        }).addTo(devMap)
        // handle survey responses (green pins)
        if (color === 'green') {
          // create dialog
          const dialog = document.createElement('dialog')
          document.body.appendChild(dialog)
          dialog.classList.add('development-modal')
          // build survey markup
          let surveyMarkup = /* html */ `<h3>Developer Survey Response</h3>`
          for (let i = 1; i < questions.length; i++) {
            const question = questions[i].trim()
            const punc =
              question.endsWith('?') || question.endsWith('.') ? '' : '?'
            surveyMarkup += /* html */ `
              <p class="question">
                <span class="bubble">${question + punc}</span>
              </p>
              <p class="answer">
                <span class="bubble">
                ${values[response][i] || 'No reponse'}
                </span>
              </p>
            `
          }
          // set dialog markup
          dialog.innerHTML = /* html */ `
          <h2>${title}</h2>
          <div class="development-modal-content">
            ${mediaHTML ? mediaHTML : ''}
            ${surveyMarkup}
          </div>
          <form method="dialog">
            <button>Close</button>
          </form>
          `
          // show dialog on pin click
          pin.addEventListener('click', () => {
            dialog.showModal()
          })
          // handle red and gray pins
        } else {
          pin.bindPopup(`<h2>${title}</h2>`)
        }
      })
    })

  devMap.invalidateSize()
  for (let i = 0; i <= 2000; i += 100) {
    setTimeout(() => {
      devMap.invalidateSize()
    }, i)
  }
})
