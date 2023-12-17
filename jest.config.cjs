module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': ["ts-jest", {
      tsconfig: './tsconfig.json'
    }],
    '^.+\\.css$': '<rootDir>/cssTransform.cjs',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': 'identity-obj-proxy',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
};
