const arr1 = [1, 3, 5, 7, 9];
const arr2 = [2, 4, 6, 8];

function twoUpperArray(arr1, arr2) {
  const res = [];
  const len1 = arr1.length;
  const len2 = arr2.length;

  let left = 0;
  let right = 0;

  while (res.length !== len1 + len2) {
    if (arr1[left] < arr2[right]) {
      res.push(arr1[left]);
      left++;
    } else {
      res.push(arr2[right]);
      right++;
    }
  }

  return res;
}

console.log(twoUpperArray(arr1, arr2));
