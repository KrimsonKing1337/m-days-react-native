const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: {
      src: path.join(__dirname, './src'),
      utils: path.join(__dirname, './src/utils'),
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
