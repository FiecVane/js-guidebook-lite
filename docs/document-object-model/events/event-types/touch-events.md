---
title: 触控事件
outline: [2, 3]
---

# 触控事件

TouchEvent 是一类描述手指在触摸平面（触摸屏、触摸板等）的状态变化的事件。这类事件用于描述一个或多个触点，使开发者可以检测触点的移动，触点的增加和减少等等。

每个 Touch 对象代表一个触点，每个触点都由其位置、大小、形状、压力大小和目标元素描述。TouchList 对象代表多个触点的一个列表。

触控事件与鼠标事件类似，不同的是触控事件还提供同一表面不同位置的同步触摸。

## 定义

- 表面（Surface）：可感知触摸的平面，可以是屏幕或触控板。
- 触摸点（Touch Point）：表面上的一个接触点，有可能是手指（或者胳膊肘、耳朵、鼻子都行。但一般是手指）或者触摸笔

## 接口

触控事件包括三个接口对象：

- [TouchEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent)：表示位于表面上的一个触摸点的某个状态发生改变时产生的事件
- [Touch](https://developer.mozilla.org/zh-CN/docs/Web/API/Touch)：表示用户与触摸表面间的一个单独的接触点
- [TouchList](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchList)：表示一组 Touch，用于多点触控的情况

TouchEvent 的属性继承了 UIEvent 和 Event。[详情见 MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent#%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8)

通过检查触控事件的 `TouchEvent.type` 属性来确定当前事件属于哪种类型。

> ⚠️ 注意：在很多情况下，触控事件和鼠标事件会同时触发（目的是让没有对触控设备优化的代码仍可在触控设备上运行）。如果你调用了触控事件，可以阻止默认行为以防止触发相对应的鼠标事件。

## 触控事件类型

为了区别触控相关的状态改变，存在多种类型的触控事件。可以通过检查触控事件的 `TouchEvent.type` 属性来确定当前事件属于哪种类型。

| 事件        | 说明                                                             |
| :---------- | :--------------------------------------------------------------- |
| touchstart  | 当用户触摸屏幕时触发（即使已经有手指放在屏幕上也会触发）         |
| touchmove   | 当手指在屏幕上滑动时触发（在触发期间阻止默认行为可阻止画面滑动） |
| touchend    | 当手指从屏幕上离开的时候触发（触发频率因不同浏览器而不同）       |
| touchcancel | 当系统停止跟踪触摸的时候触发（取决于浏览器实现，并不常用）       |

触摸屏事件触发顺序：

```
touchstart -> touchmove -> touchend -> click
```

`touchcancel` 事件触发的常见原因：

- 由于某事件取消了触摸：例如触摸过程被 Modal 模态框打断
- 触电离开了文档窗口，而进入了浏览器的界面元素、插件或者其他外部内容区域
- 当用户产生的触点个数超过设备支持的个数，从而导致 TouchList 中最早的 Touch 对象被取消

很值得注意的是，在很多情况下，触摸事件和鼠标事件会一起触发（以使非触摸专用的代码仍然可以与用户交互）。如果你要使用触摸事件，你可以使用 `preventDefault()` 来取消鼠标事件。

## 接口对象

TouchEvent 对象：

- `touches`：触发事件时屏幕上的触点个数
- `targetTouches`：触发事件时事件元素上的触点个数
- `changedTouches`：触发事件发生改变的触点个数
- `target`：事件元素
- `stopPropagation`：阻止事件冒泡
- `preventDefault`：阻止默认行为

Touch 对象：

- `clientX/clientY`：触点在视口上的位置
- `pageX/pageY`：触点在页面上的位置
- `screenX/screenY`：触点在屏幕上的位置

Touch 对象表示在触控设备上的触摸点。通常是指手指或者触控笔在触屏设备或者触摸板上的操作。

以下属性描述了用户的触控行为（均为只读属性）：

| 属性          | 说明                                                                                                                               |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| identifier    | Touch 对象的唯一标识符，一个完整的触控过程（手指在触控面上划过没有离开）标识符不会改变。可通过此属性判断跟踪是否是同一次触摸过程。 |
| screenX       | 触控点相对于屏幕左边沿的 X 坐标。                                                                                                  |
| screenY       | 触控点相对于屏幕上边沿的 Y 坐标。                                                                                                  |
| clientX       | 触控点相对于可视区左边沿的 X 坐标，不包括任何滚动偏移。                                                                            |
| clientY       | 触控点相对于可视区左边沿的 Y 坐标，不包括任何滚动偏移。                                                                            |
| pageX         | 触控点相对于页面文档左边沿的 X 坐标。                                                                                              |
| pageY         | 触控点相对于页面文档上边沿的 Y 坐标。                                                                                              |
| radiusX       | 能够包围用户和触摸平面的接触面的最小椭圆的水平轴（X 轴）半径。这个值的单位和 screenX 相同。                                        |
| radiusY       | 能够包围用户和触摸平面的接触面的最小椭圆的垂直轴（Y 轴）半径。这个值的单位和  screenY 相同                                         |
| rotationAngle | 由 radiusX 和 radiusY 描述的正方向椭圆，需要通过顺时针旋转这个角度值，才能最精准地覆盖住用户和触控面的接触面。                     |
| force         | 手指挤压触控平面的压力大小，取值范围 0.0 到 1.0 的浮点数（没有压力到最大压力）                                                     |

## 应用实例

### 手势事件

移动端手势事件（多指事件）

```js
(function(w) {
  function gesture(node, callback) {
    // 手势开始
    node.addEventListener('touchstart', function(event) {
      // 当触摸元素时，判断屏幕上触摸屏幕的手指个数
      if (event.touches.length >= 2) {
        // 标记已经触发了手势开始
        node.isGestureStart = true;
        // 计算两个触点的初始距离
        this.startDistance = calcDistance(event.touches[0], event.touches[1]);
        // 计算两个触点的初始角度
        this.startDegree = calcDegree(event.touches[0], event.touches[1]);
        // 调用回调函数
        if (callback && typeof callback['start'] === 'function') {
          callback['start']();
        }
      }
    });

    // 手势移动
    node.addEventListener('touchmove', function(event) {
      if (event.touches.length >= 2) {
        // 计算当前两个触点的距离
        const currentDistance = calcDistance(event.touches[0], event.touches[1])
        // 计算当前两个触点的距离
        const currentDegree = calcDegree(event.touches[0], event.touches[1])
        // 计算当前两个触点的距离和两个触点的初始距离比例
        event.scale = currentDistance / this.startDistance
        // 计算两个触点，夹角的变化
        event.rotation = currentDistance - this.startDegree
        // 调用回调函数
        if (callback && typeof(callback['change']) === 'function') {
          callback['change'](event)
        }
      }
    })

    // 手势结束
    // 触发过手势开始并且有触摸结束的时候判断屏幕上手指数量 < 2
    node.addEventListener('touchend' function(event) {
      if (node.isGestureStart && event.touches.length < 2) {
        // 重置标记
        node.isGestureStart = false;
        // 调用回调函数
        if (callback && typeof(callback['end']) === 'function') {
          callback['end']
        }
      }
    })


    function calcDistance(touch1, touch2) {
      // 计算两个直角边的长度
      // 水平方向的距离
      const x = touch2.clientX - touch1.clientX;
      // 垂直方向的距离
      const y = touch2.clientY - touch2.clientY;
      // 利用勾股定力，计算两个触点的距离（斜边的长度）
      const z = Math.sqrt(x * x + y * y);

      return z;
    }

    function calcDegree(touch1, touch2) {
      // 计算两个触点的距离，两个直角边长度
      const x = touch2.clientX - touch1.clientX;
      const y = touch2.clientY - touch1.clientY;
      // 根据两个直角边比例 tan，计算角度
      const angle = Math.atan2(y, x); // 是个弧度
      // 根据弧度计算角度
      const deg = (angle / Math.PI) * 180;

      return deg;
    }
  }

  w.gesture = gesture;
})();
```

### 移动端延迟问题

移动端 `click` 事件有 300ms 延迟问题，`touch` 事件没有。

目前最广泛使用的解决移动端 `click` 延迟问题的方案是使用 `fastclick`。

fastclick 的思路就是利用 touch 来模拟 tap（触碰），如果认为是一次有效的 tap，则在 touchend 时立即模拟一个 click 事件，分发到事件源（相当于主动触发一次 `click` 事件），同时阻止掉浏览器 300ms 后产生的 `click` 事件。

---

**参考资料：**

- [📖 MDN：TouchEvent](https://developer.mozilla.org/zh-CN/docs/Web/API/TouchEvent)
- [📖 W3C：TouchEvent](https://www.w3.org/TR/touch-events/#touchevent-interface)
