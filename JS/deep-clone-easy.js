/**
 * 深拷贝 简单版
 */

const deepCloneEasy = (obj) => {
  if (typeof obj !== 'object' || typeof obj === null) {
    return obj;
  }

  let result;

  if (Array.isArray(obj)) {
    result = [];
  } else {
    result = {};
  }

  for (const key in obj) {
    if (Object.hasOwnProperty(key)) {
      result[key] = deepCloneEasy(obj[key]);
    }
  }

  return result;
}