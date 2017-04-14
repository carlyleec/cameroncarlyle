// Markdown
const markdown = require('./markdown.md');

// Images
const image = require('../../../images/appstate-120.png');

const data = {
  id: 'appstate',
  school: 'Appalachian State University',
  image,
  link: 'http://www.appstate.edu/',
  city: 'Boone',
  state: 'NC',
  latitude: -81.678829,
  longitude: 36.212527,
  degree_type: 'MA',
  degree: 'Geography',
  concentration: 'Geographic Information Science',
  graduation_month: 'May',
  graduation_year: 2013,
  coursework: [
    'Advanced GIS',
    'Web GIS & Database Design',
    'Digital Image Processing',
    'Python & C++ for GIS',
    'Principles of Geocomputation',
    'Seminar in GIS',
    'Advanced Quantitative and Qualitative Methods in Geography',
  ],
  body: markdown.body,
};

export default data;
