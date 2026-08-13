---
title: 函数防抖
outline: [2, 3]
---

# 函数防抖

**函数防抖**：在频繁触发的情况下，只有足够的空闲时间，才执行代码一次，如果没有执行完就清除掉，重新执行逻辑。简单来说，当触发后再次触发，会取消上一次触发的执行，直到最后一次触发后过去设定时间后才执行。

🏕 **生活中的实例：**

假设你正在乘电梯上楼，当电梯门关闭之前发现有人也要乘电梯，礼貌起见，你会按下开门开关，然后等他进电梯；如果在电梯门块关闭之前，又有人来了，你会继续开门；这样一直进行下去，假定电梯没有容量限制，你可能需要等待几分钟，等到最终没人进电梯了，才会关闭电梯门，然后上楼。

函数防抖规定函数再次执行需要满足两个条件：

1. 当调用事件触发一段时间后，才会执行该事件
2. 在条件一等待的这段时间间隔内再次调用此动作则将重新计算时间间隔

## 实现原理

某些代码不可以在没有间断的情况连续重复执行。第一次调用函数，创建一个定时器，在指定的时间间隔之后运行代码。当第二次调用该函数时，它会清除前一次的定时器并设置另一个。如果前一个定时器已经执行过了，这个操作就没有任何意义。然而，如果前一个定时器尚未执行，其实就是将其替换为一个新的定时器。目的是只有在执行函数的请求停止了一段时间之后才执行。

## 代码实现

当事件触发之后，必须等待设定的时间间隔之后，回调函数才会执行，假若在等待的时间内，事件又触发了则重新再等待设定的时间间隔，直到事件在设定的时间间隔内事件不被触发，那么最后一次触发事件后，则执行函数。

💡 **实现思路：**

将目标方法（动作）包装在定时器 `setTimeout` 里面，然后这个方法是一个事件的回调函数，如果这个回调函数一直执行，那么对应在运行的定时器通过设置 `clearTimeout` 进行清除，那么定时器内的目标方法也就不会执行，直到定时器的回调函数在时间间隔后开始执行，目标方法才被执行。

```js
/**
 * 实现函数的防抖（目的是频繁触发中只执行一次）
 * @param func {function} 需要执行的函数
 * @param wait {number} 检测防抖的间隔频率，单位是毫秒（ms）
 * @return {function} 可被调用执行的函数
 */

function debounce(func, wait = 500, immediate = false) {
  let timer = null;

  // 返回一个函数，这个函数会在一个时间区间结束后的 wait 毫秒执行 func 函数
  return function (...args) {
    // 是否立即执行
    if (immediate) {
      fn.apply(this, args);
    }

    // 函数被调用，清除定时器
    timer && clearTimout(timer);

    // 当返回的函数被最后一个调用后（也就是用户停止了某个连续的操作）
    // 再过 wait 毫秒就执行 func
    // 这里直接使用箭头函数就不用保存执行上下文的引用了
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

其他框架库实现：[Lodash](https://github.com/lodash/lodash/blob/master/debounce.js) [Underscore](https://underscorejs.org/#debounce)

## 应用场景

函数防抖应用场景：连续事件的响应只需执行一次回调

- 按钮提交场景：防止多次点击提交按钮，只执行最后提交的一次
- 服务端验证场景：表单验证需要服务端配合，只执行一段连续的输入事件的最后一次，还有搜索联想词功能类似

> 总结：适合多次事件一次响应的情况

## 应用实践

### 注册实时验证

这里以用户注册时验证用户名是否被占用为例，如今很多网站为了提高用户体验，不会再输入框失去焦点的时候再去判断用户名是否被占用，而是在输入的时候就在判断这个用户名是否已被注册：

```js
$('input.user-name').on('input', function () {
  $.ajax({
    url: `https://just.com/check`,
    method: 'post',
    data: {
      username: $(this).val(),
    },
    success(data) {
      if (data.isRegistered) {
        $('.tips').text('该用户名已被注册！');
      } else {
        $('.tips').text('恭喜！该用户名还未被注册！');
      }
    },
    error(error) {
      console.log(error);
    },
  });
});
```

很明显，这样的做法不好的是当用户输入第一个字符的时候，就开始请求判断了，不仅对服务器的压力增大了，对用户体验也未必比原来的好。而理想的做法应该是这样的，当用户输入第一个字符后的一段时间内如果还有字符输入的话，那就暂时不去请求判断用户名是否被占用。在这里引入函数防抖就能很好地解决这个问题：

```js
$('input.user-name').on(
  'input',
  debounce(function () {
    $.ajax({
      url: `https://just.com/check`,
      method: 'post',
      data: {
        username: $(this).val(),
      },
      success(data) {
        if (data.isRegistered) {
          $('.tips').text('该用户名已被注册！');
        } else {
          $('.tips').text('恭喜！该用户名还未被注册！');
        }
      },
      error(error) {
        console.log(error);
      },
    });
  })
);
```

其实函数防抖的原理也非常地简单，通过闭包保存一个标记来保存  `setTimeout`  返回的值，每当用户输入的时候把前一个  `setTimeout` clear 掉，然后又创建一个新的  `setTimeout`，这样就能保证输入字符后的  `interval`  间隔内如果还有字符输入的话，就不会执行  `fn`  函数了。

```js
function debounce(fn, interval = 300) {
  let timeout = null;

  return function () {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, interval);
  };
}
```

## 参考资料

- [📝 函数节流和函数防抖的可视化区别](http://demo.nimius.net/debounce_throttle/)
