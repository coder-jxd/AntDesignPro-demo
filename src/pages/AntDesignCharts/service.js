import { request } from 'umi';

// 柱状图数据
export async function getColumnData(params) {
  return request('/api/column', { params });
}

// 饼图数据
export async function getPieData(params) {
  return request('/api/pie', { params });
}

// 地图数据
export async function getChinaData(params) {
  return request('/api/china', { params });
}
