const path = require("path");
const sassUtils = require(__dirname + "/src/libs/sass-utils");
const sassVars = require(__dirname + "/src/config/variables.js");

const nextConfig = {
  sassOptions: {
    // add @import 'styles/_functions'; to all scss files.
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import 'styles/_functions';`,
    functions: {
      "get($keys)": function (keys) {
        keys = keys.getValue().split(".");
        let result = sassVars;
        for (let i = 0; i < keys.length; i++) {
          result = result[keys[i]];
        }
        result = sassUtils.castToSass(result);

        return result;
      },
      "getColors()": function () {
        return sassUtils.castToSass(sassVars.colors);
      },
      "getThemes()": function () {
        return sassUtils.castToSass(sassVars.themes);
      },
    },
  },
};

module.exports = {
  env: {
    SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
    SPOTIFY_USER_ID: process.env.SPOTIFY_USER_ID,
  },
};
