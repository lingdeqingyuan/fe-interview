/**
 * 获取url参数
 * https://baidu.com?a=1&b=2&c=3
 * {
 *   a: 1,
 *   b: 2,
 *   c: 3
 * }
 */

const getParamValue = (key) => {
  const res = {};

  const searchParams = key.split('?')[1].split('&');

  searchParams.forEach(params => {
    const [key, value] = params.split('=');
    res[key] = value;
  })

  return res;
}

console.log(getParamValue('https://baidu.com?a=1&b=2&c=3'))