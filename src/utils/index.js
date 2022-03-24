// 全局工具函数

/**
 * @name 希望获得数组
 * @param {Any} data
 * @return {Array}
 */
export const wantArray = (data) =>
  Object.prototype.toString.call(data) === '[object Array]' ? data : [];
