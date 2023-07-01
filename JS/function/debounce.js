/**
 * 函数防抖
 */

function debounce (fn, duration = 500) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, duration);
  }
}