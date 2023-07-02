/**
 * 如var obj = {a:{b:{c:1}}};

find(obj,'a.b.c') //1

find(obj,'a.d.c') //undefined
 */

var obj = { a: { b: { c: 1 } } };

function find(obj, paramStr) {
  if (!paramStr) {
    return obj;
  }

  const paramStrList = paramStr.split(".");

  return paramStrList.reduce((prev, accr) => {
    if (!prev) {
      return undefined
    }
    return prev[accr]
  }, obj);
}

console.log(find(obj, "a.b"));
