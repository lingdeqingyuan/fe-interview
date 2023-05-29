Function.prototype.myCall = function (ctx, ...args) {
  const fn = Symbol();
  ctx[fn] = this;
  const res = ctx[fn](...args);
  delete ctx[fn];
  return res;
};

const testObj = {
  name: 'lyj'
}

function test (arg,arg2) {
  console.log(this.name,arg + 1,arg2 + 2);
}

test.myCall(testObj,2,3);