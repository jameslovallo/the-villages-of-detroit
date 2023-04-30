import ardi, { html } from '../assets/ardi-min.js'

const staff = [
  {
    name: 'Christianne Sims',
    description:
      'Christianne Sims, our board president and a Detroit native, has lived in Jos. Berry Subdivision for over forty years.',
  },
  {
    name: 'Edythe Ford',
    description:
      'Edythe Ford, our vice president, a Detroit native has lived in Pingree Park for most of her life, with her family arriving in the neighborhood in 1942.',
  },
  {
    name: 'Tonya Woods Brown',
    description:
      'Tonya Woods Brown, our treasurer and a Detroit native, has strong ties to the North Village neighborhood dating back to the 1960s.',
  },
  {
    name: 'Candice Bowman',
    description:
      'Candice Bowman, our secretary and a Detroit native, lives in the Islandview neighborhood.',
  },
  {
    name: 'Mac Farr',
    description:
      'Mac Farr, Originally from Jackson, Michigan, Mac attended Michigan State University’s James Madison College.  In 2004, after graduating, he moved to New York where he lived for a decade working in the financial services sector.  Moving to Detroit in 2012, he worked in Mike Duggan’s first campaign for mayor, and in the Mayor’s office during the bankruptcy.  He began with the Villages in 2015.  His work has focused on the development of infrastructure, housing stabilization, transportation, policy advocacy and community engagement.  Mac’s achievements include the development of the housing stabilization program Keep It In the Family, raising $1.5 million since getting to the organization and getting City policies in place such as the alley restoration program as well as the installation of speed humps.  Mac lives in Pingree Park and is a member of the Indian Village Tennis Club and Jefferson Avenue Presbyterian Church.',
  },
  {
    name: 'Alexis Mann',
    description:
      'Alexis Mann, our program manager, is a native of Detroit and lives in the St. Clair Heights neighborhood.  Prior to joining the nonprofit sector Alexis devoted herself to her community as the president of Living the Good Life Community Association for the past three years. This devotion turned into a passion to help as many residents as possible obtain intergenerational wealth.',
  },
  {
    name: 'David Preuss',
    description:
      'Br. David Preuss was born in Detroit were his family owned a pharmacy. Joining the Capuchin religious community in 1969, he worked in a variety of ministries mainly in the African-American communities of Milwaukee and Detroit. He became pastor of St. Charles Church (from 1987-2008) and moved to St. Bonaventure(2016 to present) to work in the ministries there. He was on the board of Islandview Village Development Corporation that built affordable housing on Townsend and Baldwin streets, as well as several smaller projects.',
  },
  {
    name: 'Ashley Davidson',
    description:
      "Ashley Davidson is an award winning creative director and filmmaker with a background in urban design. As the founder of Citizen Brand + Content Lab, she leads a team to reveal shared values through stories and design to generate audiences for organizations supporting community sustainability. Ashley is the co-owner and designer of two Detroit-based hubs: Kiesling and Milwaukee Caffè, a restored 120 year old tavern and adjoining walk-up espresso bar in Detroit’s Milwaukee Junction. Since opening in 2018, Kiesling has won the AIA Award for Commercial Design and been voted Detroit's favorite community bar. Ashley also serves on the board of the DIA Friends of the Detroit Film Theatre, and resides in West Village where she restored a home in 2018.",
  },
  {
    name: 'Damon Dickerson',
    description:
      'Damon Dickerson, director, an Ypsilanti native, lives in Islandview',
  },
  {
    name: 'Martha Coates',
    description:
      'Martha Coates, director, a Detroit native, lives in East Village',
  },
  {
    name: 'Ederique Goudia',
    description:
      'Ederique Goudia, director, A Louisiana native, Ederique Goudia has been a resident of East Village since 2018 and a Michigan resident, chef, and food activist for over 20 years. Beyond her ability to create delicious and culturally significant food, she is committed to the health and sustainability of our local community and food system, both here in the Villages and beyond. This is evident through her recent work with Detroit Food Academy, a non-profit that teaches youth about culinary and food entrepreneurship, and Make Food Not Waste, a non-profit committed to keeping food out of landfills, slowing climate change, and creating lasting solutions to food waste. Throughout her long standing career in the hospitality industry, she has also been a fierce advocate for child nutrition, food waste, food insecurity, small business support, minimum wage increase and mental health support for hospitality workers. She is also a dedicated board member of Eastside Community Network, Make Food Not Waste, and a member of the Junior League of Detroit, and Slow Foods USA. ',
  },
]

ardi({
  tag: 'who-we-are',
  shadow: false,
  template() {
    return html`
      <div class="auto-grid" style="--col-size: 175px">
        ${staff.map(
          (p) => html`
            <ardi-dialog modal>
              <div slot="opener" class="card">
                <img
                  src=${`/@/assets/who-we-are/${p.name}.webp`}
                  alt=${p.name}
                />
                <div class="actions">
                  <button class="arrow">${p.name}</button>
                </div>
              </div>
              <h3>${p.name}</h3>
              <p style="font-size: 14px">${p.description}</p>
              <button
                slot="closer"
                class="close"
                aria-label="close"
                title="close"
              ></button>
            </ardi-dialog>
          `
        )}
      </div>
    `
  },
})
