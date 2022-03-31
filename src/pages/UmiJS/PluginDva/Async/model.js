import { getTableData } from '@/pages/AntDesign/service';

export default {
  namespace: 'dvaAsync',
  state: {
    dataSource: [],
    pagination: {},
  },
  effects: {
    *queryData({ payload }, { call, put }) {
      const res = yield call(getTableData, payload);

      yield put({
        type: 'updateState',
        payload: {
          dataSource: res.data,
          pagination: {
            current: res.current,
          },
        },
      });
    },
  },
  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
