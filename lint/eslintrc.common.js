module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true,
        'jquery': true,
        'commonjs': true
    },
    'extends': [
        'eslint:recommended',
        // vue文件使用 eslint
        // 'plugin:vue/essential'
    ],
    'parserOptions': {
        "parser": "babel-eslint",
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    'plugins': [
        "babel",
        // 配置react 插件lint react
        // "react",
        // "vue"
    ],
    'rules': {
        // 控制几个空格一个缩进
        'indent': ['error', 4],

        // 双引号错误提示
        'quotes': [
            'warn',
            'single',
            { 'allowTemplateLiterals': true }
        ],

        // 空格和tab混用
        'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],

        // 空语句块
        'no-empty': ['error', {
            'allowEmptyCatch': true // 允许catch语句中空语句
        }],

        // 禁止在正则表达式中出现空字符集
        "no-empty-character-class": "error",

        // 禁止出现空函数
        "no-empty-function": "error",

        // 禁止使用空解构模式
        "no-empty-pattern": "error",

        // 变量声明后出现空行
        "newline-after-var": ["warn", "always"],

        // 分号
        'semi': ['warn', 'always'],

        // 如果有属性名称要求使用引号，则所有的属性名称都要使用引号；否则，禁止所有的属性名称使用引号
        // keys  当数字作为属性使用引号
        'quote-props': ["error", "consistent", {"numbers": true}],

        // 分号前后是否有空格
        "semi-spacing": ["error", { "before": false, "after": true }],

        // 没有使用的变量
        'no-unused-vars': ['error', {
            // 不需要检测的变量，支持正则
            "varsIgnorePattern": "React"
        }],

        // 禁止在代码中出现console
        'no-console': ['error', {
            allow: ['warn', 'error', 'dir', 'log']
        }],
        'no-alert': ['warn'],

        // es6 模版字符串中不出现空格 要求或禁止模板字符串中的嵌入表达式周围空格的使用
        'template-curly-spacing': ['error', 'never'],

        // 要求或禁止在模板标记和它们的字面量之间有空格
        "template-tag-spacing": ["error", "never"],

        // 禁止花括号使用空格
        'object-curly-spacing': ['error', 'never', { 'objectsInObjects': true }],

        // 在数组元素的开始盒末尾不使用空格
        'array-bracket-spacing': ['error', 'never'],

        // 在开始注释的地方后出现一个空格
        'spaced-comment': ['error', 'always', { 'exceptions': ['-', '+', '/'] }],

        // 构造函数中的super调用
        'constructor-super': 'error',

        // 函数括号之前是否有空格
        'space-before-function-paren': ['error', {
            'anonymous': 'always',
            'named': 'always',
            'asyncArrow': 'always'
        }],

        // 禁止或强制圆括号内的空格
        'space-in-parens': ['error', 'never'],

        // 要求中缀操作符周围有空格
        'space-infix-ops': 'error',

        // 将对像的属性分行显示
        "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": false }],

        // 配置对象属性是否自动换行对象个数 >= 2是自动换行
        "object-curly-newline": ["error", {
            "ObjectExpression": {
                "multiline": true,
                "minProperties": 3
            },
            "ObjectPattern": { "multiline": true },
            "ImportDeclaration": "never",
            "ExportDeclaration": {
                "multiline": true,
                "minProperties": 3
            }
        }],

        // 数组后面的括号有没有换行符，有一个所有都独行显示，或者超过5个也独行显示
        "array-bracket-newline": ["warn", { "multiline": true, "minItems": 5 }],

        // 强制数组方法的回调函数中有 return 语句
        "array-callback-return": "error",

        // 要求箭头函数的参数使用圆括号
        "arrow-parens": ["error", "as-needed"],

        // 箭头函数前后有空格
        "arrow-spacing": "error",

        // 强制把变量的使用限制在其定义的作用域范围内
        "block-scoped-var": "warn",

        // 强制在但行代码块使用一致的空格
        "block-spacing": ["error", "never"],

        // 强制在代码块中使用一致的大括号风格 不允许开括号和闭括号在同一行
        "brace-style": ["error", "1tbs", { "allowSingleLine": false }],

        // nodejs中的一些回掉函数应该强制使用return
        "callback-return": ["error", [
            "done",
            "send.error",
            "send.success"
        ]],

        // 强制使用骆驼拼写法命名约定
        "camelcase": ["error", {properties: "never"}],

        // 要求或禁止末尾逗号
        "comma-dangle": ["error", "never"],

        // 强制在逗号前后使用一致的空格
        "comma-spacing": ["error", { "before": false, "after": true }],

        // 强制使用一致的逗号风格
        "comma-style": ["error", "last"],

        // 此规则目的在于通过在项目中设置一个圈复杂度阈值来控制代码的复杂度,
        // 比如 if...else...elseif 语句的次数
        "complexity": ["warn", 10],

        // 强制在计算的属性的方括号中使用一致的空格
        "computed-property-spacing": ["error", "never"],

        //要求 return 语句要么总是指定返回的值，要么不指定
        "consistent-return": ["warn", { "treatUndefinedAsUnspecified": true }],

        // 强制所有控制语句使用一致的括号风格
        "curly": ["error", "multi-line"],


        // 强制在点号之前和之后一致的换行
        "dot-location": ["error", "property"],

        // 强制尽可能地使用点号 避免对保留字使用点好
        "dot-notation": ["error", { "allowKeywords": false }],

        //要求或禁止文件末尾存在空行
        "eol-last": ["error", "always"],

        // 不强制要求使用 === 和 !==
        "eqeqeq": ["error", "smart", { "null": "ignore" }],

        //要求或禁止在函数标识符和其调用之间有空格
        "func-call-spacing": ["error", "never"],

        "generator-star-spacing": ["error", { "before": false, "after": true }],

        // require语句放在一个文件的首部
        // "global-require": "warn",
        "guard-for-in": "warn",

        "init-declarations": "warn",
        "jsx-quotes": ["error", "prefer-double"],

        // 对象的字面量和值之间有空格
        "key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
        "keyword-spacing": "error",

        // 在函数内部使用一致的换行风格 函数的括号内的参数永远不换行
        "function-paren-newline": ["error", "never"],

        // 强制使用一致的换行符风格
        "linebreak-style": ["error", "unix"],

        // 强制可嵌套的块的最大深度
        "max-depth": ["warn", 3],

        // 强制一行的最大长度

        // "max-len": ["error", 120, 4, {"ignoreUrls": true}],
        // "max-lines": ["warn", 800],


        // "max-statements": ["warn", 30, {"ignoreTopLevelFunctions": true}],
        // "max-statements-per-line": ["error", { "max": 1 }],

        // "new-cap": "error",
        // "new-parens": "warn",

        // "no-buffer-constructor": "warn",
        // "no-caller": "error",
        // "no-case-declarations": "error",

        // "no-class-assign": "error",
        // "no-compare-neg-zero": "error",
        // "no-cond-assign": "error",
        // "no-confusing-arrow": ["error", {"allowParens": true}],
        // "no-const-assign": "error",
        // "no-constant-condition": "error",

        // "no-control-regex": "error",
        // "no-delete-var": "error",

        // "no-dupe-args": "error",
        // "no-dupe-class-members": "error",
        // "no-dupe-keys": "error",
        // "no-duplicate-case": "error",
        // "no-duplicate-imports": "warn",


        // "no-eval": "error",
        // "no-ex-assign": "error",
        // "no-extend-native": "error",
        // "no-extra-bind": "warn",
        // "no-extra-boolean-cast": "error",
        // "no-extra-label": "error",
        // "no-extra-parens": ["error", "functions"],
        // 禁止不必要的分号  比如使用多个分号 ;;
        "no-extra-semi": "error",
        // "no-fallthrough": "error",
        // "no-floating-decimal": "error",
        // "no-func-assign": "warn",
        // "no-global-assign": "error",


        // "no-implied-eval": "error",

        // "no-inner-declarations": "error",
        // "no-invalid-regexp": "error",

        // "no-irregular-whitespace": "error",




        // "no-lonely-if": "error",
        // "no-loop-func": "warn",

        // "no-multi-assign": "warn",
        // "no-multi-spaces": ["error", {"exceptions": {"Property": false}}],
        // "no-multi-str": "warn",
        "no-multiple-empty-lines":  ["error", { "max": 2, "maxEOF": 0 }],
        // "no-negated-condition": "warn",
        // "no-negated-in-lhs": "error",

        // "no-new": "error",
        // "no-new-func": "error",
        // "no-new-object": "error",
        // "no-new-require": "error",
        // "no-new-symbol": "error",
        // "no-new-wrappers": "error",
        // "no-obj-calls": "error",
        // "no-octal": "error",
        // "no-octal-escape": "error",
        // "no-param-reassign": ["warn", {"props": true}],




        // "no-proto": "error",

        // "no-redeclare": "error",
        // "no-regex-spaces": "error",

        // 禁止在返回语句中赋值，如果需要使用使用括号将表达式括起来
        "no-return-assign": ["error", "except-parens"],
        // "no-return-await": "error",
        // "no-script-url": "warn",
        // "no-self-assign": "error",
        // "no-self-compare": "error",
        // "no-sequences": "error",


        // "no-spaced-func": "error",
        // "no-sparse-arrays": "error",

        // "no-tabs": "warn",


        // "no-this-before-super": "error",
        // "no-throw-literal": "warn",
        "no-trailing-spaces": "error",
        // "no-undef": "error",
        // "no-undef-init": "warn",

        // "no-underscore-dangle": "warn",
        // "no-unexpected-multiline": "error",
        // "no-unmodified-loop-condition": "warn",
        // "no-unneeded-ternary": "error",
        // "no-unreachable": "error",
        // "no-unsafe-finally": "error",
        // "no-unsafe-negation": "error",
        // "no-unused-expressions": ["warn", {"allowShortCircuit": true}],
        // "no-unused-labels": "error",
        // "no-use-before-define": ["error", {"variables": false, "classes": false, "functions": true}],
        // "no-useless-call": "warn",
        // "no-useless-computed-key": "error",
        // "no-useless-concat": "warn",
        // "no-useless-constructor": "error",

        // 禁止不必要的转义
        "no-useless-escape": "error",

        // disallow renaming import, export, and destructured assignments to the same name
        "no-useless-rename": "error",

        // "no-useless-return": "error",

        // "no-var": "error",
        // "no-void": "error",

        // "no-whitespace-before-property": "error",
        // "no-with": "error",


        // "object-shorthand": ["off", "consistent-as-needed"],
        // "one-var": ["error", "never"],

        // 强制变量声明使用一致的的换行
        "one-var-declaration-per-line": ["error", "always"],


        // 强制操作符使用一致的换行符风格  比如 2+3+4 如果使用多行书写 + 号在行首
        "operator-linebreak": ["error", "before"],


        // "prefer-arrow-callback": "warn",
        // "prefer-const": "error",

        // "prefer-numeric-literals": "error",
        // "prefer-promise-reject-errors": "warn",

        // "prefer-rest-params": "error",
        // "prefer-spread": "warn",

        // "radix": "error",
        // "require-await": "warn",

        // "require-yield": "error",
        // "rest-spread-spacing": ["error", "never"],

        // 强制使用分号的位置 只允许分号出现在句子的末尾
        "semi-style": ["error", "last"],

        // 要求或禁止在一元操作符之前或之后存在空格
        "space-unary-ops": "warn",

        // 强制在 switch 的冒号左右有空格
        "switch-colon-spacing": ["error", {"before": false, "after": true}],

        // 要求 symbol 描述
        "symbol-description": "warn",

        // 要求必须调用 isNaN()检查 NaN
        "use-isnan": "error",

        // 强制 typeof 表达式与有效的字符串进行比较
        // 对于绝大多数用例而言，typeof 操作符的结果是以下字符串字面量中的
        //一个："undefined"、"object"、"boolean"、"number"、"string"、"function"、"symbol" 和 "bigint"。把 typeof 操作符的结果与其它
        "valid-typeof": ["error"],

        // 需要把立即执行的函数包裹起来  强制总是包裹，但允许其它风格
        "wrap-iife": ["error", "any"],

        // 要求或者禁止Yoda条件  if ("red" === color)
        "yoda": ["error", "never", {"exceptRange": true}]
    }
};
