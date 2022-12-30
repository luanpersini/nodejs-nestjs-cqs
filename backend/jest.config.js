module.exports = {
  rootDir: './',
  roots: ["<rootDir>/src/", "<rootDir>/tests/"],
  collectCoverage: false,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',    
    '!**/tests/**',
    '!**/__tests__/**',
    '!**/**.module.ts'
  ],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest'
  },
  moduleNameMapper: {   
    "src/(.*)": ["<rootDir>/src/$1"],
    "@api/(.*)": ["<rootDir>/src/api/$1"],
    "@config/(.*)": ["<rootDir>/src/config/$1"],    
    "@infrastructure/(.*)": ["<rootDir>/@infrastructure/$1"],
    "@presentation/(.*)": ["<rootDir>/src/presentation/$1"],
    "@tests/(.*)": ["<rootDir>/tests/$1"]
  }
}
