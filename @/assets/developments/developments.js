export default [
  {
    title: 'Gray Library Project',
    position: { lat: 42.3523613, lng: -83.0038327 },
    color: 'green',
    response: 2,
  },
  {
    title: 'East Lafayette Apartments',
    position: { lat: 42.3520461, lng: -83.0000051 },
    color: 'red',
  },
  {
    title: 'Mixed Use Development',
    position: { lat: 42.3515292, lng: -82.9952268 },
    color: 'green',
    response: 3,
  },
  {
    title: 'Trombly School',
    position: { lat: 42.3576583, lng: -82.9881013 },
    color: 'red',
  },
  {
    title: '7410 Kercheval',
    position: { lat: 42.3565318, lng: -83.0041476 },
    color: 'red',
  },
  {
    title: 'St. Charles Phase II',
    position: { lat: 42.3543033, lng: -83.0017282 },
    color: 'red',
  },
  {
    title: 'St. Charles Phase III',
    position: { lat: 42.3541447, lng: -83.002152 },
    color: 'red',
  },
  {
    title: 'Single Family Housing',
    position: { lat: 42.3594032, lng: -82.9922847 },
    color: 'green',
    response: 9,
  },
  {
    title: 'Senior Affordable Development',
    position: { lat: 42.3532499, lng: -82.9915164 },
    color: 'red',
  },
  {
    title: 'Affordable Mixed Use Housing',
    position: { lat: 42.3645548, lng: -83.0118416 },
    color: 'gray',
  },
  {
    title: 'Townhome or Rental',
    position: { lat: 42.3561336, lng: -82.9980075 },
    color: 'green',
    response: 5,
  },
  {
    title: 'Proposed Garvey Redevelopment',
    position: { lat: 42.3585319, lng: -83.0006576 },
    color: 'gray',
  },
  {
    title: '9226 Kercheval Commercial',
    position: { lat: 42.3629503, lng: -82.9878638 },
    color: 'red',
  },
  {
    title: 'Townsend Infill Development',
    position: { lat: 42.3602331, lng: -83.0061456 },
    color: 'gray',
  },
  {
    title: '130 East Grand Boulevard',
    position: { lat: 42.3482893, lng: -83.0024027 },
    color: 'green',
    response: 11,
  },
  {
    title: 'City Duplex Project',
    position: { lat: 42.3624478, lng: -82.9998092 },
    color: 'green',
    response: 6,
  },
  {
    title: 'The Kercheval LLC',
    position: { lat: 42.364065, lng: -82.9850678 },
    color: 'gray',
  },
  {
    title: 'Good Shepherd Church Arts Complex',
    position: { lat: 42.3607513, lng: -82.9840003 },
    color: 'green',
    response: 12,
  },
  {
    title: 'Kercheval East',
    position: { lat: 42.360846, lng: -82.99326 },
    color: 'red',
  },
  {
    title: 'Potential Retail Establishment',
    position: { lat: 42.3577209, lng: -83.0012379 },
    color: 'red',
  },
  {
    title: '180 East Grand Boulevard',
    position: { lat: 42.3493277, lng: -83.0030711 },
    color: 'red',
  },
  {
    title: '133 East Grand Boulevard',
    position: { lat: 42.3482493, lng: -83.0030282 },
    color: 'green',
    response: 8,
  },
  {
    title: 'St. Paul Manor',
    position: { lat: 42.3537044, lng: -83.0058392 },
    color: 'green',
    response: 4,
  },
  {
    title: 'El Tovar',
    position: { lat: 42.3529909, lng: -83.0054744 },
    color: 'green',
    response: 7,
  },
  {
    title: 'Kingston Arms',
    position: { lat: 42.3523724, lng: -83.0050452 },
    color: 'green',
    response: 4,
  },
  {
    title: 'Capuchin Soup Kitchen',
    position: { lat: 42.3511255, lng: -83.0126872 },
    color: 'green',
    response: 10,
  },
  {
    title: '9301 Kercheval',
    position: { lat: 42.363452, lng: -82.9876036 },
    color: 'green',
    response: 13,
    mediaHTML: /* html */ `
      <h3>Before/After Renders</h3>
      ${Array(4)
        .fill(null)
        .map((n, i) => {
          return /* html */ `
          <two-up percent="50">
            <img slot="first" src="/@/assets/developments/9301-kercheval/after-${i}.jpg">
            <img slot="second" src="/@/assets/developments/9301-kercheval/before-${i}.jpg">
          </two-up>
        `
        })
        .join(/* html */ `<br>`)}
    `,
  },
  {
    title: 'C9101 East Jefferson',
    position: { lat: 42.3578709, lng: -82.9861874 },
    color: 'green',
    response: 14,
  },
]
