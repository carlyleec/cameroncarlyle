// Markdown
const markdown = require('./markdown.md');

// Images
const image = require('../../../images/design.png');

const data = {
  id: 'design',
  title: 'DESIGN',
  linkTo: '/expertise/design',
  image,
  body: markdown.body,
};

export default data;
