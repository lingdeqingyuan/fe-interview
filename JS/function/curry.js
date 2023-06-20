/**
 * 实现函数柯里化：拆分参数
 * curry的本质就是收集参数
 * 递归中判断收集到的参数和函数的形参长度是否相等，长度一致就运算输出结果。
 *
 */

function curry(fn) {
    const argLen = fn.length;
    let args = [];

    function support(...newArgs) {
        args = [...args, ...newArgs];
        if (args.length < argLen) {
            return support
        } else {
            return fn.apply(this, args.slice(0, argLen));
        }
    }

    return support;
}

function add(a, b, c) {
    return a + b + c;
}

const curryAdd = curry(add);
const res = curryAdd(10)(20, 30);
console.log(res);