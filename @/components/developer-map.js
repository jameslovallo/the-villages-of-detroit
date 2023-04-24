import {
  icon,
  map,
  marker,
  tileLayer,
} from 'https://cdn.skypack.dev/leaflet@1.9.3'
import developments from '/@/assets/developments/developments.js'

const devMap = map(document.querySelector('#map')).setView(
  [42.361582463007856, -82.99748471510723],
  14
)

window.addEventListener('load', () => devMap.invalidateSize())
for (let i = 0; i <= 2000; i += 100) {
  setTimeout(() => devMap.invalidateSize(), i)
}

tileLayer(
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20,
  }
).addTo(devMap)

developments.forEach((d) => {
  const {
    title,
    color,
    position: { lat, lng },
    response,
  } = d

  const pin = marker([lat, lng], {
    icon: icon({
      iconUrl: `/@/assets/developments/${color}.svg`,
      iconSize: [32, 32],
      iconAnchor: [16, 30],
      popupAnchor: [0, -30],
    }),
  }).addTo(devMap)

  if (color === 'green') {
    const dialog = document.createElement('dialog')
    document.body.appendChild(dialog)
    dialog.classList.add('development-modal')
    dialog.innerHTML = `
        <h2>${title}</h2>
        <div class="development-modal-content">
          <developer-survey property="${response}"></developer-survey>
        </div>
        <form method="dialog">
          <button>Close</button>
        </form>
      `
    pin.addEventListener('click', () => {
      dialog.showModal()
    })
  } else {
    pin.bindPopup(`<h2>${title}</h2>`)
  }
})
