import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  lang: "zh-CN",
  title:
    "JavaScript Guidebook - 📚 JavaScript 知识图谱：ECMAScript、DOM、BOM、HTML5、计算机网络",
  description: "A guidebook for the convenience of the front-end developers",
  head: [["link", { rel: "icon", href: "/favicon.webp" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "JavaScript Guidebook",
    logo: "/favicon.webp",
    nav: [
      { text: "基本语法", link: "/basic-concept" },
      { text: "内置对象", link: "/standard-built-in-objects" },
      { text: "核心模块", link: "/core-modules" },
      { text: "OOP", link: "/object-oriented-programming" },
      { text: "BOM", link: "/browser-object-model" },
      { text: "DOM", link: "/document-object-model" },
      { text: "计算机网络", link: "/computer-networks" },
      { text: "设计模式", link: "/design-patterns" },
    ],

    sidebar: {
      "/basic-concept/": [
        {
          text: "基本语法",
          base: "/basic-concept/",
          items: [
            {
              text: "词法语法",
              link: "/lexical-grammar/lexical-grammar",
            },
            {
              text: "数据类型和值",
              base: "/basic-concept/data-types/",
              collapsed: true,
              items: [
                {
                  text: "数据类型",
                  link: "/data-types",
                },
                {
                  text: "类型检测",
                  link: "/type-check",
                },
                {
                  text: "类型转换",
                  link: "/type-conversion",
                },
              ],
            },
            {
              text: "表达式",
              base: "/basic-concept/expressions/expressions/",
              collapsed: true,
              items: [
                {
                  text: "字面量",
                  link: "/literal",
                },
                {
                  text: "数组初始化表达式",
                  link: "/array-initializer",
                },
                {
                  text: "对象初始化表达式",
                  link: "/object-initializer",
                },
                {
                  text: "属性访问器",
                  link: "/property-accessors",
                },
              ],
            },
            {
              text: "运算符",
              base: "/basic-concept/expressions/operators/",
              collapsed: true,
              items: [
                { text: "in", link: "/in" },
                {
                  text: "instanceof",
                  link: "/instanceof",
                },
                {
                  text: "delete",
                  link: "/delete",
                },
                {
                  text: "typeof",
                  link: "/typeof",
                },
                {
                  text: "void",
                  link: "/void",
                },
                {
                  text: "字符串运算符",
                  link: "/string-operator",
                },
                {
                  text: "算术运算符",
                  link: "/arithmetic-operators",
                },
                {
                  text: "更新表达式",
                  link: "/update-expressions",
                },
                {
                  text: "赋值运算符",
                  link: "/assignment-operators",
                },
                {
                  text: "位运算移位运算符",
                  link: "/bitwise-operators",
                },
                {
                  text: "逗号运算符",
                  link: "/comma-operator",
                },
                {
                  text: "比较运算符",
                  link: "/comparation-operators",
                },
                {
                  text: "条件运算符",
                  link: "/conditional-operator",
                },
                {
                  text: "逻辑运算符",
                  link: "/logical-operators",
                },
                {
                  text: "扩展运算符",
                  link: "/spread-operator",
                },
                {
                  text: "分组表达式",
                  link: "/the-grouping-operator",
                },
                {
                  text: "解构赋值",
                  link: "/detructing-assignment",
                },
                {
                  text: "运算符优先级",
                  link: "/operators-precedence",
                },
              ],
            },
            {
              text: "语句和声明",
              base: "/basic-concept/statements-and-declarations/",
              collapsed: true,
              items: [
                {
                  text: "块语句",
                  link: "/block",
                },
                {
                  text: "变量声明",
                  link: "/declarations-and-the-variable-statement",
                },
                {
                  text: "if 语句",
                  link: "/the-if-statement",
                },
                {
                  text: "continue 语句",
                  link: "/the-continue-statement",
                },
                {
                  text: "break 语句",
                  link: "/the-break-statement",
                },
                {
                  text: "return 语句",
                  link: "/the-return-statement",
                },
                {
                  text: "switch 语句",
                  link: "/the-switch-statement",
                },
                {
                  text: "label 语句",
                  link: "/labelled-statements",
                },
                {
                  text: "throw 语句",
                  link: "/the-throw-statement",
                },
                {
                  text: "try-catch 语句",
                  link: "/the-try-statement",
                },
                {
                  text: "do...while 语句",
                  link: "/the-do-while-statement",
                },
                {
                  text: "while 语句",
                  link: "/the-while-statement",
                },
                {
                  text: "for 语句",
                  link: "/the-for-statement",
                },
                {
                  text: "for...in 语句",
                  link: "/the-for-in-statement",
                },
                {
                  text: "for...of 语句",
                  link: "/the-for-of-statement",
                },
              ],
            },
          ],
        },
      ],
      "/standard-built-in-objects/": [
        {
          text: "标准内置对象",
          base: "/standard-built-in-objects/",
          items: [
            {
              text: "全局对象 - 值属性",
              collapsed: true,
              base: "/standard-built-in-objects/the-global-object/value-properties/",
              items: [
                {
                  text: "Infinity",
                  link: "/infinity",
                },
                {
                  text: "NaN",
                  link: "/NaN",
                },
                {
                  text: "undefined",
                  link: "/undefined",
                },
              ],
            },
            {
              text: "全局对象 - 函数属性",
              collapsed: true,
              base: "/standard-built-in-objects/the-global-object/function-properties/",
              items: [
                {
                  text: "eval",
                  link: "/eval",
                },
                {
                  text: "isFinite",
                  link: "/isFinite",
                },
                {
                  text: "isNaN",
                  link: "/isNaN",
                },
                {
                  text: "parseFloat",
                  link: "/parseFloat",
                },
                {
                  text: "parseInt",
                  link: "/parseInt",
                },
                {
                  text: "decodeURI",
                  link: "/decodeURI",
                },
                {
                  text: "decodeURIComponent",
                  link: "/decodeURIComponent",
                },
                {
                  text: "encodeURI",
                  link: "/encodeURI",
                },
                {
                  text: "encodeURIComponent",
                  link: "/encodeURIComponent",
                },
              ],
            },
            {
              text: "Object",
              collapsed: true,
              base: "/standard-built-in-objects/fundamental-objects/object/",
              items: [
                {
                  text: "Object",
                  link: "/object",
                },
                {
                  text: "Object.assign",
                  link: "/assign",
                },
                {
                  text: "Object.create",
                  link: "/create",
                },
                {
                  text: "Object.defineProperties",
                  link: "/defineProperties",
                },
                {
                  text: "Object.defineProperty",
                  link: "/defineProperty",
                },
                {
                  text: "Object.entries",
                  link: "/entries",
                },
                {
                  text: "Object.freeze",
                  link: "/freeze",
                },
                {
                  text: "Object.getOwnPropertyDescriptor",
                  link: "/getOwnPropertyDescriptor",
                },
                {
                  text: "Object.getOwnPropertyDescriptors",
                  link: "/getOwnPropertyDescriptors",
                },
                {
                  text: "Object.getOwnPropertyNames",
                  link: "/getOwnPropertyNames",
                },
                {
                  text: "Object.getOwnPropertySymbols",
                  link: "/getOwnPropertySymbols",
                },
                {
                  text: "Object.getPrototypeOf",
                  link: "/getPrototypeOf",
                },
                {
                  text: "Object.is",
                  link: "/is",
                },
                {
                  text: "Object.isExtensible",
                  link: "/isExtensible",
                },
                {
                  text: "Object.isFrozen",
                  link: "/isFrozen",
                },
                {
                  text: "Object.isSealed",
                  link: "/isSealed",
                },
                {
                  text: "Object.keys",
                  link: "/keys",
                },
                {
                  text: "Object.preventExtensions",
                  link: "/preventExtensions",
                },
                {
                  text: "Object.seal",
                  link: "/seal",
                },
                {
                  text: "Object.setPrototypeOf",
                  link: "/setPrototypeOf",
                },
                {
                  text: "Object.values",
                  link: "/values",
                },
                {
                  text: "Object.prototype.hasOwnProperty",
                  link: "/hasOwnProperty",
                },
                {
                  text: "Object.prototype.isPrototypeOf",
                  link: "/isPrototypeOf",
                },
                {
                  text: "Object.prototype.prototypeIsEnumerable",
                  link: "/propertyIsEnumerable",
                },
                {
                  text: "Object.prototype.toString",
                  link: "/toString",
                },
                {
                  text: "Object.fromEntries",
                  link: "/fromEntries",
                },
              ],
            },
            {
              text: "Function",
              collapsed: true,
              base: "/standard-built-in-objects/fundamental-objects/function/",
              items: [
                {
                  text: "Function",
                  link: "/function",
                },
                {
                  text: "Function.prototype.apply",
                  link: "/apply",
                },
                {
                  text: "Function.prototype.call",
                  link: "/call",
                },
                {
                  text: "Function.prototype.bind",
                  link: "/bind",
                },
              ],
            },
            {
              text: "Symbol",
              collapsed: true,
              base: "/standard-built-in-objects/fundamental-objects/symbol/",
              items: [
                {
                  text: "Symbol",
                  link: "/symbol",
                },
                {
                  text: "Symbol.hasInstance",
                  link: "/hasInstance",
                },
                {
                  text: "Symbol.isConcatSpreadable",
                  link: "/isConcatSpreadable",
                },
                {
                  text: "Symbol.iterator",
                  link: "/iterator",
                },
                {
                  text: "Symbol.match",
                  link: "/match",
                },
                {
                  text: "Symbol.replace",
                  link: "/replace",
                },
                {
                  text: "Symbol.search",
                  link: "/search",
                },
                {
                  text: "Symbol.species",
                  link: "/species",
                },
                {
                  text: "Symbol.split",
                  link: "/split",
                },
                {
                  text: "Symbol.toPrimitive",
                  link: "/toPrimitive",
                },
                {
                  text: "Symbol.toStringTag",
                  link: "/toStringTag",
                },
                {
                  text: "Symbol.unscopables",
                  link: "/unscopables",
                },
                {
                  text: "Symbol.prototype.description",
                  link: "/description",
                },
              ],
            },
            {
              text: "其他基础对象",
              collapsed: true,
              base: "/standard-built-in-objects/fundamental-objects/",
              items: [
                {
                  text: "Boolean",
                  link: "/boolean",
                },
                {
                  text: "Error",
                  link: "/error",
                },
              ],
            },
            {
              text: "数字和日期",
              collapsed: true,
              base: "/standard-built-in-objects/numbers-and-dates/",
              items: [
                {
                  text: "Date",
                  link: "/date/date",
                },
                {
                  text: "Math",
                  link: "/math/math",
                },
                {
                  text: "Number",
                  link: "/number/number",
                },
              ],
            },
            {
              text: "String",
              collapsed: true,
              base: "/standard-built-in-objects/text-processing/string/",
              items: [
                {
                  text: "String",
                  link: "/string",
                },
                {
                  text: "String.fromCharCode",
                  link: "/static/fromCharCode",
                },
                {
                  text: "String.fromCodePoint",
                  link: "/static/fromCodePoint",
                },
                {
                  text: "String.raw",
                  link: "/static/raw",
                },
                {
                  text: "String.prototype.charAt",
                  link: "/prototype/charAt",
                },
                {
                  text: "String.prototype.charCodeAt",
                  link: "/prototype/charCodeAt",
                },
                {
                  text: "String.prototype.codePointAt",
                  link: "/prototype/codePointAt",
                },
                {
                  text: "String.prototype.concat",
                  link: "/prototype/concat",
                },
                {
                  text: "String.prototype.endsWith",
                  link: "/prototype/endsWith",
                },
                {
                  text: "String.prototype.includes",
                  link: "/prototype/includes",
                },
                {
                  text: "String.prototype.indexOf",
                  link: "/prototype/indexOf",
                },
                {
                  text: "String.prototype.lastIndexOf",
                  link: "/prototype/lastIndexOf",
                },
                {
                  text: "String.prototype.localCompare",
                  link: "/prototype/localeCompare",
                },
                {
                  text: "String.prototype.match",
                  link: "/prototype/match",
                },
                {
                  text: "String.prototype.matchAll",
                  link: "/prototype/matchAll",
                },
                {
                  text: "String.prototype.normalize",
                  link: "/prototype/normalize",
                },
                {
                  text: "String.prototype.padEnd",
                  link: "/prototype/padEnd",
                },
                {
                  text: "String.prototype.padStart",
                  link: "/prototype/padStart",
                },
                {
                  text: "String.prototype.repeat",
                  link: "/prototype/repeat",
                },
                {
                  text: "String.prototype.replace",
                  link: "/prototype/replace",
                },
                {
                  text: "String.prototype.replaceAll",
                  link: "/prototype/replaceAll",
                },
                {
                  text: "String.prototype.search",
                  link: "/prototype/search",
                },
                {
                  text: "String.prototype.slice",
                  link: "/prototype/slice",
                },
                {
                  text: "String.prototype.split",
                  link: "/prototype/split",
                },
                {
                  text: "String.prototype.startsWith",
                  link: "/prototype/startsWith",
                },
                {
                  text: "String.prototype.substr",
                  link: "/prototype/substr",
                },
                {
                  text: "String.prototype.substring",
                  link: "/prototype/substring",
                },
                {
                  text: "String.prototype.toLowerCase",
                  link: "/prototype/toLowerCase",
                },
                {
                  text: "String.prototype.toUpperCase",
                  link: "/prototype/toUpperCase",
                },
                {
                  text: "String.prototype.trim",
                  link: "/prototype/trim",
                },
                {
                  text: "String.prototype.trimEnd",
                  link: "/prototype/trimEnd",
                },
                {
                  text: "String.prototype.trimStart",
                  link: "/prototype/trimStart",
                },
              ],
            },
            {
              text: "RegExp",
              collapsed: true,
              base: "/standard-built-in-objects/text-processing/regexp/",
              items: [
                {
                  text: "RegExp",
                  link: "/regexp",
                },
                {
                  text: "RegExp 语法",
                  link: "/regexp-rule",
                },
                {
                  text: "RegExp.prototype.exec",
                  link: "/prototype/exec",
                },
                {
                  text: "RegExp.prototype.test",
                  link: "/prototype/test",
                },
              ],
            },
            {
              text: "Array",
              collapsed: true,
              base: "/standard-built-in-objects/indexed-collections/",
              items: [
                {
                  text: "数组检测",
                  link: "/array/array-detection",
                },
                {
                  text: "Array.from",
                  link: "/array/constructor/from",
                },
                {
                  text: "Array.isArray",
                  link: "/array/constructor/isArray",
                },
                {
                  text: "Array.of",
                  link: "/array/constructor/of",
                },
                {
                  text: "Array.prototype.concat",
                  link: "/array/prototype/accessor-methods/concat",
                },
                {
                  text: "Array.prototype.includes",
                  link: "/array/prototype/accessor-methods/includes",
                },
                {
                  text: "Array.prototype.indexOf",
                  link: "/array/prototype/accessor-methods/indexOf",
                },
                {
                  text: "Array.prototype.join",
                  link: "/array/prototype/accessor-methods/join",
                },
                {
                  text: "Array.prototype.lastIndexOf",
                  link: "/array/prototype/accessor-methods/lastIndexOf",
                },
                {
                  text: "Array.prototype.slice",
                  link: "/array/prototype/accessor-methods/slice",
                },
                {
                  text: "Array.prototype.flat",
                  link: "/array/prototype/accessor-methods/flat",
                },
                {
                  text: "Array.prototype.flatMap",
                  link: "/array/prototype/accessor-methods/flatMap",
                },
                {
                  text: "Array.prototype.copyWithin",
                  link: "/array/prototype/accessor-methods/copyWithin",
                },
                {
                  text: "Array.prototype.entries",
                  link: "/array/prototype/iteration-methods/entries",
                },
                {
                  text: "Array.prototype.every",
                  link: "/array/prototype/iteration-methods/every",
                },
                {
                  text: "Array.prototype.filter",
                  link: "/array/prototype/iteration-methods/filter",
                },
                {
                  text: "Array.prototype.find",
                  link: "/array/prototype/iteration-methods/find",
                },
                {
                  text: "Array.prototype.findIndex",
                  link: "/array/prototype/iteration-methods/findIndex",
                },
                {
                  text: "Array.prototype.forEach",
                  link: "/array/prototype/iteration-methods/forEach",
                },
                {
                  text: "Array.prototype.keys",
                  link: "/array/prototype/iteration-methods/keys",
                },
                {
                  text: "Array.prototype.map",
                  link: "/array/prototype/iteration-methods/map",
                },
                {
                  text: "Array.prototype.reduce",
                  link: "/array/prototype/iteration-methods/reduce",
                },
                {
                  text: "Array.prototype.reduceRight",
                  link: "/array/prototype/iteration-methods/reduceRight",
                },
                {
                  text: "Array.prototype.some",
                  link: "/array/prototype/iteration-methods/some",
                },
                {
                  text: "Array.prototype.fill",
                  link: "/array/prototype/mutator-methods/fill",
                },
                {
                  text: "Array.prototype.pop",
                  link: "/array/prototype/mutator-methods/pop",
                },
                {
                  text: "Array.prototype.push",
                  link: "/array/prototype/mutator-methods/push",
                },
                {
                  text: "Array.prototype.reverse",
                  link: "/array/prototype/mutator-methods/reverse",
                },
                {
                  text: "Array.prototype.shift",
                  link: "/array/prototype/mutator-methods/shift",
                },
                {
                  text: "Array.prototype.sort",
                  link: "/array/prototype/mutator-methods/sort",
                },
                {
                  text: "Array.prototype.splice",
                  link: "/array/prototype/mutator-methods/splice",
                },
                {
                  text: "Array.prototype.unshift",
                  link: "/array/prototype/mutator-methods/unshift",
                },
                {
                  text: "Typed Array",
                  link: "/typed-array/typed-array",
                },
              ],
            },
            {
              text: "键值集合",
              collapsed: true,
              base: "/standard-built-in-objects/keyed-collections/",
              items: [
                {
                  text: "Map",
                  link: "/map/map",
                },
                {
                  text: "Set",
                  link: "/set/set",
                },
                {
                  text: "WeakMap",
                  link: "/weak-map/weak-map",
                },
                {
                  text: "WeakSet",
                  link: "/weak-set/weak-set",
                },
              ],
            },
            {
              text: "结构化数据",
              collapsed: true,
              base: "/standard-built-in-objects/structured-data/",
              items: [
                {
                  text: "ArrayBuffer",
                  link: "/array-buffer/array-buffer",
                },
                {
                  text: "JSON",
                  link: "/json/json",
                },
                {
                  text: "JSON.parse",
                  link: "/json/json-parse",
                },
                {
                  text: "JSON.stringify",
                  link: "/json/json-stringify",
                },
              ],
            },
            {
              text: "控制抽象对象",
              collapsed: true,
              base: "/standard-built-in-objects/control-abstraction-objects/",
              items: [
                {
                  text: "Iterator",
                  link: "/iterator/iterator",
                },
                {
                  text: "Promise",
                  link: "/promise/promise",
                },
                {
                  text: "Promise/A+ 规范",
                  link: "/promise/promise-standard",
                },
                {
                  text: "Promise.all",
                  link: "/promise/constructor/all",
                },
                {
                  text: "Promise.any",
                  link: "/promise/constructor/any",
                },
                {
                  text: "Promise.race",
                  link: "/promise/constructor/race",
                },
                {
                  text: "Promise.reject",
                  link: "/promise/constructor/reject",
                },
                {
                  text: "Promise.resolve",
                  link: "/promise/constructor/resolve",
                },
                {
                  text: "Promise.allSettled",
                  link: "/promise/constructor/all-Settled",
                },
                {
                  text: "Promise.prototype.then",
                  link: "/promise/prototype/then",
                },
                {
                  text: "Promise.prototype.catch",
                  link: "/promise/prototype/catch",
                },
                {
                  text: "Promise.prototype.finally",
                  link: "/promise/prototype/finally",
                },
                {
                  text: "Generator",
                  link: "/generator/generator",
                },
                {
                  text: "Generator 函数的异步应用",
                  link: "/generator/generator-async",
                },
                {
                  text: "Generator.prototype.next",
                  link: "/generator/prototype/next",
                },
                {
                  text: "Generator.prototype.return",
                  link: "/generator/prototype/return",
                },
                {
                  text: "Generator.prototype.throw",
                  link: "/generator/prototype/throw",
                },
              ],
            },
            {
              text: "Reflection",
              collapsed: true,
              base: "/standard-built-in-objects/reflection/",
              items: [
                {
                  text: "Proxy",
                  link: "/proxy/proxy",
                },
                {
                  text: "Proxy - handler.get",
                  link: "/proxy/handler/get",
                },
                {
                  text: "Proxy - handler.set",
                  link: "/proxy/handler/set",
                },
                {
                  text: "Proxy - handler.has",
                  link: "/proxy/handler/has",
                },
                {
                  text: "Proxy - handler.deleteProperty",
                  link: "/proxy/handler/deleteProperty",
                },
                {
                  text: "Proxy - handler.ownKeys",
                  link: "/proxy/handler/ownKeys",
                },
                {
                  text: "Proxy - handler.getOwnPropertyDescriptor",
                  link: "/proxy/handler/getOwnPropertyDescriptor",
                },
                {
                  text: "Proxy - handler.defineProperty",
                  link: "/proxy/handler/defineProperty",
                },
                {
                  text: "Proxy - handler.preventExtensions",
                  link: "/proxy/handler/preventExtensions",
                },
                {
                  text: "Proxy - handler.getPrototypeOf",
                  link: "/proxy/handler/getPrototypeOf",
                },
                {
                  text: "Proxy - handler.isExtensions",
                  link: "/proxy/handler/isExtensible",
                },
                {
                  text: "Proxy - handler.setPrototypeOf",
                  link: "/proxy/handler/setPrototypeOf",
                },
                {
                  text: "Proxy - handler.apply",
                  link: "/proxy/handler/apply",
                },
                {
                  text: "Proxy - handler.construct",
                  link: "/proxy/handler/construct",
                },
                {
                  text: "Proxy - revocable",
                  link: "/proxy/handler/revocable",
                },
                {
                  text: "Reflect",
                  link: "/reflect/reflect",
                },
              ],
            },
          ],
        },
      ],
      "/core-modules/": [
        {
          text: "核心模块",
          base: "/core-modules/",
          items: [
            {
              text: "编译阶段",
              collapsed: true,
              base: "/core-modules/executable-code-and-execution-contexts/compilation/",
              items: [
                {
                  text: "编译阶段",
                  link: "/compilation",
                },
                {
                  text: "词法作用域",
                  link: "/lexical-scope",
                },
                {
                  text: "函数作用域",
                  link: "/function-as-scopes",
                },
                {
                  text: "块作用域",
                  link: "/blocks-as-scopes",
                },
                {
                  text: "声明提升",
                  link: "/hoisting",
                },
                {
                  text: "闭包",
                  link: "/closures",
                },
              ],
            },
            {
              text: "执行阶段",
              collapsed: true,
              base: "/core-modules/executable-code-and-execution-contexts/execution/",
              items: [
                {
                  text: "执行上下文",
                  link: "/execution-context-stack",
                },
                {
                  text: "变量对象",
                  link: "/variable-object",
                },
                {
                  text: "作用域链",
                  link: "/scope-chain",
                },
                {
                  text: "当前执行上下文 this",
                  link: "/this",
                },
              ],
            },
            {
              text: "内存管理",
              collapsed: true,
              base: "/core-modules/executable-code-and-execution-contexts/memory-management/",
              items: [
                {
                  text: "内存模型",
                  link: "/memory-model",
                },
                {
                  text: "内存生命周期",
                  link: "/memory-life-cycle",
                },
                {
                  text: "垃圾回收",
                  link: "/garbage-collection",
                },
              ],
            },
            {
              text: "并发模型",
              collapsed: true,
              base: "/core-modules/executable-code-and-execution-contexts/concurrency-model/",
              items: [
                {
                  text: "并发模型",
                  link: "/concurrency-model",
                },
                {
                  text: "事件循环",
                  link: "/event-loop",
                },
                {
                  text: "定时器机制",
                  link: "/timers-mechanism",
                },
              ],
            },
            {
              text: "函数声明",
              collapsed: true,
              base: "/core-modules/ecmascript-function-objects/function-declarations/",
              items: [
                {
                  text: "函数声明定义",
                  link: "/function-definitions",
                },
                {
                  text: "箭头函数",
                  link: "/arrow-function-definitions",
                },
                {
                  text: "异步函数",
                  link: "/async-function-definitions",
                },
              ],
            },
            {
              text: "函数参数",
              collapsed: true,
              base: "/core-modules/ecmascript-function-objects/function-arguments/",
              items: [
                {
                  text: "函数参数",
                  link: "/function-parameters",
                },
                {
                  text: "默认参数",
                  link: "/default-parameters",
                },
                {
                  text: "剩余参数",
                  link: "/rest-parameters",
                },
              ],
            },
            {
              text: "函数调用",
              collapsed: true,
              base: "/core-modules/ecmascript-function-objects/function-calls/",
              items: [
                {
                  text: "方法调用模式",
                  link: "/method-invocation-pattern",
                },
                {
                  text: "函数调用模式",
                  link: "/function-invocation-pattern",
                },
                {
                  text: "构造函数调用模式",
                  link: "/constructor-invocation-pattern",
                },
                {
                  text: "间接调用模式",
                  link: "/apply-invocation-pattern",
                },
              ],
            },
            {
              text: "函数内部",
              collapsed: true,
              base: "/core-modules/ecmascript-function-objects/function-internal/",
              items: [
                {
                  text: "函数存取器",
                  link: "/function-accessor",
                },
                {
                  text: "函数原型对象方法",
                  link: "/function-prototype-object-methods",
                },
                {
                  text: "函数原型对象属性",
                  link: "/function-prototype-object-properties",
                },
              ],
            },
            {
              text: "函数类型",
              collapsed: true,
              base: "/core-modules/ecmascript-function-objects/function-types/",
              items: [
                {
                  text: "构造函数",
                  link: "/structure-function",
                },
                {
                  text: "类构造函数",
                  link: "/class-structure-function",
                },
                {
                  text: "惰性函数",
                  link: "/lazy-function",
                },
                {
                  text: "级联函数",
                  link: "/cascade-function",
                },
                {
                  text: "回调函数",
                  link: "/callback-function",
                },
                {
                  text: "高阶函数",
                  link: "/hight-order-function",
                },
                {
                  text: "函数柯里化",
                  link: "/function-currying",
                },
                {
                  text: "函数节流",
                  link: "/throttle",
                },
                {
                  text: "函数防抖",
                  link: "/debounce",
                },
                {
                  text: "函数记忆",
                  link: "/memorize-function",
                },
                {
                  text: "函数睡眠",
                  link: "/sleep-function",
                },
                {
                  text: "偏函数",
                  link: "/partial-function",
                },
              ],
            },
            {
              text: "模块化",
              collapsed: true,
              base: "/core-modules/modularization/",
              items: [
                {
                  text: "模块化",
                  link: "/modularization",
                },
                {
                  text: "模块导入 import",
                  link: "/import",
                },
                {
                  text: "模块导出 export",
                  link: "/export",
                },
                {
                  text: "模块导入/导出的复合写法",
                  link: "/compound",
                },
                {
                  text: "模块继承",
                  link: "/module-inheritance",
                },
                {
                  text: "跨模块常量",
                  link: "/cross-module-constant",
                },
                {
                  text: "动态加载",
                  link: "/dynamic-import",
                },
              ],
            },
          ],
        },
      ],
      "/object-oriented-programming/": [
        {
          text: "面向对象编程",
          base: "/object-oriented-programming/",
          items: [
            { text: "简介", link: "/object-oriented-programming" },
            {
              text: "理解对象",
              collapsed: true,
              base: "/object-oriented-programming/object-understand/",
              items: [
                {
                  text: "对象类型",
                  link: "/the-object-type",
                },
                {
                  text: "属性操作",
                  link: "/manipulating-property",
                },
                {
                  text: "对象属性描述符",
                  link: "/attributes-object",
                },
                {
                  text: "对象状态",
                  link: "/the-object-status",
                },
              ],
            },
            {
              text: "创建对象",
              collapsed: true,
              base: "/object-oriented-programming/object-creation/",
              items: [
                {
                  text: "工厂模式",
                  link: "/the-factory-pattern",
                },
                {
                  text: "构造函数模式",
                  link: "/the-constructor-pattern",
                },
                {
                  text: "原型模式",
                  link: "/the-prototype-pattern",
                },
                {
                  text: "组合使用构造函数模式和原型模式",
                  link: "/combination-constructor-and-prototype-pattern",
                },
                {
                  text: "动态原型模式",
                  link: "/dynamic-prototype-pattern",
                },
                {
                  text: "寄生构造函数模式",
                  link: "/parastic-constructor-pattern",
                },
                {
                  text: "稳妥构造函数模式",
                  link: "/durable-constructor-pattern",
                },
              ],
            },
            {
              text: "继承",
              collapsed: true,
              base: "/object-oriented-programming/inheritance/",
              items: [
                {
                  text: "原型链",
                  link: "/prototype-chain",
                },
                {
                  text: "借用构造函数",
                  link: "/constructor-stealing",
                },
                {
                  text: "组合继承",
                  link: "/combination-inheritance",
                },
                {
                  text: "原型式继承",
                  link: "/prototypal-inheritance",
                },
                {
                  text: "寄生式继承",
                  link: "/parasitic-inheritance",
                },
                {
                  text: "寄生组合式继承",
                  link: "/parasitic-combination-inheritance",
                },
              ],
            },
            {
              text: "类",
              collapsed: true,
              base: "/object-oriented-programming/class-definitions/",
              items: [
                {
                  text: "类的基本语法",
                  link: "/class-basic",
                },
                {
                  text: "类的继承",
                  link: "/class-extends",
                },
                {
                  text: "私有成员",
                  link: "/class-private-member",
                },
                {
                  text: "静态成员",
                  link: "/class-static-member",
                },
              ],
            },
          ],
        },
      ],
      "/browser-object-model/": [
        {
          text: "BOM 浏览器对象模型",
          base: "/browser-object-model/",
          items: [
            {
              text: "全局对象",
              collapsed: true,
              base: "/browser-object-model/window/",
              items: [
                {
                  text: "Window 对象",
                  link: "/window",
                },
                {
                  text: "Location 对象",
                  link: "/location",
                },
                {
                  text: "History 对象",
                  link: "/history",
                },
                {
                  text: "Screen 对象",
                  link: "/screen",
                },
                {
                  text: "Navigator 对象",
                  link: "/navigator",
                },
              ],
            },
            {
              text: "全局 API",
              collapsed: true,
              base: "/browser-object-model/web-event/",
              items: [
                {
                  text: "setTimeout",
                  link: "/set-time-out",
                },
                {
                  text: "setInterval",
                  link: "/set-interval",
                },
                {
                  text: "对话框 API",
                  link: "/dialog",
                },
                {
                  text: "requestAnimationFrame",
                  link: "/request-animation-frame",
                },
                {
                  text: "requestIdleCallback",
                  link: "/request-idle-callback",
                },
                {
                  text: "getComputedStyle",
                  link: "/get-computed-style",
                },
                {
                  text: "页面生命周期方法",
                  link: "/lifecycle",
                },
              ],
            },
            {
              text: "视窗尺寸位置",
              collapsed: true,
              base: "/browser-object-model/window-position/",
              items: [
                {
                  text: "Window 对象视图属性",
                  link: "/window-view-properties",
                },
                {
                  text: "Screen 对象视图属性",
                  link: "/screen-view-properties",
                },
                {
                  text: "Element 文档元素视图属性",
                  link: "/element-view-properties",
                },
                {
                  text: "文档视图和元素视图",
                  link: "/document-view-and-element-view",
                },
                {
                  text: "鼠标位置",
                  link: "/mouse-position",
                },
              ],
            },
            {
              text: "二进制数据和文件 API",
              collapsed: true,
              base: "/browser-object-model/binary-data-and-files/",
              items: [
                {
                  text: "文件应用",
                  link: "/application",
                },
                {
                  text: "Blob API",
                  link: "/blob",
                },
                {
                  text: "File API",
                  link: "/file",
                },
                {
                  text: "FileList API",
                  link: "/file-list",
                },
                {
                  text: "FileReader API",
                  link: "/file-reader",
                },
                {
                  text: "FileReaderSync API",
                  link: "/file-reader-sync",
                },
                {
                  text: "FormData API",
                  link: "/form-data",
                },
                {
                  text: "DataTransfer API",
                  link: "/data-transfer",
                },
                {
                  text: "URL API",
                  link: "/url",
                },
                {
                  text: "Base64",
                  link: "/base64",
                },
              ],
            },
            {
              text: "数据通信 API",
              collapsed: true,
              base: "/browser-object-model/connectivity/",
              items: [
                {
                  text: "PostMessage",
                  link: "/post-message",
                },
                {
                  text: "XHMLHttpRequest API",
                  link: "/xmlhttprequest",
                },
                {
                  text: "Fetch API",
                  link: "/featch",
                },
                {
                  text: "Beacon API",
                  link: "/beacon",
                },
                {
                  text: "WebSocket",
                  link: "/web-socket",
                },
                {
                  text: "EventSource",
                  link: "/event-source",
                },
                {
                  text: "Server-sent Events",
                  link: "/server-sent-events",
                },
                {
                  text: "WebRTC",
                  link: "/web-real-time-communication",
                },
                {
                  text: "Progress Event",
                  link: "/progress-event",
                },
              ],
            },
            {
              text: "离线与存储 API",
              collapsed: true,
              base: "/browser-object-model/offline-and-storage/",
              items: [
                {
                  text: "浏览器缓存机制",
                  link: "/browser-cache",
                },
                {
                  text: "HTTP Cache",
                  link: "/http-cache",
                },
                {
                  text: "Cookie",
                  link: "/cookie",
                },
                {
                  text: "Web Storage",
                  link: "/web-storage",
                },
                {
                  text: "Web Workers",
                  link: "/web-workers",
                },

                {
                  text: "Service Worker",
                  link: "/service-worker",
                },
                {
                  text: "IndexedDB",
                  link: "/indexedDB",
                },
              ],
            },
            {
              text: "性能 API",
              collapsed: true,
              base: "/browser-object-model/performance/",
              items: [
                {
                  text: "Performance API",
                  link: "/performance",
                },
                {
                  text: "Performance Resource Timing API",
                  link: "/performance-resource-timing",
                },
                {
                  text: "Performance Navifation API",
                  link: "/performance-navigation-timing",
                },
                {
                  text: "性能时间线",
                  link: "/perfromance-timeline",
                },
              ],
            },
            {
              text: "设备 API",
              collapsed: true,
              base: "/browser-object-model/device/",
              items: [
                {
                  text: "地理定位 Geolocation API",
                  link: "/geolocation",
                },
                {
                  text: "摄录设备",
                  link: "/camera",
                },
                {
                  text: "位置信息 Position API",
                  link: "/position",
                },
              ],
            },
            {
              text: "监视 API",
              collapsed: true,
              base: "/browser-object-model/observer/",
              items: [
                {
                  text: "IntersectionObserver API",
                  link: "/intersection-observer",
                },
                {
                  text: "MutationObserver API",
                  link: "/mutation-observer",
                },
              ],
            },
            {
              text: "集成 API",
              collapsed: true,
              base: "/browser-object-model/integration/",
              items: [
                {
                  text: "全屏 Fullscreen API",
                  link: "/full-screen",
                },
              ],
            },
            {
              text: "浏览器工作原理",
              collapsed: true,
              base: "/browser-object-model/browser-working-principle/",
              items: [
                {
                  text: "浏览器架构",
                  link: "/browser-architecture",
                },
                {
                  text: "渲染进程的内部机制",
                  link: "/workflow",
                },
                {
                  text: "构建对象模型",
                  link: "/construction-of-the-object-model",
                },
                {
                  text: "脚本异步加载",
                  link: "/script-loading-asynchronously",
                },
                {
                  text: "渲染树构建",
                  link: "/construction-of-render-tree",
                },
                {
                  text: "布局",
                  link: "/layout",
                },
                {
                  text: "绘制",
                  link: "/paint",
                },
                {
                  text: "合并",
                  link: "/composite",
                },
                {
                  text: "浏览器事件处理",
                  link: "/browser-event",
                },
              ],
            },
          ],
        },
      ],
      "/document-object-model/": [
        {
          text: "DOM 文档对象模型",
          base: "/document-object-model/",
          items: [
            {
              text: "文档对象模型",
              collapsed: true,
              base: "/document-object-model/dom/",
              items: [
                {
                  text: "文档对象模型",
                  link: "/dom",
                },
                {
                  text: "节点层次",
                  link: "/hierarchy-of-nodes",
                },
                {
                  text: "EventTarget",
                  link: "/event-target",
                },
                {
                  text: "DOMRect",
                  link: "/dom-rect",
                },
                {
                  text: "AudioContext",
                  link: "/audio-context",
                },
                {
                  text: "VideoContext",
                  link: "/video-context",
                },
                {
                  text: "全局属性",
                  link: "/global-attributes",
                },
              ],
            },
            {
              text: "Node",
              collapsed: true,
              base: "/document-object-model/node/",
              items: [
                {
                  text: "Node",
                  link: "/node",
                },
                {
                  text: "Node 属性",
                  link: "/node-properties",
                },
                {
                  text: "Node 方法",
                  link: "/node-methods",
                },
              ],
            },
            {
              text: "Document",
              collapsed: true,
              base: "/document-object-model/document/",
              items: [
                {
                  text: "Document",
                  link: "/document",
                },
                {
                  text: "Document 属性",
                  link: "/document-properties ",
                },
                {
                  text: "Document 方法",
                  link: "/document-methods",
                },
                {
                  text: "DocumentFragment",
                  link: "/document-fragment",
                },
              ],
            },
            {
              text: "Element",
              collapsed: true,
              base: "/document-object-model/element/",
              items: [
                {
                  text: "Element",
                  link: "/element",
                },
                {
                  text: "Element 属性",
                  link: "/element-properties",
                },
                {
                  text: "Element 方法",
                  link: "/element-methods",
                },
                {
                  text: "HTMLElement",
                  link: "/html-element",
                },
                {
                  text: "HTMLImageElement",
                  link: "/html-image-element",
                },
                {
                  text: "HTMLIFrameElement",
                  link: "/html-iframe-element",
                },
                {
                  text: "HTMLMediaElement",
                  link: "/html-media-element",
                },
                {
                  text: "HTMLAudioElement",
                  link: "/html-audio-element",
                },
                {
                  text: "HTMLVideoElement",
                  link: "/html-video-element",
                },
                {
                  text: "HTMLTextAreaElement",
                  link: "/html-text-area-element",
                },
              ],
            },
            {
              text: "动态集合",
              collapsed: true,
              base: "/document-object-model/dynamic-collection/",
              items: [
                {
                  text: "NodeList",
                  link: "/node-list",
                },
                {
                  text: "NamedNodeMap",
                  link: "/named-node-map",
                },
                {
                  text: "HTMLCollection",
                  link: "/html-collection",
                },
                {
                  text: "DOMTokenList",
                  link: "/dom-token-list",
                },
              ],
            },
            {
              text: "CSSOM",
              collapsed: true,
              base: "/document-object-model/cssom/",
              items: [
                {
                  text: "CSSstyleSheet",
                  link: "/css-style-sheet",
                },
                {
                  text: "CSSStyleDeclaration",
                  link: "/css-style-declaration",
                },
              ],
            },
            {
              text: "DOM 事件流",
              collapsed: true,
              base: "/document-object-model/events/",
              items: [
                {
                  text: "事件流",
                  link: "/event-flow",
                },
                {
                  text: "事件处理程序",
                  link: "/event-handlers-or-listener",
                },
                {
                  text: "事件对象",
                  link: "/the-event-object",
                },
                {
                  text: "事件委托",
                  link: "/event-delegation",
                },
              ],
            },
            {
              text: "事件类型",
              collapsed: true,
              base: "/document-object-model/events/event-types/",
              items: [
                {
                  text: "事件类型",
                  link: "/event-types",
                },
                {
                  text: "资源事件",
                  link: "/resource-events",
                },
                {
                  text: "网络事件",
                  link: "/network-events",
                },
                {
                  text: "焦点事件",
                  link: "/focus-events",
                },
                {
                  text: "WebSocket 事件",
                  link: "/websocket-events",
                },
                {
                  text: "会话历史事件",
                  link: "/session-history-events",
                },
                {
                  text: "CSS 动画事件",
                  link: "/css-animation-events",
                },
                {
                  text: "CSS 过渡事件",
                  link: "/css-transition-events",
                },
                {
                  text: "表单事件",
                  link: "/form-events",
                },
                {
                  text: "打印事件",
                  link: "/printing-events",
                },
                {
                  text: "文本写作事件",
                  link: "/text-composition-events",
                },
                {
                  text: "视图事件",
                  link: "/view-events",
                },
                {
                  text: "剪贴板事件",
                  link: "/clipboard-events",
                },
                {
                  text: "键盘事件",
                  link: "/keyboard-events",
                },
                {
                  text: "指针事件",
                  link: "/pointer-events",
                },
                {
                  text: "鼠标事件 MouseEvent",
                  link: "/mouse-event",
                },
                {
                  text: "拖拽事件",
                  link: "/drag-and-drop-events",
                },
                {
                  text: "媒体事件",
                  link: "/media-events",
                },
                {
                  text: "进度条事件",
                  link: "/progress-events",
                },
                {
                  text: "存储事件",
                  link: "/storage-events",
                },
                {
                  text: "更新事件",
                  link: "/update-events",
                },
                {
                  text: "值变化事件",
                  link: "/value-change-events",
                },
                {
                  text: "未分类事件",
                  link: "/uncategorized-events",
                },
                {
                  text: "自定义事件 CustomEvent",
                  link: "/custom-event",
                },
                {
                  text: "触控事件",
                  link: "/touch-events",
                },
                {
                  text: "设备事件",
                  link: "/the-orientationchange-event",
                },
                {
                  text: "用户界面事件",
                  link: "/ui-events",
                },
              ],
            },
            {
              text: "Multimedia",
              collapsed: true,
              base: "/document-object-model/multimedia/",
              items: [
                {
                  text: "AudioBuffer",
                  link: "/audio-buffer",
                },
                {
                  text: "AudioNode",
                  link: "/audio-node",
                },
                {
                  text: "AudioTrack",
                  link: "/audio-track",
                },
              ],
            },
          ],
        },
      ],
      "/computer-networks/": [
        {
          text: "计算机网络",
          base: "/computer-networks/",
          items: [
            {
              text: "计算机网络体系",
              collapsed: true,
              base: "/computer-networks/computer-network-architecture/",
              items: [
                {
                  text: "计算机网络体系",
                  link: "/computer-networks",
                },
                {
                  text: "传输层协议",
                  link: "/transport-layer-protocol",
                },
                {
                  text: "网络层与数据链路层协议",
                  link: "/network-layer-and-data-link-layer-protocol",
                },
                {
                  text: "DNS 域名解析系统",
                  link: "/dns",
                },
                {
                  text: "CDN 内容分发网络",
                  link: "/cdn",
                },
                {
                  text: "HLS 流媒体网络传输协议",
                  link: "/hls",
                },
              ],
            },
            {
              text: "HTTP",
              collapsed: true,
              base: "/computer-networks/http/",
              items: [
                {
                  text: "HTTP",
                  link: "/http",
                },
                {
                  text: "HTTP 资源标识",
                  link: "/http-resource-and-uris",
                },
                {
                  text: "HTTP 报文格式",
                  link: "/http-message",
                },
                {
                  text: "HTTP 首部字段",
                  link: "/http-headers",
                },
                {
                  text: "HTTP 状态码",
                  link: "/http-status-code",
                },
                {
                  text: "HTTP 连接",
                  link: "/http-connection",
                },
                {
                  text: "HTTP 内容协商",
                  link: "/http-content-negotiation",
                },
                {
                  text: "HTTP CORS 跨域资源共享",
                  link: "/cross-origin-resource-sharing",
                },
                {
                  text: "HTTP CSP 内容安全策略",
                  link: "/content-security-policy",
                },
                {
                  text: "HTTPS",
                  link: "/https",
                },
                {
                  text: "HTTP2",
                  link: "/http2",
                },
                {
                  text: "HTTP3",
                  link: "/http3",
                },
              ],
            },
            {
              text: "Web 安全",
              collapsed: true,
              base: "/computer-networks/web-security/",
              items: [
                {
                  text: "同源策略",
                  link: "/same-origin-policy",
                },
                {
                  text: "XSS 跨站脚本攻击",
                  link: "/xss",
                },
                {
                  text: "CSRF 跨站请求伪造攻击",
                  link: "/csrf",
                },
                {
                  text: "DDoS 攻击",
                  link: "/ddos",
                },
                {
                  text: "SQL 注入攻击",
                  link: "/sql-injection",
                },
                {
                  text: "流量劫持",
                  link: "/hijacking",
                },
              ],
            },
          ],
        },
      ],
      "/design-patterns/": [
        {
          text: "设计模式",
          base: "/design-patterns/",
          items: [
            {
              text: "设计思想与原则",
              link: "/design-principles-and-ideas",
            },
            {
              text: "创建型",
              collapsed: true,
              base: "/design-patterns/creational/",
              items: [
                {
                  text: "工厂方法模式",
                  link: "/factory-method",
                },
                {
                  text: "抽象工厂模式",
                  link: "/abstract-factory",
                },
                {
                  text: "原型模式",
                  link: "/prototype",
                },
                {
                  text: "单例模式",
                  link: "/singleton",
                },
              ],
            },
            {
              text: "结构型",
              collapsed: true,
              base: "/design-patterns/structual/",
              items: [
                {
                  text: "适配器模式",
                  link: "/adapter",
                },
                {
                  text: "桥接模式",
                  link: "/bridge",
                },
                {
                  text: "组合模式",
                  link: "/composite",
                },
                {
                  text: "装饰者模式",
                  link: "/decorator",
                },
                {
                  text: "外观模式",
                  link: "/facade",
                },
                {
                  text: "享元模式",
                  link: "/flyweight",
                },
                {
                  text: "代理模式",
                  link: "/proxy",
                },
              ],
            },
            {
              text: "行为型",
              collapsed: true,
              base: "/design-patterns/behavioral/",
              items: [
                {
                  text: "模版方法模式",
                  link: "/template-method",
                },
                {
                  text: "观察者模式",
                  link: "/observer",
                },
                {
                  text: "状态模式",
                  link: "/state",
                },
                {
                  text: "策略模式",
                  link: "/strategy",
                },
                {
                  text: "职责链模式",
                  link: "/chain-of-responsibility",
                },
                {
                  text: "命令模式",
                  link: "/command",
                },
                {
                  text: "访问者模式",
                  link: "/visitor",
                },
                {
                  text: "中介者模式",
                  link: "/mediator",
                },
                {
                  text: "备忘录模式",
                  link: "/memento",
                },
                {
                  text: "迭代器模式",
                  link: "/iterator",
                },
                {
                  text: "解释器模式",
                  link: "/interpreter",
                },
              ],
            },
            {
              text: "Architectural",
              collapsed: true,
              base: "/design-patterns/architectural/",
              items: [
                {
                  text: "Dependency-injection",
                  link: "/dependency-injection",
                },
                {
                  text: "Model-view-controller",
                  link: "/model-view-controller",
                },
                {
                  text: "Model-view-viewmodel",
                  link: "/model-view-viewmodel",
                },
                {
                  text: "Service-locator",
                  link: "/service-locator",
                },
              ],
            },
          ],
        },
      ],
    },
    outline: {
      label: "页面导航",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/FiecVane/js-guidebook-lite" },
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
          },
          modal: {
            displayDetails: "显示详细列表",
            resetButtonTitle: "重置搜索",
            noResultsText: "没有结果",
            footer: {
              selectText: "选择",
              navigateText: "导航",
              closeText: "关闭",
            },
          },
        },
      },
    },
  },
  markdown: {
    image: {
      lazyLoad: true,
    },
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
});
