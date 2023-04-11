import developments from '/developments/developments.js'

window.initMap = () => {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: { lat: 42.361582463007856, lng: -82.99748471510723 },
    mapId: '4504f8b37365c3d0',
  })

  const colors = {
    gray: '#424242',
    green: '#2E7D32',
    red: '#C62828',
  }

  const key = {
    blue: 'Project Completed',
    green: 'Questionnaire Returned',
    yellow: 'Questionnaire Pending',
    red: 'Questionnaire Rejected',
    grey: 'Status Unknown',
  }

  const pins = {
    gray: (glyph) =>
      new google.maps.marker.PinView({
        background: colors.gray,
        borderColor: colors.gray,
        glyphColor: 'white',
        glyph: glyph,
      }),
    green: (glyph) =>
      new google.maps.marker.PinView({
        background: colors.green,
        borderColor: colors.green,
        glyphColor: 'white',
        glyph: glyph,
      }),
    red: (glyph) =>
      new google.maps.marker.PinView({
        background: colors.red,
        borderColor: colors.red,
        glyphColor: 'white',
        glyph: glyph,
      }),
  }

  const infoWindow = new google.maps.InfoWindow()

  developments.forEach(({ position, title, color, link }, i) => {
    const pin = pins[color](String(i + 1))

    const marker = new google.maps.marker.AdvancedMarkerView({
      position,
      map,
      title: `${i + 1}. ${title}`,
      content: pin.element,
    })

    marker.addListener('click', () => {
      infoWindow.close()
      infoWindow.setContent(`
				<div class="info">
					<h3>${marker.title}</h3>
					<p style="--key: ${colors[color]}">${key[color]}</p>
					${link ? `<spa-link href="${link}" class="arrow">Learn more</spa-link>` : ''}
				</div>
			`)
      infoWindow.open(marker.map, marker)
    })
  })
}
