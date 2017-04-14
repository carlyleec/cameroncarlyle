// Markdown
const markdown = require('./markdown.md');

// Images
const image = require('../../../images/unca-120.png');

const data = {
  id: 'unca',
  school: 'University of North Carolina, Asheville',
  image,
  link: 'https://www.unca.edu/',
  city: 'Asheville',
  state: 'NC',
  latitude: -82.565303,
  longitude: 35.616909,
  degree_type: 'BS',
  degree: 'Environmental Studies',
  concentration: 'Earth Science',
  graduation_month: 'May',
  graduation_year: 2010,
  coursework: [
    'Hydrogeology',
    'Mineralogy & Petrology',
    'Environmental Geology',
    'Soils',
    'Ecology and Field Biology',
    'Environmental Ethics',
    'Environmental Management',
    'Environmental Economics',
    'International Relations',
    'Economic Development',
    'Humanities',
    'Introduction to GIS',
  ],
  body: markdown.body,
};

export default data;
