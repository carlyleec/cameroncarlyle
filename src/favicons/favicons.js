// https://medium.com/tech-angels-publications/bundle-your-favicons-with-webpack-b69d834b2f53
// Thanks Oliver Olivier Gonzalez!

const faviconsContext = require.context(
  '!!file?name=assets/favicons/[name].[ext]!.',
  true,
  /\.(svg|png|ico|xml|json)$/
);
faviconsContext.keys().forEach(faviconsContext);
