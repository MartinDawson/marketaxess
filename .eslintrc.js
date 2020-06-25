module.exports = {
  extends: [
    'prettier',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'max-len': "off"
},
  parserOptions: {
    project: './tsconfig.json',
  },
};
