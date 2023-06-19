const { beSortedArr } = require('./test-case');

const selectSort = (beSortedArr) => {
    const len = beSortedArr.length;
    let minIndex;
    for (let i = 0; i < len; i++) {
        minIndex = i;
        for (let j = i; j < len; j++) {
            if (beSortedArr[j] < beSortedArr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [beSortedArr[minIndex], beSortedArr[i]] = [beSortedArr[i], beSortedArr[minIndex]];
        }
    }

    return beSortedArr
}

const result = selectSort(beSortedArr);

console.log('sorted result', result);
