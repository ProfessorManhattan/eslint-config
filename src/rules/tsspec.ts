export const tsSpecRules = {
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  'init-declarations': 'off',
  'jest-async/expect-return': 'error',
  'jest/no-hooks': 'off',
  'jest/prefer-expect-assertions': ['warn', { onlyFunctionsWithAsyncKeyword: true }],
  'jest/prefer-lowercase-title': ['error', { ignoreTopLevelDescribe: true }],
  'jest/unbound-method': 'off',
  'max-lines-per-function': 'off',
  'no-magic-numbers': 'off',
  'no-undef': 'off'
}
