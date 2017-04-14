// Markdown
const markdown = require('./markdown.md');

// Images
const image = require('../../../images/development.png');

const data = {
  id: 'development',
  title: 'DEVELOPMENT',
  linkTo: '/expertise/development',
  image,
  body: markdown.body,
};

export default data;
