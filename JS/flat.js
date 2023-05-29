const arr = [1, 2, [3], 4]

const flatSingleArray = (arr) => {
  const res = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(children => res.push(children))
    } else {
      res.push(item)
    }
  })

  return res;
}

console.log(flatArray(arr))