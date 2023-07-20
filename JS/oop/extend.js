/**
 * js继承
 */

/**
 * 1. 构造函数继承
 * 缺点：无法继承父类的原型
 */

function Parent1 () {
  this.name = 'lyj'
}

function Child1 () {
  Parent1.call(this);
  this.name = 'xy';
}

/**
 * 2. 原型链继承
 * 缺点 多个实例 共用一个父级属性引用
 */

function Parent2 () {
  this.name = 'lyj'
}

function Child2 () {
  this.name = 'xy';
}

Child2.prototype = new Parent2();

