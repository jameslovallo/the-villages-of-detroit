import {
  icon,
  map,
  marker,
  tileLayer,
} from 'https://cdn.skypack.dev/leaflet@1.9.3'
import developments from '/@/assets/developments/developments.js'

setTimeout(() => {
  const devMap = map(document.querySelector('#map')).setView(
    [42.361582463007856, -82.99748471510723],
    14
  )

  tileLayer(
    'https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png',
    {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
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
      }),
    }).addTo(devMap)

    if (color === 'green') {
      const dialog = document.createElement('dialog')
      document.body.appendChild(dialog)
      dialog.classList.add('development-modal')
      pin.addEventListener('click', () => {
        dialog.innerHTML = `
          <div style="padding: 1rem; margin-bottom: 5rem;">
            <h2>${title}</h2>
            <developer-survey property="${response}"></developer-survey>
          </div>
          <form method="dialog">
            <button>Close</button>
          </form>
				`
        dialog.showModal()
      })
    } else {
      pin.bindPopup(`<h2>${title}</h2>`)
    }
  })
}, 1000)
