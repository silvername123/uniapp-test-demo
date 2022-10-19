require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  globals: {
    wx: 'readonly', // wx mini program
    my: 'readonly', // ali mini program
    uni: 'readonly', // uni
    plus: 'readonly', // uni
    weex: 'readonly', // uni
    getApp: 'readonly', //uni
    getCurrentPages: 'readonly', //uni
    defineOptions: 'readonly', //unplugin-vue-define-options 自定义添加额外属性，如name等
    BaseValueType: 'readonly', //src/env.d.ts  除null、undefined以外的其他基本数据类型
    Uniui: 'readonly', //scr/types/uni-ui.d.ts  uni-ui组件库Methods定义
    SysComponent: 'readonly', //scr/types/components.d.d.ts  自定义组件的暴露自己的属性定义
    API: 'readonly', //请求定义的命名空间 API
    NodeJS: 'readonly',
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    // 未使用声明，方便调试
    '@typescript-eslint/no-unused-vars': [1],
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/no-namespace': ['off'],

    '@typescript-eslint/no-empty-function': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-this-alias': ['off'],
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Function: false,
        },
        extendDefaults: true,
      },
    ],

    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index'],
      },
    ],

    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        // 比起页面空格产生的影响，我还是希望代码看起来简单一点
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
  },
};
