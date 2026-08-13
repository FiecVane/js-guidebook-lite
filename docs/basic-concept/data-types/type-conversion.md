---
title: 类型转换
outline: [2, 3]
---

# 类型转换

JavaScript 作为一种弱类型的语言，不用像 C 语言那样要定义好数据类型，因为允许变量类型的 **隐式类型转换** 和允许 **强制类型转换**。我们在定义一个变量的时候，只需一个 `var`、`let`、`const` 搞定，不用担心数据的类型。

## 基本规则

从 ECMAScript Standard 中了解 Number、String、Boolean、Array 和 Object 之间的相互转换会更加直观。

### ToString

> 此处所说的 ToString 并非对象的 `toString()` 方法，而是指其他类型的值转换为字符串类型的操作。

下面列出常见转换为 String 类型的规则：

- `null`：转为 `"null"`
- `undefined`：转为 `"undefined"`
- Boolean 类型：
  - `true` 转为 `"true"`
  - `false` 转为 `"false"`
- Number 类型：转为数字的字符串形式
  - 如 `10` 转为 `"10"`
  - `1e21` 转为 `"1e+21"`
- Array 类型：转为字符串将各元素以小写逗号 `,` 连接，相当于调用数组 `Array.prototype.join()` 方法
  - 空数组转为空字符串 `''`
  - 数组中 `null` 和 `undefined` 会被当作 **空字符串** 处理
- 普通对象：转为字符串相当于直接使用 `Object.prototype.toString()`，返回 `[object Object]`

<br />

```js
String(null);
// "null"

String(undefined);
// 'undefined'

String(true);
// 'true'

String(10);
// '10'

String(1e21);
// '1e+21'

String([1, 2, 3]);
// '1,2,3'

String([]);
// ''

String([null]);
// ''

String([1, undefined, 3]);
// '1,,3'

String({});
// '[object Objecr]'
```

### ToNumber

- `null`： 转为 `0`
- `undefined`：转为 `NaN`
- String 类型：如果是纯数字形式，则转为对应的数字
  - 空字符转为 `0`
  - 否则一律按转换失败处理，转为 `NaN`
- Boolean 类型：
  - `true` 将被转为 `1`
  - `false` 将被转为 `0`
- Array 类型：数组首先会被转为 **原始数据类型**，也就是 [ToPrimitive](#ToPrimitive)，然后在根据转换后的原始类型按照上面的规则处理
- 对象：同数组的处理

<br />

```js
Number(null);
// 0

Number(undefined);
// NaN

Number('10');
// 10

Number('10a');
// NaN

Number('');
// 0

Number(true);
// 1

Number(false);
// 0

Number([]);
// 0

Number(['1']);
// 1

Number({});
// NaN
```

### ToBoolean

JavaScript 中假值只有 `false`、`null`、`undefined`、`""`、`0` 和 `NaN`，其他值转为 Boolean 类型都为 `true`。

```js
Boolean(null);
// false

Boolean(undefined);
// false

Boolean('');
// flase

Boolean(NaN);
// flase

Boolean(0);
// flase

Boolean([]);
// true

Boolean({});
// true

Boolean(Infinity);
// true
```

### ToPrimitive

> ToPrimitive 方法用于将引用类型转换为原始数据类型的操作

🔬 值为引用数据类型时，会调用 JavaScript 内置的 `@@ToPrimitive(hint)` 方法来指定其目标类型。

- 如果传入值为 Number 类型，则调用对象的 `valueOf()` 方法，若返回值为原始数据类型，则结束 `@@ToPrimitive` 操作，如果返回的不是原始数据类型，则继续调用对象的 `toString()` 方法，若返回值为原始数据类型，则结束 `@@ToPrimitive` 操作，如果返回的还是引用数据类型，则抛出异常。
- 如果传入值为 String 类型，则先调用 `toString()` 方法，再调用 `valueOf()` 方法。

<br />

```js
[1, 2] ==
  '1,2'[(1, 2)] // true
    .valueOf() // "[1,2]"
    [(1, 2)].toString(); // "1,2"

const a = {};
a == '[object Object]'; // true
a.valueOf().toString(); // "[object Object]"
```

> 对于不同类型的引用数据类型，ToPrimitive 的规则有所不同，比如 Date 对象会先调用 `toString()` 方法，具体可以参考 [ECMAScript6 规范中对 ToPrimitive 的定义解释](https://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive)
>
> 以 JavaScript 实现 [ToPrimitive](https://juejin.im/post/59ad2585f265da246a20e026#heading-1)

值得一提的是对于 **数值类型** 的 `valueOf()` 函数的调用结果仍为数组，因此数组类型的隐式类型转换结果是字符串。

而在 ES6 中引入 Symbol 类型之后，JavaScript 会优先调用对象的 `[Symbol.toPrimitive]` 方法来将该对象转化为原始类型，那么方法的调用顺序就变为了：

- 当 `obj[Symbol.toPrimitive](preferredType)` 方法存在时，优先调用该方法
- 如果 `preferredType` 参数为 String 类型，则依次尝试 `obj.toString()` 与 `obj.valueOf()`
- 如果 `preferredType` 参数为 Number 类型或者默认值，则依次尝试 `obj.valueOf()` 与 `obj.toString()`

## 显式类型转换

通过手动进行类型转换，JavaScript 提供了以下转型函数：

- 转换为数值类型
  - `Number(mix)`
  - `parseInt(string, radix)`
  - `parseFloat(string)`
- 转换为字符串类型
  - `toString(radix)`
  - `String(mix)`
- 转换为布尔类型
  - `Boolean(mix)`

## 隐式类型转换

在 JavaScript 中，当运算符在运算时，如果 **两边数据不统一**，CPU 就无法运算，这时我们编译器会自动将运算符两边的数据做一个数据类型转换，转成相同的数据类型再计算。

这种无需开发者手动转换，而由 **编译器自动转换** 的方式就称为 **隐式类型转换**。

JavaScript 的数据类型隐式转换主要分为三种情况：

- 转换为 Boolean 类型
- 转换为 Number 类型
- 转换为 String 类型

值在 **逻辑判断** 和 **逻辑运算** 时会隐式转换为 Boolean 类型。

Boolean 类型转换规则表：

| 数据值              | 转换后的值 |
| :------------------ | :--------- |
| 数字 `0`            | `false`    |
| `NaN`               | `false`    |
| 空字符串 `""`       | `false`    |
| `null`              | `false`    |
| `undefined`         | `false`    |
| 非 `!0` 数字        | `true`     |
| 非空字符串 `!""`    | `true`     |
| 非 `!null` 对象类型 | `true`     |

⚠️ **注意事项**：使用 `new` 运算符创建的对象隐式转换为 Boolean 类型的值都是 `true`。

连续两个非操作可以将一个数强制转换为 Boolean 类型。

```js
!!undefined;
// false

!!null;
// false

!!1;
// true

!!'';
// false

!!'Hello';
// true

!!{};
// true

!![];
// true

!!function () {};
// true
```

### 运行环境

很多内置函数期望传入的参数的数据类型是固定的，如 `alert(value)`，它期望传入的 `value` 为 String 类型，但是如果我们传入的是 Number 类型或者 Object 类型等非 String 类型的数据的时候，就会发生数据类型的隐式转换。这就是环境运行环境对数据类型转换的影响。

类似的方法还有：

- `alert()`
- `parseInt()`

### 运算符

#### 加号运算符

当加号运算符作为一元运算符运算值时，它会将该值转换为 Number 类型。

```js
' ' +
// 0

'0' +
// 0

'10' +
// 10

'String' +
// NaN

true +
// 1

false +
// 0

undefined +
// 0

null +
// 0

[] +
// 0

![] +
// 0

[1] +
// 1

[1, 2] +
// NaN

[[1]] +
// 1

[[1, 2]] +
// NaN

{} +
// NaN

function () {};
// NaN

+'' +
// 0
```

当加号运算符作为二元运算符操作值时，它会根据两边值类型进行数据类型隐式转换。

首先，当引用对象类型的值进行二元加号运算符运算时，会涉及到转换为原始数据类型的问题。事实上，当一个对象执行例如加法操作的时候，如果它是原始类型，那么就不需要转换。否则，将遵循以下规则：

- 调用实例的 `valueOf()` 方法，如果有返回的是基础类型，停止下面的过程；否则继续
- 调用实例的 `toString()` 方法，如果有返回的是基础类型，停止下面的过程；否则继续
- 都没返回原始类型，就会报错

如果运算符两边均为原始数据类型时，则按照以下规则解释：

- **字符串连接符**：如果两个操作数中只要存在一个操作数为 String 类型，那么另一个操作数会调用 `String()` 方法转成字符串然后拼接
- **算术运算符**：如果两个操作数都不是 String 类型，两个操作数会调用 `Number()` 方法隐式转换为 Number 类型（如果无法成功转换成数字，则变为 `NaN`，再往下操作），然后进行加法算术运算

值转换为 Number 类型和 String 类型都会遵循一个原则：如果该值为原始数据类型，则直接转换为 String 类型或 Number 类型。如果该值为引用数据类型，那么先通过固定的方法将复杂值转换为原始数据类型，再转为 String 类型或 Number 类型。[ToPrimitive](#ToPrimitive)

⚠️ **注意事项**：当 `{} + 任何值` 时， 前一个 `{}` 都会被 JavaScript 解释成空块并忽略他。

```js
"1" + 1             // "11"
"1" + "1"           // "11"
"1" + true          // "1true"
"1" + NaN           // "1NaN"
"1" + []            // "1"
"1" + {}            // "1[object Object]"
"1" + function(){}  // "1function(){}"
"1" + new Boolean() // "1false"

1 + NaN             // NaN
1 + "true"          // "1true"
1 + true            // 2
1 + undefined       // NaN
1 + null            // 1

1 + []              // "1"
1 + [1, 2]          // "11,2"
1 + {}              // "1[object Object]"
1 + function(){}    // "1function(){}"
1 + Number()        // 1
1 + String()        // "1"

[] + []             // ""
{} + {}             // "[object Object][object Object]"
{} + []             // 0
{a: 0} + 1          // 1
[] + {}             // "[object Object]"
[] + !{}            // "false"
![] + []            // "false"
'' + {}             // "[object Object]"
{} + ''             // 0
[]["map"] + []      // "function map(){ [native code] }"
[]["a"] + []        // "undefined"
[][[]] + []         // "undefined"
+!![] + []          // 1
+!![]               // 1
1-{}                // NaN
1-[]                // 1
true - 1            // 0
{} - 1              // -1
[] !== []           // true
[]['push'](1)       // 1

(![]+[])[+[]]       // "f"
(![]+[])[+!![]]     // "a"
```

#### 相等运算符

相等运算符 `==` 会对操作值进行隐式转换后进行比较

- 如果其中一个操作值为布尔值，则在比较之前先将其转换为数值
- 如果其中一个操作值为字符串，另一个操作值为数值，则通过 `Number()` 函数将字符串转换为数值
- 如果其中一个操作值是对象，另一个不是，则调用对象的 `valueOf()` 方法，得到的结果按照前面的规则进行比较
- `null` 与`undefined` 是相等的
- 如果一个操作值为 `NaN`，则返回 `false`
- 如果两个操作值都是对象，则比较它们是不是指向同一个对象

```js
'1' == true; // true
'1' == 1; // true
'1' == {}; // false
'1' == []; // false

undefined == undefined; // true
undefined == null; // true
nul == null; // true
```

#### 关系运算符

[关系运算符](../expressions/comparation-operators)：会把其他数据类型转换成 Number 之后再比较关系（除了 Date 类型对象）

- 如果两个操作值都是数值，则进行 **数值** 比较
- 如果两个操作值都是字符串，则比较字符串对应的 **ASCII 字符编码值**
  - 多个字符则从左往右依次比较
- 如果只有一个操作值是数值，则将另一个操作值转换为数值，进行 **数值** 比较
- 如果一个操作数是对象，则调用 `valueOf()` 方法（如果对象没有 `valueOf()` 方法则调用 `toString()` 方法），得到的结果按照前面的规则执行比较
- 如果一个操作值是布尔值，则将其转换为 **数值**，再进行比较

📍 `NaN` 是非常特殊的值，它不和任何类型的值相等，包括它自己，同时它与任何类型的值比较大小时都返回 `false`。

```js
5 > 10;
// false

'2' > 10;
// false

'2' > '10';
// true

'abc' > 'b';
// false

'abc' > 'aad';
// true
```

**JavaScript 原始类型转换表**

| 原始值             | 转换为数字类型                   | 转换为字符串类型  | 转换为布尔类型                       |
| :----------------- | :------------------------------- | :---------------- | :----------------------------------- |
| false              | 0                                | "false"           | false                                |
| true               | 1                                | "true"            | true                                 |
| 0                  | 0                                | "0"               | false                                |
| 1                  | 1                                | "1"               | true                                 |
| "0"                | 0                                | "0"               | <span style="color:red">true</span>  |
| "000"              | 0                                | "000"             | <span style="color:red">true</span>  |
| "1"                | 1                                | "1"               | true                                 |
| NaN                | NaN                              | "NaN"             | false                                |
| Infinity           | Infinity                         | "Infinity"        | true                                 |
| -Infinity          | -Infinity                        | "-Inifinity"      | true                                 |
| ""                 | <span style="color:red">0</span> | ""                | <span style="color:red">false</span> |
| " "                | 0                                | " "               | true                                 |
| "20"               | 20                               | "20"              | true                                 |
| "Hello"            | NaN                              | "Hello"           | true                                 |
| []                 | 0                                | ""                | true                                 |
| [20]               | 20                               | "20"              | true                                 |
| [10, 20]           | NaN                              | "10,20"           | true                                 |
| ["Hello"]          | NaN                              | "Hello"           | true                                 |
| ["Hello", "World"] | NaN                              | "Hello,World"     | true                                 |
| function(){}       | NaN                              | "function(){}"    | true                                 |
| {}                 | NaN                              | "[object Object]" | true                                 |
| null               | 0                                | "null"            | false                                |
| undefined          | NaN                              | "undefined"       | false                                |

## 经典试题

> `(a == 1) && (a == 2) && (a == 3)` 能不能为 `true`？

事实上是可以的，就是因为在 `==` 比较的情况下，会进行隐式类型转换。如果参数不是 Date 对象实例，就会进行类型转换，先 `valueOf()` 再 `toString()`。所以，我们只要改变原生的 `valueOf()` 或者 `toString()` 方法就可以达到效果：

```js
const a = {
  num: 0,
  valueOf: function () {
    return (this.num += 1);
  },
};

const eq = a == 1 && a == 2 && a == 3;
console.log(eq);
// true

// 或者改写他的 toString 方法
const num = 0;
Function.prototype.toString = function () {
  return ++num;
};
function a() {}

// 还可以改写 ES6 的 Symbol 类型的 toPrimitive 的方法
const a = {
  [Symbol.toPrimitive]: (function (i) {
    return function () {
      return ++i;
    };
  })(0),
};
```

每一次进行等号的比较，就会调用一次 `valueOf()` 方法，自增 1，所以能成立。
另外，减法也是同理：

```js
const a = {
  num: 4,
  valueOf: function () {
    return (this.num -= 1);
  },
};

const res = a == 3 && a == 2 && a == 1;
console.log(res);
```

---

**参考文章：**

- [📝 JavaScript 运算符规则与隐式类型转换详解](https://juejin.im/post/59ad2585f265da246a20e026)
