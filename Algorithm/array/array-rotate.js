/**
 * 把数组旋转k步
 * [1,2,3,4,5] k = 3 => [3,4,5,1,2]
 */

const rotateArray = (arr, k) => {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }
    const step = Math.abs(k % len);
    for (let i = 0; i < step; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
};

// 第二种方法
const rotateArray2 = (arr, k) => {
    const len = arr.length;
    if (len <= 1) {
        return arr;
    }
    const step = Math.abs(k % len);
    const first = arr.slice(-step);
    const behind = arr.slice(0, len - step);
    return behind.concat(first);
};

console.log(rotateArray2([1, 2, 3, 4, 5, 6, 7, 8], 9));