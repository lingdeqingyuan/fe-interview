const arr = [2, 1, 9, 7, 8, 6, 3, 5];

function quickSort(arr) {
  const len = arr.length;

  if (len <= 1) {
    return arr;
  }

  const index = Math.floor(len / 2);
  const middleValue = arr.splice(index, 1)[0];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= middleValue) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), middleValue, ...quickSort(right)];
}

console.log(quickSort(arr));
