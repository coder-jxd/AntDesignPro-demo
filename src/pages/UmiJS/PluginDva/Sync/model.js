export default {
  namespace: 'dvaSync',
  state: {
    nickname: '张三岁',
    flag: true,
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // }
  },
};
