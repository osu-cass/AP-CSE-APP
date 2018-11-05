const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType, config) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.[jt]sx?/,
    exclude: /node_modules/,
    loader: 'babel-loader',
  });

  config.module.rules.push({
    test: /\.ttf/,
    loader: 'file-loader',
  });

  config.resolve.extensions.push(".ttf", ".ts", ".tsx");

  // Return the altered config
  return config;
};
