// https://medium.com/tech-angels-publications/bundle-your-favicons-with-webpack-b69d834b2f53
// Thanks Oliver Olivier Gonzalez!

const imageContext = require.context(
  '!!file?name=assets/images/[name].[ext]!.',
  true,
  /\.(png)$/
);
imageContext.keys().forEach(imageContext);
