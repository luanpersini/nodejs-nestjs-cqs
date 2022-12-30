module.exports = {
  rootDir: ".",
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!**/*.d.ts',
    "!<rootDir>/node_modules/",
    '!<rootDir>/src/__tests__/'
  ]  
}