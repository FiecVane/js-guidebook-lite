---
title: Object
outline: [2, 3]
---

# Object

JavaScript 中的 `Object` 对象，是 JavaScript 中所有对象的基类，也就是说 JavaScript 中的所有对象都是由 Object 对象衍生的。Object 对象主要用于将任意数据封装成对象形式。

对象也可看做是属性的无序集合，每个属性都是一个名值对。**属性名是字符串，因此我们可以把对象看成是从字符串到值的映射**。

## 语法

**构造函数**

```js
new Object([value]);
```

**对象类型转换函数**

```js
Object([value]);
```

| 参数  | 说明                         | 类型 |
| :---- | :--------------------------- | :--- |
| value | 可选参数，需要包装为对象的值 | any  |

`Object()` 将会根据参数 `value` 的数据类型，返回对应类型的对象：

- 如果 `value` 为原始数据类型 Boolean、Number、String，则返回对应类型的对象，例如：Boolean 对象、Number 对象、String 对象。
- 如果 `value` 本身为对象，则不对其作任何更改，返回其本身。
- 如果省略了 `value` 参数，或 `value` 为 `null`、`undefined`，则返回自身无任何属性的 Object 对象。

`Object()` 的返回一个与给定值对应类型的对象。该对象包装了给定的参数。

## 构造函数

### 属性

- `Object.length`：值为 1
- `Object.prototype`：表示 `Object` 的原型对象

### 方法

- [Object.is](./is)：比较两个值是否相同
- [Object.assign](./assign)：通过拷贝一个或多个对象的可枚举 Property 来创建一个新的对象
- [Object.create](./create)：使用指定的原型对象和 Property 创建一个新对象
- [Object.keys](./keys)：获取指定对象的自身可枚举 Property 键名组成的数组集合
- [Object.values](./values)：返回一个给定对象自己的所有可枚举 Properties 值的数组集合
- [Object.entries](./entries)：获取指定对象可枚举 Properties 的键值对组成的二维数组
- [Object.defineProperties](./defineProperties)：为指定对象定义多个 Property 并分别指定它们的 Descriptors
- [Object.defineProperty](./defineProperty)：为指定对象定义单个 Property 并指定该 Property 的 Descriptors
- [Object.getOwnPropertyNames](./getOwnPropertyNames)：获取指定对象某个自有 Property 的键名数组集合（包括不可枚举属性但不包括 Symbol 值作为名称的属性）
- [Object.getOwnPropertySymbols](./getOwnPropertySymbols)：获取指定对象某个自有 Property 键名为 Symbol 类型的数组集合
- [Object.getOwnPropertyDescriptor](./getOwnPropertyDescriptor)：获取指定对象某个自有 Property 的 Descriptors
- [Object.getOwnPropertyDescriptors](./getOwnPropertyDescriptors)：获取指定对象 Properties 的 Descriptors
- [Object.isExtensible](./isExtensible)：判断指定对象是否处于可扩展状态
- [Object.isFrozen](./isFrozen)：判断指定对象是否处于冻结状态
- [Object.isSealed](./isSealed)：判断指定对象是否处于密封状态
- [Object.preventExtensions](./preventExtensions)：标识指定对象为不可扩展状态
- [Object.freeze](./freeze)：标识指定对象为冻结状态
- [Object.seal](./seal)：标识指定对象为密封状态
- [Object.getPrototypeOf](./getPrototypeOf)：获取指定对象的原型对象
- [Object.setPrototypeOf](./setPrototypeOf)：设置指定对象的原型对象

## 原型对象

JavaScript 中的所有对象都来自 `Object`，所有对象从 `Object.prototype` 继承方法和属性，尽管它们可能被覆盖。

### 属性

- `Object.prototype.constructor`：返回创建实例对象的构造函数的引用。注意，此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串
- `Object.prototype.__proto__`：指向当对象被实例化的时候，用作原型的对象
- `Object.prototype.__noSuchMethod`：当未定义的对象成员被调用作方法的时候，允许定义并执行的函数

### 方法

- [Object.prototype.hasOwnProperty](./hasOwnProperty)：用于指示对象自身属性中是否具有指定的属性，而且此属性非原型链继承的
- [Object.prototype.isPrototypeOf](./isPrototypeOf)：用于测试一个对象是否存在于另一个对象的原型链上
- [Object.prototype.propertyIsEnumerable](./propertyIsEnumerable)：用于检测指定属性是否为对象自身的可枚举属性（不含原型链继承的属性）
- Object.prototype.toSource：用于表示源代码的字符串
- Object.prototype.toLocaleString：用于派生对象为了特定语言环境的目的而重载使用
- [Object.prototype.toString](./toString)：返回一个表示该对象的字符串
- `Object.prototype.valueOf`：返回指定对象的原始值

## 示例

如果参数为**原始数据类型**，则返回对应类型的对象。

```js
const a = new Object(true);
console.log(a);
// Boolean {true}

let b = new Object(8);
console.log(b);
// Number {8}

let c = new Object("string");
console.log(c);
// String {"string"}
```

如果参数自身就是**对象**（`typeof` 该参数返回 `"object"` 或 `"function"`），则不对其作任何更改，返回其本身。

```js
let a = new Object(Boolean());
console.log(a);
// Boolean{false}

let b = new Object(Number());
console.log(b);
// Number{0}

let c = new Object(String());
console.log(c);
// String{"", length: 0}
```

如果**未指定参数**，或参数为 `null` 或 `undefined`，则返回一个空对象。

```js
let a = new Object();
console.log(a);
// {}

let b = new Object(undefined);
console.log(b);
// {}

let c = new Object(null);
console.log(c);
// {}
```
