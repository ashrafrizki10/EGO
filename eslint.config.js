import nextConfig from 'eslint-config-next';

const config = [
  ...nextConfig,
  {
    ignores: ['node_modules', '.next', 'out'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/set-state-in-effect': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];

export default config;
