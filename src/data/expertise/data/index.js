// Markdown
const markdown = require('./markdown.md');

// Images
const image = require('../../../images/data.png');

const data = {
  id: 'data',
  title: 'DATA',
  image,
  linkTo: '/expertise/data',
  body: markdown.body,
};

export default data;
