const { beSortedArr } = require('./test-case');

const bubbleSort = (beSortedArr) => {
    const len = beSortedArr.length - 1;
    for (let i = 0; i < len; i++) {
        let flag = false;
        for (let j = i; j < len - i; j++) {
            if (beSortedArr[j] > beSortedArr[j + 1]) {
                [beSortedArr[j], beSortedArr[j + 1]] = [beSortedArr[j + 1], beSortedArr[j]];
                flag = true;
            }
        }
        if (!flag) {
            return beSortedArr
        }
    }
    return beSortedArr;
}

const result = bubbleSort(beSortedArr);

console.log('sorted result', result);
