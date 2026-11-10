---
title: String
outline: [2, 3]
---

# String 对象

String 对象是一个用于 **字符串** 或一个 **字符序列** 的构造函数。

String 对象是文本字符串的对象形式。String 对象允许操作和格式化文本字符串以及确定和定位字符串中的子字符串。

## 语法

**构造函数**

```js
new String([value]);
```

**字符串类型转换函数**

```js
String([value]);
```

| 参数    | 类型     | 说明                         |
| ------- | -------- | ---------------------------- |
| `value` | 任意类型 | 任何可以被转换成字符串的值。 |

## 说明

### 模板字面量

从 ECMAScript 2015 开始，字符串字面量也可以称为 **模板字面量**：

```js
const w = 'world';
`Hello ${w}!`;
```

### 转义字符

除了普通的可打印字符以外，一些有特殊功能的字符可以通过转义字符的形式放入字符串中：

| 转义字符 | 输出                   |
| :------- | :--------------------- |
| `\0`     | 空字符                 |
| `\'`     | 单引号                 |
| `\"`     | 双引号                 |
| `\\`     | 反斜杠                 |
| `\n`     | 换行                   |
| `\r`     | 回车                   |
| `\v`     | 垂直制表符             |
| `\t`     | 水平制表符             |
| `\b`     | 退格                   |
| `\f`     | 换页                   |
| `\uXXXX` | Unicode 码             |
| `\xXX`   | Latin-1 字符（x 小写） |

和其他语言不同，JavaScript 的字符串不区分单引号和双引号，所以不论是单引号还是双引号的字符串，上面的转义字符都能运行 。

## 原型对象

### 原型属性

| 属性                         | 说明                                                                                                |
| ---------------------------- | --------------------------------------------------------------------------------------------------- |
| String.prototype.constructor | 返回创建该对象的构造函数。                                                                          |
| String.prototype.length      | 返回字符串的长度(字符数)。                                                                          |
| String.prototype.N           | 用于访问第 N 个位置的字符，其中 N 是小于 length 和 0 之间的正整数。这些属性都是只读性质，不能编辑。 |

### 原型方法

| 方法                                                         | 说明                                                                                                                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [String.fromCharCode()](static/fromCharCode)                 | 获取指定 UTF-16 代码单元序列创建的字符串                                                                                                             |
| [String.fromCodePoint()](static/fromCodePoint)               | 获取指定代码点序列创建的字符串                                                                                                                       |
| [String.prototype.charAt()](prototype/charAt)                | 返回字符串中指定位置的子字符                                                                                                                         |
| [String.prototype.charCodeAt()](prototype/charCodeAt)        | 返回字符串中指定位置的子字符的 Unicode 的值（值的范围是 0 到 65535）                                                                                 |
| [String.prototype.codePointAt()](prototype/codePointAt)      | 返回使用 UTF-16 编码的给定位置的值的非负整数。                                                                                                       |
| [String.prototype.concat()](prototype/concat)                | 将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。                                                                                     |
| [String.prototype.endsWith()](prototype/endsWith)            | 用于判断当前字符串是否是以另外一个给定的字符串结尾的，根据判断结果返回 `true` 或 `false`。                                                           |
| [String.prototype.includes()](prototype/includes)            | 用于判断一个字符串里是否包含在另一个字符串中，根据情况返回 `true` 和 `false`。                                                                       |
| [String.prototype.indexOf()](prototype/indexOf)              | 返回调用 String 对象中第一个发现的指定值的索引值，如果没有找到则返回 -1。从 `startIndex` 进行搜索。                                                   |
| [String.prototype.lastIndexOf()](prototype/lastIndexOf)      | 返回调用该方法的字符串中最后出现的位置，如果没有找到则返回 -1。从该字符串的后面向前查找，从 `startIndex` 处开始。                                     |
| [String.prototype.localeCompare()](prototype/localeCompare)  | 返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。                                                                         |
| [String.prototype.match()](prototype/match)                  | 检索一个字符串与一个正则表达式的匹配项。                                                                                                             |
| [String.prototype.matchAll()](prototype/matchAll)            | 获取一个包含所有匹配正则表达式                                                                                                                       |
| [String.prototype.normalize()](prototype/normalize)          | 按照指定一种 Unicode 正规形式将当前字符串正规化。                                                                                                    |
| [String.prototype.padEnd()](prototype/padEnd)                | 用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。                           |
| [String.prototype.padStart()](prototype/padStart)            | 用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的开头（右侧）开始填充。                           |
| [String.prototype.repeat()](prototype/repeat)                | 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。                                                                           |
| [String.prototype.replace()](prototype/replace)              | 返回一个由替换值替换一些或所有匹配的模式后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的函数。 |
| [String.prototype.search()](prototype/search)                | 对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标。                                                                                 |
| [String.prototype.slice()](prototype/slice)                  | 摘取一个字符串区域（字符串的一部分），返回一个新的字符串。                                                                                           |
| [String.prototype.split()](prototype/split)                  | 使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分割为子字符串，以确定每个拆分的位置。                                           |
| [String.prototype.startsWith()](prototype/startsWith)        | 判断字符串的起始位置是否匹配其他字符串中的字符，根据判断结果返回 `true` 或 `false`。                                                                 |
| [String.prototype.substr()](prototype/substr)                | 通过指定字符数返回从指定位置开始到指定字符串数的字符。                                                                                               |
| [String.prototype.substring()](prototype/substring)          | 返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引知道字符串的末尾的一个子集。                                                           |
| `String.prototype.toLocaleLowerCase()` | 根据任何特定于语言环境的案例映射，返回调用字符串值转换为小写的值。                                                                                   |
| `String.prototype.toLocaleUpperCase()` | 使用本地化的大小写映射规则将输入的字符串转化成大写形式并返回结果字符串。                                                                             |
| [String.prototype.toLowerCase()](prototype/toLowerCase)      | 将字符串转换成小写并返回。                                                                                                                           |
| `String.prototype.toString()`            | 返回用字符串表示的特定对象。重写 `Object.prototype.toString` 方法。                                                                                  |
| [String.prototype.toUpperCase()](prototype/toUpperCase)      | 将调用该方法的字符串值转换为大写形式，并返回。                                                                                                       |
| [String.prototype.trim()](prototype/trim)                    | 从字符串的两端删除空白字符。在这个上下文的空白字符是所有的空白字符（`space`、`tab`、`no-break space`）。                                             |
| [String.prototype.trimEnd()](prototype/trimEnd)              | 移除原字符串的左侧的连续空白符。                                                                                                                     |
| [String.prototype.trimStart()](prototype/trimStart)          | 移除原字符串的左侧的连续空白符。                                                                                                                     |
| `String.prototype.valueOf()`              | 返回特定对象的原始值。重写 `Object.prototype.valueOf` 方法。                                                                                         |
| [String.raw()](static/raw)                                   | 模版字符串的标签函数，它的作用类似于 Python 中的字符串前缀 r 和 C# 中的字符串前缀 @ ，是用来获取一个模版字符串的原始字符串的                         |

## 示例

### 从字符串中获取单个字符

获取字符串的某个字符有两种方法。 第一种是使用 charAt 方法：

```js
'cat'.charAt(1);
// "a"
```

另一种把字符串当作一个类似数组的对象，其中的每个字符对应一个数值索引：

```js
'cat'[1];
// "a"
```

使用括号访问字符串不可以对其进行删除或添加，因为字符串对应未知的属性并不是可读或配置的。 (更多的信息请参阅 Object.defineProperty )

### 长字符串

有时，你的代码可能含有很长的字符串。你可能想将这样的字符串写成多行，而不是让这一行无限延长或着被编辑器折叠。有两种方法可以做到这一点。

可以使用 `+` 运算符将多个字符串连接起来。

```js
let longString =
  'This is a very long string which needs ' +
  'to wrap across multiple lines because ' +
  'otherwise my code is unreadable.';
```

可以在每行末尾使用反斜杠字符（`\`），以指示字符串将在下一行继续。确保反斜杠后面没有空格或任何除换行符之外的字符或缩进；否则反斜杠将不会工作。

```js
let longString =
  'This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.';
```

或者使用 ES6+ 提供的模版字符串

```js
let longString = `This is a very long string which needs
to wrap across multiple lines because
otherwise my code is unreadable.`;
```
