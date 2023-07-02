/**
 * 手写实现一个Promise.all方法
 */

Promise.myAll = function (promiseList) {
    return new Promise((resolve, reject) => {
        const result = [];
        let count = 0;
        promiseList.forEach((item, index) => {
            Promise.resolve(item).then(res => {
              result[index] = res;
              count++;
              if (count === promiseList.length) {
                resolve(result);
              }
            }).catch(rej => {
                reject(rej);
            })
        })
    })
}