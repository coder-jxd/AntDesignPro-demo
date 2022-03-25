import { request } from 'umi';

// 获取表格数据
export async function getTableData(params) {
  return request('/api/tabledata', { params });
}
