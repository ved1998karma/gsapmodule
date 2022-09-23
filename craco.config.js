const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.join(path.resolve(__dirname, "./src")),
      "@homeAssets": path.join(path.resolve(__dirname, "./src/assets/home")),
    },
  },
};
