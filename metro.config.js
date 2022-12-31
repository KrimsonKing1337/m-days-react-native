const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: {
      src: path.join(__dirname, './src'),
      utils: path.join(__dirname, './src/utils'),
      components: path.join(__dirname, './src/components'),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
