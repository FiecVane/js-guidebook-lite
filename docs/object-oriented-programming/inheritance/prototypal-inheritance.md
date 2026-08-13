---
title: 原型式继承
outline: [2, 3]
---

# 原型式继承

原型式继承是借助原型基于已有的对象创建新对象，同时还不必因此创建自定义类型。

🌰 **示例：**

```js
function Person(friendship) {
  function Creator() {}
  Creator.prototype = friendship;
  return new Creator();
}
```

在函数内部，先创建 **临时性的构造函数**，然后将传入的对象作为这个 **构造函数的原型**，最后返回这个临时构造函数的一个实例。从本质上，该函数对传入的对象执行了一次 **浅拷贝**。

```js
// 作为另一个对象的基础
const friendship = {
  name: 'unamed',
  friends: ['Amy', 'Ben', 'Tom'],
};

// 返回新实例对象，该实例对象原型为 Person
let uzi = Person(friendship);
uzi.name = 'Uzi';
uzi.friends.push('Peter');

let kat = Person(friendship);
kat.name = 'Kat';
kat.friends.push('Sid');

// 原型中的基本类型属性和引用类型属性被两个实例对象共享
console.log(uzi.friends);
// ["Amy", "Ben", "Tom", "Peter", "Sid"]
```

原型式继承需要有一个对象可以作为另一个对象的基础。如果有这么一个对象的话，可以把它传递给实例生成函数，然后再根据具体需求对得到的对象加以修改即可。

ECMAScript 5 通过新增  `Object.create()` 方法规范化了原型式继承。这个方法接收两个参数：一个用作新对象原型的对象和一个为新对象定义额外属性的对象（可选）。

**实际上就是将 Person 构造函数替换成`Object.create`**

```js
const friendship = {
  name: 'unamed',
  friends: ['Amy', 'Ben', 'Tom'],
};

let uzi = Object.create(friendship);
uzi.name = 'Uzi';
uzi.friends.push('Peter');

let kat = Object.create(friendship);
kat.name = 'Kat';
kat.friends.push('Sid');

console.log(uzi.__proto__.friends);
// ["Amy", "Ben", "Tom", "Peter", "Sid"]

console.log(kat.__proto__.friends);
// ["Amy", "Ben", "Tom", "Peter", "Sid"]
```

## 模式缺陷

引用类型值的属性始终都会共享相应的值，多个实例对象对引用类型的操作会被篡改。
