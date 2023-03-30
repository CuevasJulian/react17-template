const {defaults} = require('jest-config');

export default {
  setupFilesAfterEnv: ['./jest-setup.ts'],
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts?$":"ts-jest",
    "^.+\\.tsx?$": "ts-jest",
  },
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  transformIgnorePatterns:[
    "node_modules/(?!variables/.*)"
  ],
  moduleNameMapper:{
    "\\.(scss)$":"identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__test__/__mocks__/fileMock.js"
  }
};