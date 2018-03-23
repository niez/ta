// demo 1
// 'use strict';
// var self = this;
// var person = {
//   name: 'Nick',
//   describe1: function () {
//     console.log('Name: ' + this.name);
//     console.log(`is this equal self? ${self === this}`);
//     console.log(`${JSON.stringify(this)}`);
//   },
//   describe2: () => {
//     console.log('Name: ' + this.name);
//     console.log(`is this equal self? ${self === this}`);
//     console.log(`${JSON.stringify(this)}`);
//   }
// };
//
// person.describe1();
// person.describe2();
// var func = person.describe2.bind(person);
// func();


/*
Demo 2
 */
var A = {
 name: 'Nick',
 describe: function () {
   console.log('My name is ' + this.name);
 }
}

var B = {
 name: 'Bill'
}

B.describe = A.describe;
B.describe(); // My name is Bill

/*
Demo 3
 */
function f() {
  console.log('My name is ' + this.name);
}

var A = {
  name: 'Nick',
  describe: f
}

var B = {
  name: 'Bill',
  describe: f
}

A.describe();// My name is Nick
B.describe();// My name is Bill

/*
Demo 4
 */
var A = {
  name: 'Nick',
  describe: function () {
    console.log('My name is ' + this.name);
  }
}
name = 'Bill';
var f = A.describe;
f(); // My name is Bill (result in broser)


/*
Demo 5
 */
var a = {
 p: 'Hello',
 b: {
   m: function() {
     console.log(this.p);
   }
 }
};

(a.b).m() // undefined
// ------------------------------------------------------------

/**
 * 函数实例的call方法，可以指定函数内部this的指向（即函数执行时所在的作用域），然后在所指定的作用域中，调用该函数。
 * @type {Object}
 */
//demo 1
var obj = {};

var f = function () {
  return this;
};

console.log(f() === global) // true
console.log(f.call(obj) === obj) // true
//demo 2
var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

a.call() // 123
a.call(null) // 123
a.call(undefined) // 123
a.call(window) // 123
a.call(obj) // 456
//demo 3 call方法还可以接受多个参数。
function add(a, b) {
  return a + b;
}

add.call(this, 1, 2) // 3

/**
 *  apply方法的作用与call方法类似，也是改变this指向，然后再调用该函数。唯一的区别就是，它接收一个数组作为函数执行时的参数，使用格式如下。
 */
 function f(x, y){
   console.log(x + y);
 }

 f.call(null, 1, 1) // 2
 f.apply(null, [1, 1]) // 2

/**
 *  bind方法用于将函数体内的this绑定到某个对象，然后返回一个新函数。
 */
 var counter = {
   count: 0,
   inc: function () {
     this.count++;
   }
 };

 var func = counter.inc.bind(counter);
 func();
 counter.count // 1
