const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd? '/c92' : '', // Set assetPrefix for GitHub pages
  exportPathMap: function() {
    return {
      '/': { page: '/' },
    };
  },
};
