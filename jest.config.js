/* eslint-disable linebreak-style */
/* eslint-disable quotes */

module.exports = {
  moduleFileExtensions: ["js"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"  
  },
  rootDir: "src",
  testEnvironment: "jest-environment-jsdom",
  testRegex: ".test.js$",
  setupFilesAfterEnv: ["jest-chain"]
};
