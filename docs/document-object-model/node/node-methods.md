---
title: Node 方法
outline: [2, 3]
---

# Node 方法

由于关系指针都是只读的，因此 DOM 提供了一些操作节点的方法。

## 增删改型方法

### insertBefore

在当前节点下增加一个子节点 Node，并使该子节点位于参考节点的前面。

📖 **语法：**

```js
Node.insertBefore(node);
```

🌰 **示例：**

```js
const foo = document.getElementById('foo');
const bar = document.getElementId('bar');

foo.insertBefore(bar);
```

### appendChild

将指定的 childNode 参数作为最后一个子节点添加到当前节点。
如果参数引用了 DOM 树上的现有节点，则节点将从当前位置分离，并附加到新位置。

📖 **语法：**

```js
Node.appendChild(node);
```

参数 `node` 为被插入的 DOM 节点引用。

🌰 **示例：**

```js
const foo = document.getElementById('foo');
const bar = document.getElementId('bar');

foo.appendChild(bar);
```

- 如果被插入的节点已经存在于当前文档的文档树中，则那个节点会首先从原先的位置移除，然后再插入到新的位置
- 如果你需要保留这个子节点在原先位置的显示，则你需要先用 [`Node.cloneNode`](clone-node) 方法复制出一个节点的副本，然后在插入到新位置
- 这个方法只能将某个子节点插入到同一个文档的其他位置,如果你想跨文档插入，你需要先调用 `document.importNode` 方法

### replaceChild

替换当前节点的某个指定子节点为指定的节点。

📖 **语法：**

```js
Node.replaceChild(newChild, oldChild);
```

🌰 **示例：**

```html
<div id="foo">
  <div class="bar"></div>
</div>
```

创建一个 `span` 元素并将其替代 `foo` 的第一个元素节点。

```js
const span = document.createElement('span');
const foo = document.getElementById('foo');
const bar = foo.firstElementChild;

foo.replace(bar, span);
```

运行后：

```html
<div id="foo">
  <span></span>
</div>
```

### removeChild

从 DOM 中删除一个子节点，返回删除的节点。

📖 **语法：**

```js
Node.removeChild(node);
```

🌰 **示例：**

```html
<div id="foo">
  <div id="bar"></div>
</div>
```

```js
const foo = document.getElementById('foo');
const bar = document.getElementById('bar');

foo.removeChild(bar);
```

运行后：

```js
<div id="foo"></div>
```

### cloneNode()

克隆节点到当前节点的子节点列表（及其属性和后代节点）。

📖 **语法：**

```js
Node.cloneNode(deep);
```

参数 `deep` 为 Boolean 类型，表示是否采用深度克隆，如果是 `true`，则该节点的所有后代节点也会被克隆，如果为 `false`，则只克隆该节点本身。

🌰 **示例：**

```html
<div id="foo">
  <div></div>
  <div></div>
</div>
```

```js
const foo = document.getElementById('foo');

const backup = foo.cloneNode();

foo.appendChild(backup);
```

运行后：

```html
<div id="foo">
  <div></div>
  <div></div>
  <!-- 克隆后插入到子节点列表最后 -->
  <div id="foo"></div>
</div>
```

- 克隆一个元素节点会拷贝它所有属性及属性值，当然也就包括了属性上绑定的事件，但不会绑定那些使用 `addEventListener()` 方法或者 `node.onClick = fn` 这种 JavaScrept 动态绑定的事件。
- 在使用 `Node.appendChild()` 或类似的方法将拷贝的节点添加到文档中之前，那个拷贝节点并不属于当前文档树的一部分，也就是说，它没有父节点。
- 如果 `deep` 参数设为 `false`，则不克隆它的任何子节点，该节点所包含的所有文本也不会被克隆，因为文本本身也是一个或多个 `Text` 节点。
- 如果 `deep` 参数设为 `true`，则会拷贝整棵 DOM 子树（包括那些可能存在的 `Text` 子节点）。对于空节点（例如 `<img>` 或 `<input>` 元素），则 `deep` 参数无论是 `true` 还是 `false` ，都没有关系，但是仍然需要为它指定一个值。
- 为了防止一个文档中出现两个 ID 重复的元素，使用 `cloneNode()` 方法克隆的节点在需要时应该指定另一个与原 ID 值不同的 ID。
- 如果原始节点设置了 ID，并且克隆节点会被插入到相同的文档中，那么应该更新克隆节点的 ID 以保证唯一性。`name` 属性可能也需要进行修改，取决于你是否希望有相同名称的节点存在于文档中。

## 判定型方法

### hasChildNodes

判断当前节点是否含有子节点

📖 **语法：**

```js
Node.hasChildNodes();
```

🌰 **示例：**

```html
<div id="foo">
  <div id="bar"></div>
</div>

<script type="text/javascript">
  const foo = document.getElementById('foo');
  const bar = document.getElementById('bar');

  console.log(foo.hasChildNodes);
  // true
  console.log(bar.hasChildNodes);
  // false
</script>
```

### isEqualNode

判断两个节点是否相等。

当两个节点的类型相同，定义特征（defining characteristics）相同（对元素来说，即 id，孩子节点的数量等等），属性一致等，这两个节点就是相等的。一些具体的数据指出：多数时候的比较是根据节点的类型来的。

📖 **语法：**

```js
Node.isEqualNode(node);
```

🌰 **示例：**

```html
<ul class="list">
  <li>Hello world!</li>
  <li>I am the champion!</li>
  <li>Hello world!</li>
</ul>
```

```js
const items = document.getElementsByClassName('list')[0].children;

consolg.log(items[0].isEqualNode(items[1]));
// false
consolg.log(items[0].isEqualNode(items[2]));
// true
```

### compareDocumentPosition

比较当前节点与任意文档中的另一节点的位置关系

📖 **语法：**

```js
Node.compareDocumentPosition(node);
```

🌰 **示例：**

```js
var head = document.getElementsByTagName('head').item(0);
if (head.compareDocumentPosition(document.body) & Node.DOCUMENT_POSITION_FOLLOWING) {
  console.log('well-formed document');
} else {
  console.log('<head> is not before <body>');
}
```

### normalize

规范化当前节点及其后代节点

在一个规范化后的 DOM 树中，不存在一个空的文本节点，或者两个相邻的文本节点。

📖 **语法：**

```js
Node.normalize();
```

🌰 **示例：**

```js
const wrapper = document.createElement('div');

wrapper.appendChild(document.createTextNode('Part 1'));
wrapper.appendChild(document.createTextNode('Part 2'));

// 规范花前：wrapper.childNodes.length === 2
// wrapper.childNodes[0].textContent === 'Part 1'
// wrapper.childNodes[0].textContent === 'Part 2'

wrapper.normalize();
// 规范化后：wrapper.childNodes.length === 1
// wrapper.childNodes[0].textContent === 'Part 1 Part 2'
```

## ChildNode 方法

ChildNode 继承于 Node，但是有其自身的一些方法。

### ChildNode.remove

从文档中移除当前节点

📖 **语法：**

```js
ChildNode.remove();
```

🌰 **示例：**

```html
<ul class="list">
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
</ul>
```

```js
const item1 = document.querySelector('.item1');
const item2 = document.querySelector('.item2');

item1.remove();
item2.remove();
```

运行后：

```html
<ul class="list">
  <li class="item3"></li>
</ul>
```

### ChildNode.before

在其父节点的子节点列表中插入一些 Node 或 DOMString 对象。插入位置为 ChildNode 之前。DOMString 对象会被以 Text 的形式插入。

📖 **语法：**

```js
ChildNode.before();
```

🌰 **示例：**

```html
<ul class="list">
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
</ul>
```

```js
const item1 = document.querySelector('.item1');
const li = document.createElement('li');
li.innerHTML = 'Hello world!';

item1.before(li);
```

运行后：

```html
<ul class="list">
  <li>Hello world!</li>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
</ul>
```

### ChildNode.after

插入节点到当前节点后面。

在其父节点的子节点列表中插入一些 Node 或 DOMString 对象。插入位置为 ChildNode 之后。DOMString 对象会被以 Text 的形式插入。

📖 **语法：**

```js
ChildNode.after();
```

🌰 **示例：**

```html
<ul class="list">
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
</ul>
```

```js
const item1 = document.querySelector('.item1');
const li = document.createElement('li');
li.innerHTML = 'Hello world!';

item1.after(li);
```

运行后：

```html
<ul class="list">
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li>Hello world!</li>
</ul>
```

### ChildNode.replaceWith

替换当前节点为另一节点。

📖 **语法：**

```js
ChildNode.replaceWith(node);
```

🌰 **示例：**

```js
const parent = document.createElement('div');
const child = document.createElment('p');

parent.appendChild(child);
const span = document.createElement('span');

child.replaceWith(span);

console.log(parent.outerHTML);
// '<div><span></span></div>'
```
