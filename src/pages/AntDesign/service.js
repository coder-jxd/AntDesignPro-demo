import { request } from 'umi';

export async function getTableData(params) {
  return request('/api/tabledata', { params });
}
