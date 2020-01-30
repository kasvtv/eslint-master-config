const path = require('path')

/* User defined constants */

/* Environment: */
const ecmaVersion = 11
const minSupportedEcmaVersion = 10
const browser = false
const imports = true
const node = true
const babel = false

/* Frameworks and libraries: */
const react = false
const jquery = false
const jest = false

/* Styling: */
const checkStyling = false
const indentSetting = 'tab'

/* End of user defined constants */

const reactVersion = react && require('react').version // eslint-disable-line global-require
let importPath
try {
  importPath = require('./jsconfig.json').compilerOptions.baseUrl
} catch {
  importPath = '.'
}

const env = process.env.NODE_ENV || ''
const isInProductionMode = env.includes('production')
const isInStylingMode = env.includes('styl')
const isStylingExplicitlyDisabled = env.includes('no-styl')
const style = (checkStyling || isInStylingMode) && !isStylingExplicitlyDisabled ? 'warn' : 'off'

const production_warn = isInProductionMode ? 'warn' : 'off'
const production_error = isInProductionMode ? 'error' : 'warn'

module.exports = {
  env: {
    es6: ecmaVersion >= 6,
    browser,
    node,
    jest,
    jquery,
  },
  extends: [].concat(
    'eslint:recommended',
    jest ? 'plugin:jest/recommended' : [],
    react ? 'plugin:react/recommended' : [],
  ),
  parser: babel ? 'babel-eslint' : null,
  parserOptions: {
    sourceType: 'module',
    ecmaVersion,
    ecmaFeatures: {
      impliedStrict: true,
      jsx: react,
    },
  },
  plugins: [
    jest && 'jest',
    react && ['react', 'react-hooks'],
    imports && 'import',
    node && 'node',
    ecmaVersion >= 6 && 'promise',
  ]
    .flat()
    .filter(Boolean),
  rules: Object.assign(
    {
      'accessor-pairs': 'warn',
      'array-bracket-newline': [style, 'consistent'],
      'array-bracket-spacing': 'off',
      'array-callback-return': ['warn', { allowImplicit: true }],
      'array-element-newline': 'off',
      'arrow-body-style': 'off',
      'arrow-parens': 'off',
      'arrow-spacing': style,
      'block-scoped-var': 'error',
      'block-spacing': style,
      'brace-style': [style, '1tbs', { allowSingleLine: true }],
      'callback-return': [
        'warn',
        [
          'cb',
          'cb2',
          'error_cb',
          'cb_error',
          'success_cb',
          'cb_success',
          'callback',
          'error_callback',
          'callback_error',
          'success_callback',
          'success_error',
          'errorCb',
          'cbError',
          'successCb',
          'cbSuccess',
          'errorCallback',
          'callbackError',
          'successCallback',
          'successError',
          'done',
        ],
      ],
      camelcase: 'off',
      'capitalized-comments': 'off',
      'class-methods-use-this': 'off',
      'comma-dangle': [
        style,
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: minSupportedEcmaVersion >= 6 ? 'always-multiline' : 'ignore',
        },
      ],
      'comma-spacing': style,
      'comma-style': style,
      complexity: 'off',
      'computed-property-spacing': [style, 'never'],
      'consistent-return': 'off',
      'consistent-this': 'off',
      'constructor-super': 'error',
      curly: [style, 'multi-line'],
      'default-case': 'warn',
      'dot-location': [style, 'property'],
      'dot-notation': 'warn', // is "suggestion" -> annoying
      'eol-last': [style, 'never'],
      eqeqeq: 'warn', // is "suggestion" -> not func eq
      'for-direction': 'off',
      'func-call-spacing': style,
      'func-name-matching': 'off',
      'func-names': 'off',
      'func-style': 'off',
      'function-paren-newline': [style, 'consistent'],
      'generator-star-spacing': style,
      'getter-return': 'error',
      'global-require': 'warn',
      'guard-for-in': 'off',
      'handle-callback-err': 'warn',
      'id-blacklist': 'off',
      'id-length': 'off',
      'id-match': 'off',
      'implicit-arrow-linebreak': [style, 'beside'],
      indent: [
        style,
        indentSetting,
        {
          ignoredNodes: ['JSXElement'],
          flatTernaryExpressions: true,
        },
      ],
      'init-declarations': 'off',
      'jsx-quotes': [style, 'prefer-single'],
      'key-spacing': style,
      'keyword-spacing': style,
      'line-comment-position': 'off',
      'linebreak-style': 'off',
      'lines-around-comment': 'off',
      'lines-between-class-members': [style, 'always', { exceptAfterSingleLine: true }],
      'max-classes-per-file': 'off',
      'max-depth': 'off',
      'max-len': 'off',
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'max-nested-callbacks': 'error',
      'max-params': 'off',
      'max-statements': 'off',
      'max-statements-per-line': 'off',
      'multiline-comment-style': 'off',
      'multiline-ternary': 'off',
      'new-cap': [
        'warn',
        {
          newIsCap: true,
          capIsNew: true,
          properties: true,
        },
      ],
      'new-parens': 'warn',
      'newline-per-chained-call': [style, { ignoreChainWithDepth: 3 }],
      'no-alert': 'warn',
      'no-array-constructor': 'warn',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'off',
      'no-bitwise': 'off',
      'no-buffer-constructor': 'off',
      'no-caller': 'error',
      'no-case-declarations': 'warn',
      'no-class-assign': 'error',
      'no-compare-neg-zero': 'error',
      'no-cond-assign': ['error', 'except-parens'],
      'no-confusing-arrow': 'off',
      'no-continue': 'off',
      'no-console': production_warn,
      'no-const-assign': 'error',
      'no-constant-condition': 'error',
      'no-control-regex': 'warn',
      'no-delete-var': 'error',
      'no-debugger': production_error,
      'no-div-regex': 'off',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-duplicate-imports': 'off', // disabled in favor of import/no-duplicates
      'no-else-return': 'warn',
      'no-empty': production_error, // should have justifying comment
      'no-empty-character-class': 'warn',
      'no-empty-function': 'off',
      'no-empty-pattern': 'warn',
      'no-eq-null': 'off',
      'no-eval': 'error',
      'no-ex-assign': 'warn',
      'no-extend-native': 'error',
      'no-extra-boolean-cast': 'warn',
      'no-extra-bind': 'warn', // is "suggestion" -> not func eq
      'no-extra-label': 'off', // is "suggestion" -> annoying  // no-labels
      'no-extra-parens': 'off', // useful for unambiguity
      'no-extra-semi': 'warn',
      'no-fallthrough': 'warn',
      'no-floating-decimal': style,
      'no-func-assign': 'error',
      'no-global-assign': 'error',
      'no-implicit-coercion': 'warn',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-inline-comments': 'off',
      'no-inner-declarations': 'off',
      'no-invalid-regexp': 'error',
      'no-invalid-this': 'off',
      'no-irregular-whitespace': 'warn',
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-label-var': 'off', // no-labels
      'no-lone-blocks': 'warn',
      'no-lonely-if': 'warn',
      'no-loop-func': 'warn',
      'no-magic-numbers': 'off',
      'no-misleading-character-class': 'warn',
      'no-mixed-operators': 'off',
      'no-mixed-requires': 'warn',
      'no-mixed-spaces-and-tabs': style,
      'no-multi-assign': 'off',
      'no-multi-spaces': style,
      'no-multi-str': 'warn',
      'no-multiple-empty-lines': [style, { max: 2 }],
      'no-negated-condition': 'warn',
      'no-nested-ternary': 'off',
      'no-new': 'warn',
      'no-new-func': 'error',
      'no-new-object': 'warn',
      'no-new-require': 'error',
      'no-new-symbol': 'error',
      'no-new-wrappers': 'error',
      'no-obj-calls': 'error',
      'no-octal': 'warn',
      'no-octal-escape': 'error',
      'no-param-reassign': 'warn',
      'no-path-concat': 'error',
      'no-plusplus': 'off',
      'no-process-env': 'off',
      'no-process-exit': 'off',
      'no-proto': production_error,
      'no-prototype-builtins': 'error',
      'no-redeclare': 'error',
      'no-regex-spaces': 'warn',
      'no-restricted-globals': 'error',
      'no-restricted-imports': 'error',
      'no-restricted-modules': 'error',
      'no-restricted-properties': 'error',
      'no-restricted-syntax': 'error',
      'no-return-assign': 'error',
      'no-return-await': 'warn',
      'no-script-url': 'warn',
      'no-self-assign': 'warn',
      'no-self-compare': 'warn',
      'no-sequences': 'error',
      'no-shadow': 'warn',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'warn',
      'no-sync': 'warn',
      'no-tabs': [style, { allowIndentationTabs: indentSetting === 'tab' }],
      'no-template-curly-in-string': 'warn',
      'no-ternary': 'off',
      'no-this-before-super': 'warn',
      'no-throw-literal': 'off', // disabled in favor of async fns
      'no-trailing-spaces': style,
      'no-undef-init': 'warn',
      'no-undef': 'error',
      'no-undefined': 'off',
      'no-underscore-dangle': 'off',
      'no-unmodified-loop-condition': 'warn',
      'no-unneeded-ternary': 'warn',
      'no-unreachable': 'warn',
      'no-unsafe-finally': 'warn',
      'no-unsafe-negation': 'warn',
      'no-unused-expressions': 'off',
      'no-unused-labels': 'off', // is "suggestion" -> annoying  // no-labels
      'no-unexpected-multiline': 'error',
      'no-unused-vars': [
        'warn',
        {
          ignoreRestSiblings: true,
        },
      ],
      'no-use-before-define': [
        'error',
        {
          functions: false,
        },
      ],
      'no-useless-catch': 'warn',
      'no-useless-computed-key': 'warn',
      'no-useless-constructor': 'warn',
      'no-useless-call': 'warn',
      'no-useless-rename': 'warn',
      'no-useless-concat': 'warn',
      'no-useless-escape': 'warn',
      'no-useless-return': 'warn',
      'no-var': 'error', // is "suggestion" -> dangerous
      'no-void': 'error',
      'no-warning-comments': 'off',
      'no-whitespace-before-property': style,
      'no-with': 'warn',
      'nonblock-statement-body-position': style,
      'object-curly-newline': [
        style,
        {
          multiline: true,
          consistent: true,
          minProperties: 4,
        },
      ],
      'object-curly-spacing': [style, 'always'],
      'object-property-newline': [style, { allowAllPropertiesOnSameLine: true }],
      'object-shorthand': babel || minSupportedEcmaVersion > 5 ? 'warn' : 'off',
      'one-var': ['error', 'never'],
      'one-var-declaration-per-line': 'off',
      'operator-assignment': 'off',
      'operator-linebreak': 'off',
      'padded-blocks': 'off',
      'padding-line-between-statements': 'error',
      'prefer-arrow-callback': 'off',
      'prefer-const': 'warn', // is "suggestion" -> annoying
      'prefer-destructuring': 'off',
      'prefer-named-capture-group': 'off',
      'prefer-numeric-literals': 'off',
      'prefer-object-spread': 'off',
      'prefer-promise-reject-errors': 'off',
      'prefer-rest-params': 'off',
      'prefer-spread': 'off',
      'prefer-template': 'off',
      'quote-props': [style, 'consistent-as-needed'],
      quotes: [style, 'single', { avoidEscape: true }],
      radix: 'off',
      'require-atomic-updates': 'warn',
      'require-await': 'warn',
      'require-unicode-regexp': 'off',
      'require-yield': 'warn',
      'rest-spread-spacing': style,
      semi: [style, 'always'],
      'semi-spacing': style,
      'semi-style': style,
      'sort-imports': 'off',
      'sort-keys': 'off',
      'sort-vars': 'off',
      'space-before-blocks': style,
      'space-before-function-paren': [
        style,
        {
          anonymous: 'never',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'space-in-parens': style,
      'space-infix-ops': style,
      'space-unary-ops': [
        style,
        {
          words: true,
          nonwords: false,
        },
      ],
      'spaced-comment': 'off',
      strict: 'off',
      'switch-colon-spacing': style,
      'symbol-description': 'warn',
      'template-curly-spacing': [style, 'never'],
      'template-tag-spacing': style,
      'unicode-bom': ['error', 'never'],
      'use-isnan': 'error',
      'valid-typeof': 'error',
      'vars-on-top': 'off',
      'wrap-iife': [style, 'inside', { functionPrototypeMethods: true }],
      'wrap-regex': 'off',
      'yield-star-spacing': [style, 'before'],
      yoda: ['warn', 'never', { exceptRange: true }],
    },
    imports && {
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-restricted-paths': 'off',
      'import/no-absolute-path': 'off',
      'import/no-dynamic-require': 'error',
      'import/no-internal-modules': 'off',
      'import/no-webpack-loader-syntax': 'off',
      'import/no-self-import': 'error',
      'import/no-cycle': 'error',
      'import/no-useless-path-segments': 'warn',
      'import/no-relative-parent-imports': 'off',
      'import/no-unused-modules': 'off',
      'import/export': 'error',
      'import/no-named-as-default': 'warn',
      'import/no-named-as-default-member': 'warn',
      'import/no-deprecated': 'off',
      'import/no-extraneous-dependencies': 'warn',
      'import/no-mutable-exports': 'off',
      'import/unambiguous': 'off',
      'import/no-commonjs': 'off',
      'import/no-amd': 'error',
      'import/no-nodejs-modules': 'off',
      'import/first': 'warn',
      'import/exports-last': 'off',
      'import/no-duplicates': 'warn', // to replace no-duplicate-imports
      'import/no-namespace': 'warn',
      'import/extensions': 'off',
      'import/order': 'off',
      'import/newline-after-import': style,
      'import/prefer-default-export': 'off',
      'import/max-dependencies': 'off',
      'import/no-unassigned-import': 'off',
      'import/no-named-default': 'off',
      'import/no-default-export': 'off',
      'import/no-named-export': 'off',
      'import/no-anonymous-default-export': 'off',
      'import/group-exports': 'off',
      'import/dynamic-import-chunkname': 'off',
    },
    jest && {
      'jest/consistent-test-it': 'warn',
      'jest/expect-expect': production_warn,
      'jest/lowercase-name': 'off',
      'jest/no-alias-methods': style,
      'jest/no-disabled-tests': 'warn',
      'jest/no-commented-out-tests': production_error,
      'jest/no-empty-title': 'warn',
      'jest/no-focused-tests': production_error, // circumvents whole test suite
      'jest/no-hooks': 'off',
      'jest/no-identical-title': 'warn',
      'jest/no-jasmine-globals': 'warn',
      'jest/no-jest-import': 'error',
      'jest/no-mocks-import': 'error',
      'jest/no-large-snapshots': 'off',
      'jest/no-test-callback': 'error', // possibility of evergreen test
      'jest/no-test-prefixes': style,
      'jest/no-test-return-statement': 'warn',
      'jest/no-truthy-falsy': 'off',
      'jest/prefer-expect-assertions': 'off',
      'jest/prefer-spy-on': 'warn',
      'jest/prefer-strict-equal': 'off',
      'jest/prefer-to-be-null': style,
      'jest/prefer-to-be-undefined': style,
      'jest/prefer-to-contain': style,
      'jest/prefer-to-have-length': style,
      'jest/require-to-throw-message': 'off',
      'jest/valid-describe': 'error',
      'jest/valid-expect-in-promise': 'error',
      'jest/valid-expect': 'error',
      'jest/prefer-todo': 'warn',
      'jest/prefer-called-with': 'off',
    },
    react && {
      'react/boolean-prop-naming': 'off',
      'react/button-has-type': 'warn',
      'react/default-props-match-prop-types': 'off',
      'react/destructuring-assignment': 'off',
      'react/display-name': 'off',
      'react/forbid-component-props': 'off',
      'react/forbid-dom-props': 'off',
      'react/forbid-elements': 'off',
      'react/forbid-prop-types': 'off',
      'react/forbid-foreign-prop-types': 'off',
      'react/no-access-state-in-setstate': 'warn',
      'react/no-array-index-key': 'off',
      'react/no-children-prop': 'warn',
      'react/no-danger': production_error,
      'react/no-danger-with-children': production_error,
      'react/no-deprecated': 'error',
      'react/no-did-mount-set-state': 'error',
      'react/no-did-update-set-state': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'warn',
      'react/no-is-mounted': 'warn',
      'react/no-multi-component': 'off',
      'react/no-redundant-should-component-update': 'error',
      'react/no-render-return-value': 'warn',
      'react/no-set-state': 'off',
      'react/no-typos': 'warn',
      'react/no-string-refs': 'warn',
      'react/no-this-in-sfc': 'error',
      'react/no-unescaped-entities': [
        'warn',
        {
          forbid: ['<', '>', '||', '&&'],
        },
      ],
      'react/no-unknown-property': 'warn',
      'react/no-unsafe': 'error',
      'react/no-unused-state': 'warn',
      'react/no-unused-prop-types': 'warn',
      'react/no-will-update-set-state': 'error',
      'react/prefer-es6-class': minSupportedEcmaVersion >= 6 ? 'error' : 'off',
      'react/prefer-read-only-props': 'off',
      'react/prefer-stateless-function': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'error',
      'react/require-default-props': 'off',
      'react/require-optimization': 'off',
      'react/require-render-return': 'warn',
      'react/self-closing-comp': [
        style,
        {
          component: true,
          html: true,
        },
      ],
      'react/sort-comp': 'off',
      'react/sort-prop-types': 'off',
      'react/state-in-constructor': 'off',
      'react/style-prop-object': 'error',
      'react/void-dom-elements-no-children': 'error',
      'react/jsx-boolean-value': 'off',
      'react/jsx-child-element-spacing': 'off',
      'react/jsx-closing-bracket-location': style,
      'react/jsx-closing-tag-location': 'off',
      'react/jsx-curly-spacing': style,
      'react/jsx-equals-spacing': style,
      'react/jsx-filename-extension': 'off',
      'react/jsx-first-prop-new-line': [style, 'multiline-multiprop'],
      'react/jsx-handler-names': 'off',
      'react/jsx-indent': [
        style,
        indentSetting,
        {
          indentLogicalExpressions: true,
          checkAttributes: true,
        },
      ],
      'react/jsx-indent-props': [style, indentSetting],
      'react/jsx-key': 'warn',
      'react/jsx-max-depth': 'off',
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-no-bind': [
        style,
        {
          ignoreDOMComponents: true,
          ignoreRefs: true,
          allowArrowFunctions: true,
          allowFunctions: true,
          allowBind: false,
        },
      ],
      'react/jsx-no-comment-textnodes': 'warn',
      'react/jsx-no-duplicate-props': 'error',
      'react/jsx-no-literals': 'off',
      'react/jsx-no-target-blank': 'warn',
      'react/jsx-no-undef': 'error',
      'react/jsx-one-expression-per-line': [style, { allow: 'single-child' }],
      'react/jsx-curly-brace-presence': [style, { props: 'never', children: 'ignore' }],
      'react/jsx-fragments': style,
      'react/jsx-pascal-case': style,
      'react/jsx-props-no-multi-spaces': style,
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-sort-default-props': 'off',
      'react/jsx-sort-props': 'off',
      'react/jsx-space-before-closing': 'off', // deprecated
      'react/jsx-tag-spacing': [
        style,
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'warn',
      'react/jsx-wrap-multilines': [
        style,
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    node && {
      'node/no-callback-literal': 'off',
      'node/no-exports-assign': 'error',
      'node/no-extraneous-import': 'error',
      'node/no-extraneous-require': 'error',
      'node/no-missing-import': 'error',
      'node/no-missing-require': 'error',
      'node/no-unpublished-bin': 'error',
      'node/no-unpublished-import': 'off',
      'node/no-unpublished-require': 'off',
      'node/no-unsupported-features/es-builtins': 'error',
      'node/no-unsupported-features/es-syntax': 'error',
      'node/no-unsupported-features/node-builtins': 'error',
      'node/process-exit-as-throw': 'off',
      'node/shebang': 'off',
    },
    ecmaVersion >= 6 && {},
  ),
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, importPath)],
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: reactVersion,
    },
    minSupportedEcmaVersion,
  },
}

/* To get all rules (to check for updates/deprecations), goto: https://eslint.org/docs/rules/
 * Then: [...document.querySelectorAll("table.rule-list td:nth-child(3) p a")].map(x => x.innerHTML)
 */

console.log('eslint config parsed')
