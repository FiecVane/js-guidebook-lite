---
title: 寄生组合式继承
outline: [2, 3]
---

# 寄生组合式继承

**寄生组合式继承**，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。

其背后的基本思路是：**不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型原型的一个副本而已。** 本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。

🌰 **示例：**

```js
function inherit(child, parent) {
  // 创建对象
  let prototype = Object.create(parent.prototype);

  // 增强对象
  prototype.constructor = child;

  // 指定对象
  child.prototype = prototype;
}
```

这个示例中的函数实现了寄生组合式继承的最简单形式。这个函数接收两个参数：**子类型构造函数** 和 **超类型构造函数。**

- 第一步是创建超类型原型的一个副本
- 第二步是为创建的副本添加 `constructor` 属性，从而弥补因重写原型而失去的默认的 `constructor` 属性
- 最后一步，将新创建的对象（即副本）赋值给子类型的原型

```js
function inherit(children, parent) {
  // 创建对象
  let prototype = Object.create(parent.prototype);
  // 增强对象
  prototype.constructor = children;
  // 指定对象
  children.prototype = prototype;
}

function Parent(name) {
  this.name = name;
  this.num = [0, 1, 2];
}

Parent.prototype.sayName = function() {
  alert(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

inherit(Child, Parent);

Child.prototype.sayAge = function() {
  console.log(this.age);
};
```

解决两次调用的方法是使用寄生组合式继承。

寄生组合式继承与组合继承相似，都是通过借用构造函数来继承不可共享的属性，通过原型链的混成形式来继承方法和可共享的属性。只不过把原型继承的形式变成了寄生式继承。

使用寄生组合式继承可以不必为了指定子类型的原型而调用父类型的构造函数，从而寄生式继承只继承了父类型的原型属性，而父类型的实例属性是通过借用构造函数的方式来得到的。

下方中会对寄生继承进行详细说明：

```js
function Parent(name) {
  this.name = name;
  this.num = [0, 1, 2];
}

Parent.prototype.sayName = function() {
  return this.name;
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = Object.create(Parent.prototype);

Child.prototype.constructor = Child;

// The first instance
const boy = new Child('Jothan', 22);

boy.num.push(3);
console.log(boy.num);
// [0, 1, 2, 3]

boy.sayName();
// 'Jothan'

// The second instance
const girl = new Child('Kat', 18);

console.log(girl.num);
// [0, 1, 2]

girl.sayName();
// 'Kat'
```

这个例子的高效率体现在它只调用了一次 Parent 构造函数，并且因此避免了在 `Child.prototype` 上面创建不必要的、多余的属性。与此同时，原型链还保持不变。
