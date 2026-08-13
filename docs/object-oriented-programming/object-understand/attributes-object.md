---
title: 对象属性描述符
outline: [2, 3]
---

# 对象属性描述符

ECMA-262 第五版在定义只有内部才能使用的特性（Attribute）时，描述了属性（Property）的各种特征。这些特性是为了实现 JavaScript 引擎而存在的，因此在 JavaScript 中不能直接访问它们。为了表示特征是内部值，该规范把它们放在了两对儿方括号 `[[]]`中。

对象属性描述符的类型分为两种：[数据属性](#数据属性) 和 [访问器属性](#访问器属性)。

## 数据属性

数据属性（Data Property）包含一个数据值的位置，在这个位置可以读取和写入值。数据属性共有 4 个特性。

| 数据属性           | 说明                                                                                                         | 默认值    |
| ------------------ | ------------------------------------------------------------------------------------------------------------ | --------- |
| `[[Configurable]]` | **可配置性**决定是否可以使用 `delete` 删除 Properties，以及是否可以修改 Descriptor 的特性                    | true      |
| `[[Enumberable]]`  | **可枚举性**决定属性是否出现在对象的 Properties 枚举中，比如是否可以通过 `for-in` 循环遍历该 Properties      | true      |
| `[[Writable]]`     | **可写性**决定是否可以修改 Properties 的值                                                                   | true      |
| `[[Value]]`        | **属性值**包含这个 Property 的数据值，读取属性值的时候，从这个位置读；写入属性值的时候，把新值保存在这个位置 | undefined |

### 可写性

**可写性**（Writable）决定是否可以修改属性的值，默认值为 `true`。

```js
let foo = { a: 1 };
foo.a = 2;

console.log(foo.a);
// 2
```

设置 `writable: false` 后，赋值语句会静默失效。

```js
let foo = { a: 1 };

Object.defineProperty(foo, 'a', {
  writable: false,
});

foo.a = 2;

console.log(foo.a);
// 1
```

设置 `writable:false` 后，通过 [Object.defineProperty()](../../standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-constructor/defineProperty) 方法改变属性 `value` 的值不会受影响，因为这也意味着重置 `writable` 的属性值为 `true`。

```js
let foo = { a: 1 };

Object.defineProperty(foo, 'a', {
  writable: false,
});

console.log(foo.a);
// 1

Object.defineProperty(foo, 'a', {
  value: 2,
});

console.log(foo.a);
// 2
```

### 可配置性

**可配置性**（ Configurable）决定是否可以使用 `delete` 删除属性，以及是否可以修改属性描述符的特性，默认值为 `true`。

设置 `configurable: false` 后，无法使用 `delete` 删除属性。

```js
let foo = { a: 1 };

Object.defineProperty(foo, 'a', {
  configurable: false,
});

delete foo.a;
// false

console.log(foo.a);
// 1
```

一般地，设置 `configurable: false` 后，将无法再使用 `Object.defineProperty()` 方法来修改属性描述符。

```js
let foo = { a: 1 };

Object.defineProperty(foo, 'a', {
  configurable: false,
});

Object.defineProperty(foo, 'a', {
  configurable: true,
});
// Uncaught TypeError: Cannot redefine property: a
```

有一个例外，设置 `configurable: false` 后，只允许 `writable` 的状态从 `true` 变为 `false`。

```js
let foo = { a: 1 };

Object.defineProperty(foo, 'a', {
  configurable: false,
  writable: true,
});

foo.a = 2;

console.log(foo.a);
// 2

Object.defineProperty(foo, 'a', {
  writable: false,
});

// 由于 writable:false 生效，对象 foo 的 bar 属性无法修改值
// 所以 `foo.bar=3` 的赋值语句静默失败
foo.a = 3;

console.log(foo.a);
// 2
```

### 可枚举性

**可枚举性**（Enumerable）决定属性是否出现在对象的属性枚举中。具体来说，能够通过 `for-in` 循环、`Object.keys` 方法、`JSON.stringify` 等方法获取到的属性为可枚举属性。

除此之外，可以使用 [Object.propertyIsEnumerable](../../standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-prototype-object/propertyIsEnumerable) 方法判断对象的 Property 是否可枚举。

用户定义的**普通属性默认是可枚举的**，而**原生继承的属性默认是不可枚举的**。

🌰 **代码示例**：

由于原生继承的属性默认不可枚举，所以只取得自定义的属性 `bar: 1`。

```js
let foo = { a: 1 };

for (let item in foo) {
  console.log(foo[item]);
  // 1
}
```

由于 `enumerable` 被设置为 `false`，在 `for-in` 循环中 `a` 属性无法被枚举出来。

```js
let foo = { a: 1 };

Object.defineProperty(foo, 'a', { enumerable: false });

for (let item in foo) {
  console.log(foo[item]);
  // undefined
}
```

## 访问器属性

访问器属性不包含数据值，它们包含两个方法分别是 `getter` 和 `setter` 函数（非必需）。

- 在读取访问器属性时，会调用 `getter` 函数，**这个函数负责返回有效的值**
- 在写入访问器属性时，会调用 `setter` 函数并传入新值，**这个函数负责决定如何处理数据**

| 访问器属性         | 说明                              | 默认值    |
| :----------------- | :-------------------------------- | --------- |
| `[[Configurable]]` | 同数据属性中的 `[[Configurable]]` | true      |
| `[[Enumberable]]`  | 同数据属性中的 `[[Enumberable]]`  | true      |
| `[[Getter]]`       | 在**读取属性**时调用的函数        | undefined |
| `[[Setter]]`       | 在**写入属性**时调用的函数        | undefined |

和数据属性不同，访问器属性**不具可写性**（Writable）。

- 如果属性同时具有 `getter` 和 `setter` 方法，那么它是一个读 / 写属性。
- 如果它只有 `getter` 方法，那么它是一个只读属性。
- 如果它只有 `setter` 方法，那么它是一个只写属性。读取只写属性总是返回 `undefined`。

### Getter

`[[Getter]]` 是一个隐藏函数，在获取属性值时调用。

给只设置 `get` 方法，没有设置 `set` 方法的对象赋值会静默失败，在严格模式下会报错。

```js
const foo = {
  get a() {
    return 2;
  },
};

console.log(foo.a);
// 2

// Invalid
foo.a = 3;

console.log(foo.a);
// 2
```

### Setter

`[[Setter]]` 也是一个隐藏函数，在设置属性值时调用，默认值是 `undefined`。

只设置 `set` 方法，而不设置 `get` 方法，则对象属性值为 `undefined`。

```js
let foo = {
  set a(val) {
    return 2;
  },
};

foo.a = 1;

console.log(foo.a);
// undefined
```

一般地，`set` 和 `get` 方法需要成对出现的。

```js
const foo = {
  get a() {
    return this._a;
  },
  set a(val) {
    this._a = val * 2;
  },
};

foo.a = 1;

console.log(foo.a);
// 2
```
