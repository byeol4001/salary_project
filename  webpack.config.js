module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery',
    }),
  ],
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/style/_variables.scss";
        `,
      },
    },
  },
};
