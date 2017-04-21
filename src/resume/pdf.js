// https://medium.com/tech-angels-publications/bundle-your-favicons-with-webpack-b69d834b2f53
// Thanks Oliver Olivier Gonzalez!

const pdfContext = require.context(
  '!!file?name=[name].[ext]!.',
  true,
  /\.(pdf)$/
);
pdfContext.keys().forEach(pdfContext);
