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

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
