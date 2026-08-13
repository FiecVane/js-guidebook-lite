---
title: 异步函数
outline: [2, 3]
---

# 异步函数

`async` 函数是 [Generator](../../../standard-built-in-objects/control-abstraction-objects/generator) 函数的语法糖。使用关键字 `async` 来表示，在函数内部是使用 `await` 命令来表示异步。

相较于 Generator，`async` 函数的改进在于以下四点：

- **内置执行器**：Generator 函数的执行必须靠执行器，而 `async` 函数自带执行器，调用方式与普通函数一致。
- **更好的语义**：`async` 和 `await` 相较于星号（`*`）和 `yield` 更加语义化。`async` 表示函数中有异步操作，`await` 表示紧跟在后面的表达式需要等待结果。
- **更广的适用性**：`co` 模块约定，`yield` 命令后面只能是 Thunk 函数或 Promise 对象，而 `async` 函数的 `await` 命令后面则可以是 Promise 和原始类型的值（Number、String 和 Boolean，但这时会自动转成立即 `fulfilled` 状态的 Promise 对象）。
- **返回值是 Promise**：`async` 函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用 `then` 方法指定下一步的操作。

进一步说，`async` 函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而 `await` 命令就是内部 `then` 命令的语法糖。

**`async`函数与 Generator 函数的对比**

|                  | async 函数           | Generator 函数   |
| :--------------- | :------------------- | :--------------- |
| **定义方式**     | `async function(){}` | `function* (){}` |
| **异步语句命令** | `await`              | `yield`          |

## 基本用法

### 异步函数的声明

凡是在函数声明前添加 `async` 关键字的函数在执行后都会自动返回 Promise 对象。

`async` 函数返回一个 Promise 对象，可以使用 `then` 方法添加回调函数。当函数执行的时候，一旦遇到 `await` 就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

🌰 **代码示例**：

```js
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function foo(arg1, ms) {
  await timeout(ms);
  return arg1;
}

foo('Hello world!', 500).then(console.log);
// 'Hello world!'
```

### 异步函数的语句

`await` 命令必须在 `async` 函数里使用，不能单独使用。

由于 `async` 函数返回的是 Promise 对象，可以作为 `await` 命令的参数。

### 异步语句返回值

`await` 后需跟 Promise。

`await` 作用之一就是获取随后 Promise 对象成功状态传递出来的参数。

`await` 命令只能用在 `async` 函数中，否则会报错。

## 语法

### 返回值类型

`async` 函数返回一个 Promise 对象

`async` 函数内部 `return` 语句返回的值，会成为 `then` 方法回调函数的参数。

```js
async function foo() {
  return 'Hello world!';
}

foo().then((res) => console.log(res));
// 'Hello world!'
```

如果 `async` 函数内部抛出异常，则会导致返回的 Promise 对象状态变为 `rejected` 状态。抛出的错误而会被 `catch` 方法回调函数接收到。

```js
async function foo() {
  throw new Error('Error');
}

foo()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

### 返回值状态变化

`async` 函数返回的 Promise 对象，必须等到内部所有 `await` 命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到 `return` 语句或者抛出错误。也就是说，只有 `async` 函数内部的异步操作执行完，才会执行 `then` 方法指定的回调函数。

🌰 **代码示例**：

```js
const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

async function foo() {
  await delay(1000);
  await delay(2000);
  await delay(3000);
  return 'done';
}

foo().then(console.log);
// 'done'
```

上面代码中，函数 `foo` 内部有三个延迟函数。只有这三个操作依次完成，才会执行 `then` 方法里面的 `console.log`。

### 异步语句返回值

正常情况下，异步语句 `await` 命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。

🌰 **代码示例**：

```js
async funciont foo(){
    return await 1
}

fn.then(res => console.log(res));
// 1
```

## 异常处理

### 捕捉异常

任何一个 `await` 语句后面的 Promise 对象变为 `rejected` 状态，那么整个 `async` 函数都会中断执行。

🌰 **代码示例**：

```js
async function foo() {
  await Promise.reject('Error!');
  await Promise.resolve('Hello world!');
  // 不会执行
}
```

当 `async` 异步函数中只要有一个 `await` 异步语句返回的 Promise 处于 `rejected` 状态，则后面的 `await` 异步语句都不会执行。

**解决方法**：使用 [try-catch 语句](../../../basic-concept/statements-and-declarations/the-try-statement) 或在 `await` 返回的 Promise 添加 `catch` 方法捕捉错误。

有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个 `await` 放在 `try...catch` 结构里面，这样不管这个异步操作是否成功，第二个 `await` 都会执行。

🌰 **代码示例**：

```js
async function foo() {
  try {
    await Promise.reject('Error!');
  } catch (err) {
    // do something
  }

  return await Promise.resolve('Hello world!');
}

foo().then((res) => console.log(res));
// 'Hello world!'
```

另一种方法是 `await` 后面的 Promise 对象再跟一个 `catch` 方法，处理前面可能出现的错误。

🌰 **代码示例**：

```js
async function foo() {
  await Promise.reject('Error!').catch((e) => console.log(e));

  return await Promise.resolve('Hello world!');
}

foo().then((res) => console.log(res));
// 'Error!'
// 'Hello world!'
```

### 操作中断

如果 `await` 后面的异步操作出错，那么等同于 `async` 函数返回的 Promise 对象被 `reject`。

使用 `try...catch` 语句，实现多次重复尝试。

🌰 **代码示例**：

```js
const superagent = require('superagent');
const NUM_RETRIES = 3;

async function foo() {
  let i;
  for (i = 0; i < NUM_RETRIES; i++) {
    try {
      await superagent.get('https://google.com/this-throws-an-error');
      break;
    } catch (err) {
      // do something
    }
  }

  console.log(i);
  // 3
}

foo();
```

如果 `await` 操作成功，就会使用 `break` 语句退出循环；如果失败，会被 `catch` 语句捕捉，然后进入下一轮循环。

## 实现原理

`async` 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。

🌰 **代码示例**：

```js
async function foo() {
  // ...
}
```

相当于：

```js
function foo(args) {
  return spawn(function* () {
    // ...
  });
}
```

所有的 `async` 函数都可以写成上面的第二种形式，其中的 `spawn` 函数就是自动执行器。

```js
function spawn(genF) {
  return new Promise(function (resolve, reject) {
    const gen = genF();
    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch (e) {
        return reject(e);
      }
      if (next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(
        function (v) {
          step(function () {
            return gen.next(v);
          });
        },
        function (e) {
          step(function () {
            return gen.throw(e);
          });
        }
      );
    }
    step(function () {
      return gen.next(undefined);
    });
  });
}
```

## 最佳实践

### 异步阻塞

后面请求的发送总是需要依赖上一个请求返回的数据。

🌰 **代码示例**：

```js
function request(time) {
  return new Promise((resolve, rejecr) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

async function getResult() {
  let p1 = await request(500);
  let p2 = await request(p1 + 1000);
  let p3 = await request(p2 + 1000);
  return p3;
}

getResult()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

### 异步非阻塞

在某些业务场景下，开发者可能需要处理多个连续步骤的操作，但是这些操作未必相互依赖。因此需要对这些操作进行优化。

综合上述 [异步阻塞](#异步阻塞) 和 [异步并发](#异步并发)，我们可以利用 Event Loop 的优势并发执行这些非阻塞异步函数。

🌰 **代码示例**：

```js
// 选择披萨
async function selectPizza() {
  // 异步获取披萨数据
  const pizzaData = await getPizzaData();
  // 选择披萨
  const chosenPizza = choosePizza();
  // 异步添加选中披萨到购物车
  await addPizzaToCart(chosenPizza);
}

// 选择饮料
async function selectDrink() {
  // 异步获取饮料数据
  const drinkData = await getDrinkData();
  // 选择饮料
  const chosenDrink = chooseDrink();
  // 异步添加选中饮料到购物车
  await addDrinkToCart(chosenDrink);
}

(async () => {
  // 并发执行这些非阻塞异步函数
  Promise.all([selectPizza(), selectDrink()]).then(orderItems);
})();
```

补充一种与之相关的比较优雅的写法。

```js
await Promise.all(selectPizza().then(choosePizza), selectDrink().then(chooseDrink));
```

### 异步并发

多个网络请求是非继发关系，最好使用 `Promise.all` 方法实现同时触发。

🌰 **代码示例**：

```js
const [userList, orderList] = await Promise.all([getUserList(), getOrderList()]);

let userPromise = getUserList();
let orderPromise = getOrderList();

let user = await userPromise;
let order = await orderPromise;
```

上面两种写法，`getUserList` 和 `getOrderList` 都是同时触发，这样就会缩短程序的执行时间。

### 未知数量的异步并发

承接上个实践方案，当我们需要解决未知数量的 Promise 的时候，我们只需要创建数组并存储它们，然后同样使用 `Promise.all` 方法就能够并发地等待所有 Promise 返回结果。

🌰 **代码示例**：

```js
async function foo() {
  // 批量配置项
  const items = await batchDisposal();
  // 每个配置项对应一个异步请求
  const promises = items.map((item) => sendRequest(item));
  await Promise.all(promises);
}
```

### 不等待结果的异步循环

`await` 每次循环任务，注意遍历执行的匿名函数也要设置为 `async` 异步函数。

```js
function delay() {
  return new Promise((resolve) => setTimeout(resolve, 300));
}

async function delayedLog(item) {
  // notice that we can await a function that returns promise
  await delay();
  // log item only after a delay
  console.log(item);
}

async function execute(tasks) {
  tasks.forEach(async (item) => {
    await delayLog(item);
  });

  console.log('DONE!');
}
```

### 异步串行遍历

要等待所有的结果返回，我们还是要回到老式的 `for` 循环写法：

```js
async function execute(tasks) {
  let result = [];

  for (const task of tasks) {
    try {
      result.push(await task());
    } catch (err) {
      result.push(null);
    }
  }

  return result;
}
```

上面这段的遍历是 **串行** 执行的，我们也可以把它转换成 **并行** 的。

### 异步并行遍历

我们可以通过更改上面的代码来实现并行的异步操作：

```js
async function execute(tasks) {
  // map tasks to promises
  const promises = tasks.map(delayLog);
  // wait until all promises are resolved
  await Promise.all(promises);

  console.log('DONE!');
}
```

## 参考资料

- [📚 《ECMAScript 6 入门》](http://es6.ruanyifeng.com/#docs/async)
- [📝 译文：更快的 async 函数和 Promise](https://juejin.im/post/5beea5f5f265da61590b40cd)
- [📝 译文：图与例解读 Async/Await](https://zhuanlan.zhihu.com/p/30500894)
