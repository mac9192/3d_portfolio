const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Add GLB loader for both server and client builds
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/assets/3d/', // Specify the public path to GLB files
          outputPath: 'static/assets/3d/', // Specify the output path for GLB files
        },
      },
    });

    // Add loader for audio files (ogg, mp3, wav, mpeg)
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    });

    // Rest of your webpack configurationss

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
