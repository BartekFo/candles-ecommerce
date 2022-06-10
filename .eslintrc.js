module.exports = {
  extends: ['@masterborn/eslint-config/frontend/typescript', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'prettier/prettier': ['error'],
    'prefer-arrow-callback': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
  },
};
