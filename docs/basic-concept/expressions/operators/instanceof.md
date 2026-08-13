---
title: instanceof
outline: [2, 3]
---

# instanceof

`instanceof` 运算符用于测试构造函数的 `prototype` 属性是否出现在对象的原型链中的任何位置。

代码示例：

```js
target instanceof constructor;
```

## 检测类型

`instanceof` 可以检测某个对象是否是另一个对象的 **实例**。

```js
const Person = function () {};
const student = new Person();

console.log(student instanceof Person);
// true
```

`instanceof` 可以检测父类型。

```js
function Person() {}
function Student() {}

const p = new Person();

// 继承原型
Student.prototype = p;

const s = new Student();

console.log(s instanceof Student);
// true
console.log(s instanceof Person);
// true
```

其他例子：

```js
// 数字类型
console.log(1 instanceof Number);
// false
conosole.log(Infinity instanceof Number);
// false
console.log(Number(2) instanceof Number);

// 布尔值
console.log(true instanceof Boolean);
// false

// 字符串
console.log('' instanceof String);
// false

// 函数类型
const fn = () => console.log('Hello world!');
console.log(fn instanceof Function);
// true
```

## 模拟实现

```js
function simulateInstanceof(left, right) {
  if (left === null || (typeof left !== 'object' && typeof left !== 'function')) return false;

  // 递归原型链
  while (true) {
    // Object.prototype.__proto__ === null
    if (left === null) return false;

    // 这里重点：当 left 严格等于 prototype 时，返回 true
    if (left === right.prototype) return true;

    left = left.__proto__;
  }
}
```

## 参考资料

- [📝 JS 魔法堂：再识 instanceof](https://juejin.im/entry/5804640d0bd1d0005813083e)
- [📝 instanceof 原理](https://juejin.im/post/5b7f64be51882542c83476f0)
