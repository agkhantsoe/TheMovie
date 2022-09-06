const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  base: '/ZLand-2months-project/',
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 4201,
    hot: true,
  },
};
