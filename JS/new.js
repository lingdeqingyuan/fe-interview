const myNew = (fn, ...args) => {
  // 创建一个原型指向构造函数原型的对象
  const obj = Object.create(fn.prototype)
  // 执行构造函数
  fn.call(obj, ...args);
  // 返回对象
  return obj
}

function Person (name, age) {
  this.name = name;
  this.age = age;
}

console.log(myNew(Person, 'lyj', 27))