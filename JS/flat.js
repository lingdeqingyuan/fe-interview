const arr = [1, 2, [3, [5], [7, [10]]], 4]

const flatArray = (arr) => {
  const res = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      res.push(...flatArray(item))
    } else {
      res.push(item)
    }
  })

  return res;
}

console.log(flatArray(arr))