module.exports = {
    extends: [
      'react-app',
      'plugin:prettier/recommended'
    ],
    rules: {
      'prettier/prettier': ['error', {
        semi: false,
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 80,
        tabWidth: 2
      }]
    }
  }
  