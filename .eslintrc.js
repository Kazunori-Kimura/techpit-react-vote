module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        // JSX の利用を次の拡張子のファイルで許可する: .js, .jsx, .ts, .tsx
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        // import 時に次の拡張子は省略可能とする:  .js, .jsx, .ts, .tsx
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                mjs: 'never',
            },
        ],
        // PropTypesの指定を不要にする
        'react/prop-types': 'off',
        // jsx でのスプレッド構文を許可する
        'react/jsx-props-no-spreading': 'off',
        // label と input の関連づけ
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                labelComponents: [],
                labelAttributes: [],
                controlComponents: [],
                assert: 'either',
                depth: 25,
            },
        ],
        // `import React from 'react';` で ESLint が no-use-before-define の警告を出す
        // -> reactjs - 'React' was used before it was defined - Stack Overflow
        //    https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined
        // create-react-app の 以下の issue のようだが、open のままなのでルールを無視するよう設定
        // -> TypeScript - Incorrect *no-use-before-define* warning · Issue #7325 · facebook/create-react-app
        //    https://github.com/facebook/create-react-app/issues/7325
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
    },
    settings: {
        // import時に省略される拡張子の設定:  .js, .jsx, .ts, .tsx
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
