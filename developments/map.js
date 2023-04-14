const developments = [
  {
    title: 'Gray Library Project',
    position: { lat: 42.354441507816155, lng: -83.00360378483467 },
    color: 'green',
    link: '/developments/gray-library',
  },
  {
    title: 'East Lafayette Apartments',
    position: { lat: 42.35584240483724, lng: -83.00000563070935 },
    color: 'red',
  },
  {
    title: 'Mixed Use Development',
    position: { lat: 42.35566073933661, lng: -82.9943577624797 },
    color: 'green',
    link: '/developments/jefferson-and-van-dyke-mixed-use',
  },
  {
    title: 'Trombly School',
    position: { lat: 42.361219978788604, lng: -82.98715056227766 },
    color: 'red',
  },
  {
    title: '7410 Kercheval',
    position: { lat: 42.36164765969402, lng: -83.00480607605431 },
    color: 'red',
  },
  {
    title: 'St. Charles Phase II',
    position: { lat: 42.35733947009573, lng: -83.00295312162629 },
    color: 'red',
  },
  {
    title: 'St. Charles Phase III',
    position: { lat: 42.354265693038215, lng: -83.00213825599462 },
    color: 'red',
  },
  {
    title: 'Single Family Housing',
    position: { lat: 42.359520474338765, lng: -82.99230091736847 },
    color: 'green',
    link: '/developments/fischer-saint-paul-single-family-housing',
  },
  {
    title: 'Senior Affordable Development',
    position: { lat: 42.357493837913154, lng: -82.99074376242712 },
    color: 'red',
  },
  {
    title: 'Affordable Mixed Use Housing',
    position: { lat: 42.36939016931428, lng: -83.01258968074845 },
    color: 'green',
    link: '/developments/mack-field-mixed-use',
  },
  {
    title: 'Townhome or Rental',
    position: { lat: 42.35630033376185, lng: -82.99802256154797 },
    color: 'green',
    link: '/developments/mack-field-mixed-use',
  },
  {
    title: 'Proposed Garvey Redevelopment',
    position: { lat: 42.363048545254905, lng: -82.99988673907103 },
    color: 'gray',
  },
  {
    title: '9226 Kercheval Commercial',
    position: { lat: 42.366987306864345, lng: -82.98757120759852 },
    color: 'green',
    link: '/developments/9226-kercheval-commercial',
  },
  {
    title: 'Townsend Infill Development',
    position: { lat: 42.36032360707325, lng: -83.00615712900971 },
    color: 'gray',
  },
  {
    title: '130 East Grand Boulevard',
    position: { lat: 42.35249858107644, lng: -83.00158266259349 },
    color: 'red',
  },
  {
    title: 'City Duplex Project',
    position: { lat: 42.36645664118516, lng: -82.9984309393721 },
    color: 'red',
  },
  {
    title: 'The Kercheval LLC',
    position: { lat: 42.36685443424119, lng: -82.98506093030876 },
    color: 'gray',
  },
  {
    title: 'Good Shepherd Church Arts Complex',
    position: { lat: 42.36089146115661, lng: -82.98395674805545 },
    color: 'green',
    link: '/developments/good-shepherd-church-arts-complex',
  },
  {
    title: 'Kercheval East',
    position: { lat: 42.364867843938654, lng: -82.99225866217303 },
    color: 'red',
  },
  {
    title: 'Potential Retail Establishment',
    position: { lat: 42.362499990838174, lng: -82.99987073952926 },
    color: 'red',
  },
  {
    title: '180 East Grand',
    position: { lat: 42.353574174254724, lng: -83.00288113079334 },
    color: 'red',
  },
  {
    title: '133 East Grand',
    position: { lat: 42.352665907206266, lng: -83.00216596259635 },
    color: 'green',
    link: '/developments/133-east-grand',
  },
  {
    title: 'St. Paul Manor',
    position: { lat: 42.357645095547596, lng: -83.00663259889338 },
    color: 'green',
    link: '/developments/st-paul-manor',
  },
  {
    title: 'El Tovar',
    position: { lat: 42.356595140512944, lng: -83.00480550792777 },
    color: 'green',
    link: '/developments/el-tovar',
  },
  {
    title: 'Kingston Arms',
    position: { lat: 42.35722099615289, lng: -83.00446630794917 },
    color: 'green',
    link: '/developments/kingston-arms',
  },
  {
    title: 'Capuchin Soup Kitchen',
    position: { lat: 42.3557954056011, lng: -83.01234070799664 },
    color: 'green',
    link: '/developments/capuchin-soup-kitchen',
  },
]

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
            ${
              link
                ? `<spa-link href="${link}" class="arrow">Learn more</spa-link>`
                : ''
            }
          </div>
        `)
      infoWindow.open(marker.map, marker)
    })
  })
}
// update
