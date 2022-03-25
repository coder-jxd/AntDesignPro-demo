import { request } from 'umi';

// 柱状图数据
export async function getColumnData(params) {
  return request('/api/column', { params });
}
