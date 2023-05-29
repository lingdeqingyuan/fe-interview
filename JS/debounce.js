/**
 * 防抖 手写一个防抖
 */

debounce()

function debounce(fn, delay = 500) {
  let timer = null;

  return function () {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}
