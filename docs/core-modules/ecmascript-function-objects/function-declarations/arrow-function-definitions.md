---
title: 箭头函数
outline: [2, 3]
---

# 箭头函数

箭头函数表达式的语法比函数表达式更短，并且没有自己的 `this`、`arguments`、`super` 和 `new.target`。

箭头函数表达式更适用于那些本来需要匿名函数的业务场景，并且它们不能用作构造函数。

## 赋值式写法

箭头函数只能用 **赋值式写法**，不能用声明式写法。

```js
const fn = () => {
  // do something
};
```

## 箭头函数参数

### 单个参数

当只有一个参数时，圆括号是可选的，如果没有参数或者参数多于一个就需要加括号。

```js
const fn1 = (param1) => {
  // do something
};

const fn2 = () => {
  // do something
};

const fn3 = (param1, param2) => {
  // do something
};
```

### 剩余参数

支持剩余参数和默认参数。

```js
const fn = (params1, params2, ...rest) => {
  // do something
};
```

🌰 **代码示例**：

```js
const numbers = (...nums) => nums;

numbers(1, 2, 3, 4, 5);
// [1, 2, 3, 4, 5]

const headAndTail = (head, ...tail) => [head, tail];

headAndTail(1, 2, 3, 4, 5);
// [1, [2, 3, 4, 5]]
```

### 默认参数

```js
const fn = (params1 = default1, params2, ..., paramsN = defaultN) => {
  // do something
}
```

### 解构赋值

同样支持参数列表解构

```js
const fn = ([a, b] = [1, 2], { x: c } = { x: a + b }) => a + b + c;

fn();
// 6
```

🌰 **代码示例**

```js
const full = ({ first, last }) => firsr + '' + last;

// 等同于
function full(person) {
  return person.first + '' + person.last;
}
```

## 函数体

### 单个表达式

如果函数体只有一个表达式，可以不加花括号

```js
const fn = (param1, param2) => param1 + param2;
```

### 返回缺省值

如果函数没有括号，可以不写 `return` ，箭头函数会帮你 `return`

```js
const fn = (param1, param2) => param1 + param2;

fn(1, 2);
```

### 直接返回对象

加括号的函数体返回对象字面表达式

```js
const fn = (bar) => ({ foo: bar });
```

## 应用场景

### 回调函数

**数组方法 map 函数：**

```js
// 普通函数写法
const result = [1, 2, 3].map(function (x) {
  return x * x;
});

// 箭头函数写法
const result = [1, 2, 3].map((x) => x * x);
```

**数组方法 sort 函数：**

```js
// 普通函数写法
const result = values.sort(function (a, b) {
  return a - b;
});

// 箭头函数写法
const result = values.sort((a, b) => a - b);
```

## 注意事项

- 函数体内的 `this` 对象，就是 **定义时所在** 的对象，而不是使用时所在的对象
- 不可以当作构造函数，也就是说，不可以使用 `new` 命令，否则会抛出一个错误
- 不可以使用 `arguments` 对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替
- 不可以使用 `yield` 命令，因此箭头函数不能用作 Generator 函数

### 箭头函数中的 `this`

`this` 对象的指向时可变的，但是在箭头函数中，它是**固定的**。因为箭头函数内部的 `this` 是 **词法作用域**，由上下文确定。

```js
function foo() {
  setTimeout(() => {
    console.log(this.key);
  }, 100);
}

var key = 100;

foo.call({ key: 50 });
// 50
```

上面的代码中，`setTimeout` 的参数一个箭头函数，这个箭头函数的定义生效是在 `foo` 函数生成时，而它的真正执行要等到 100 毫秒后。如果是普通函数，执行时 `this` 应该指向全局对象 `window`，这时应该输出 `100`。但是，箭头函数导致 `this` 总是指向函数定义生效时所在的对象（本例时 `{ key: 50 }`），所以输出的是 `50`。

箭头函数可以让 `setTimeout` 里面的 `this`，绑定定义时所在的作用域，而不是指向运行时所在的作用域。

下面是另一个例子。

```js
function Timer() {
  this.num1 = 0;
  this.num2 = 0;

  // 箭头函数
  setInterval(() => this.num1++, 1000);

  // 普通函数
  setInterval(function () {
    this.num2++;
  }, 1000);
}

const timer = new Timer();

setTimeout(() => console.log('num1', timer.num1), 3000);
setTimeout(() => console.log('num2', timer.num2), 3000);
// num1: 3
// num2: 0
```

上面的代码中，`Timer` 函数内部设置了两个定时器，分别使用了箭头函数和普通函数。

前者的 `this` 绑定 **定义时** 所在的作用域（即 `Timer` 函数），后者的 `this` 指向 **运行时** 所在的作用域（即全局对象）。所以，3000ms 之后， `timer.num1` 被更新了 3 次，而 `timer.num2` 一次都没更新。

箭头函数可以让 `this` 指向固定化，这种特征很 **有利于封装回调函数**。

```js
const handler = {
  id: '123456',
  init: function () {
    document.addEventListener('click', (event) => this.doSomething(event.type), false);
  },
  doSomething: function (type) {
    console.log('Handling' + type + ' for ' + this.id);
  },
};
```

以上的代码的 `init` 方法中使用了箭头函数，这导致箭头函数里面的 `this` 总是指向 `handler` 对象。否则，回调函数运行时，`this.doSomething` 一行会报错，因为此时 `this` 指向 `document` 对象。

⚠️ **注意**：`this` 指向的固定化并不是因为箭头函数内部有绑定 `this` 的机制，实际原因时箭头函数根本没有自己的 `this`，导致内部的 `this` 就是外层代码块的 `this`。正是因为它没有 `this`，所以不能用作构造函数。

箭头函数转成 ES5 的代码如下。

```js
// ES6
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

// ES5
function foo() {
  var _this = this;

  setTimeout(function () {
    console.log('id:', _this.id);
  }, 100);
}
```

上面的代码中，转换后的 ES5 版本清楚地说明了箭头函数里面根本没有自己的 `this`，而是引用外层的 `this`。

```js
// 请问下面的代码之中有几个this?
function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var fn = foo.call({ id: 1 });

var res1 = fn.call({ id: 2 })()();
// id: 1
var res2 = fn().call({ id: 3 })();
// id: 1
var res3 = fn()().call({ id: 4 });
// id: 1
```

上面的代码中只有一个 `this`，就是函数 `foo` 的 `this`，所以 `res1`、`res2`、`res3` 都输出同样的结果。因为所有的内层函数都是箭头函数，都没有自己的 `this`，它们的 `this` 其实都是最外层 `foo` 函数的 `this`。

除了 `this` 外，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：`arguments`、`super`、`new.target`。

```js
function foo() {
  setTimeout(() => {
    console.log('args:', arguments);
  }, 100);
}

foo(2, 4, 6, 8);
// args: [2, 4, 6, 8]
```

上面代码中，箭头函数内部的变量 `arguments` ，其实是函数 `foo` 的 `arguments` 变量。

另外，由于箭头函数没有自己的`this`，所以当然也就不能用`call()`、`apply()`、`bind()`这些方法去改变`this`的指向。

```js
(function () {
  return [(() => this.x).bind({ x: 'inner' })()];
}.call({ x: 'outer' }));
// ['outer']
```

上面代码中，箭头函数没有自己的`this`，所以`bind`方法无效，内部的`this`指向外部的`this`。

### 嵌套的箭头函数

箭头函数内部，还可以再使用箭头函数。下面是一个 ES5 语法的多重嵌套函数。

```js
function insert(value) {
  return {
    into: function (array) {
      return {
        after: function (afterValue) {
          array.splice(array.indexOf(afterValue) + 1, 0, value);
          return array;
        },
      };
    },
  };
}

insert(2).into([1, 3]).after(1); // [1, 2, 3]
```

上面这个函数，可以使用箭头函数改写。

```js
let insert = (value) => ({
  into: (array) => ({
    after: (afterValue) => {
      array.splice(array.indexOf(afterValue) + 1, 0, value);
      return array;
    },
  }),
});

insert(2).into([1, 3]).after(1); // [1, 2, 3]
```

下面是一个部署管道机制（pipeline）的例子，即前一个函数的输出是后一个函数的输入。

```js
const pipeline = (...focus) => (val) => focus.reduce((a, b) => b(a), val);

const plus1 = (a) => a + 1;
const mult2 = (a) => a * 2;
const addThenMult = pipeline(plus1, mult2);

addTheMult(5);
// 12
```

如果觉得上面的可读性比较差，也可以采用下面的写法。

```js
const plus1 = (a) => a + 1;
const mult2 = (a) => a * 2;

mult2(plus1(5));
// 12
```
