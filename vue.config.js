const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
module.exports = {
  chainWebpack: (config) => {
    config
      .plugin("svg-sprite-loader")
      .after("html")
      .use(SpriteLoaderPlugin)
      .tap(() => [{ plainSprite: true }]);

    config.module
      .rule("svg-sprite-loader")
      .test(/icons.*\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .end()
      .use("svgo-loader")
      .loader("svgo-loader");

    config.module.rule("svg").exclude.add(/icons/);
  },
};
