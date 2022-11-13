const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '&locales': path.resolve(__dirname, 'src/locales'),
      '&config': path.resolve(__dirname, 'src/config'),
    },
  };
  return config;
};
