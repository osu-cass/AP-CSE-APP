const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType, config) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need

  config.module.rules.push({
    test: /\.ttf/,
    loader: 'file-loader'
  });

  config.module.rules.push(
    {
      test: /\.storybook\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/addon-storysource/loader'),
          options: { parser: 'typescript' }
        }
      ],
      enforce: 'pre'
    },
    {
      test: /\.[jt]sx?/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
    {
      test: /\.less$/,
      include: path.resolve(
        __dirname,
        '..',
        'node_modules',
        '@osu-cass',
        'sb-components',
        'lib',
        'Assets',
        'Styles'
      ),
      use: ['style-loader', 'css-loader?sourceMap', 'less-loader?sourceMap']
    }
  );

  config.resolve.extensions.push('.ts', '.tsx', '.less');
  // Return the altered config
  return config;
};
