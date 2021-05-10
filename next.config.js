
module.exports = {
  images: {
    domains: ['asset1.cxnmarksandspencer.com'],
  },
  webpack: (config, {webpack}) => {
    config.plugins.push(new webpack.IgnorePlugin(/pages.*\/spec.*/));
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    
    return config;
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
  
  
};