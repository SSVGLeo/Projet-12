const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const rule = {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "node_modules/@emailjs/browser")
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/plugin-proposal-optional-chaining"
            ]
          }
        }
      };

      webpackConfig.module.rules.push(rule);
      return webpackConfig;
    }
  }
};
