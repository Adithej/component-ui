/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const path = require("path");
// const sassVars = require(__dirname + "component-ui/styles/colors.js");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "colors.scss";`,
  },
};
