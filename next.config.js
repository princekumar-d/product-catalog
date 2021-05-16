
module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    apiUrl: 'http://web_api:3001'
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiUrl: 'http://localhost:3001'
  },
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