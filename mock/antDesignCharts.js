const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
  // 柱状图
  'GET /api/column': async (_, res) => {
    const data = {
      code: 200,
      data: [
        { type: '分类一', date: '2022/1/1', value: 1 },
        { type: '分类一', date: '2022/1/2', value: 2 },
        { type: '分类一', date: '2022/1/3', value: 3 },
        { type: '分类一', date: '2022/1/4', value: 4 },
        { type: '分类一', date: '2022/1/5', value: 5 },
        { type: '分类二', date: '2022/1/1', value: 6 },
        { type: '分类二', date: '2022/1/2', value: 7 },
        { type: '分类二', date: '2022/1/3', value: 8 },
        { type: '分类二', date: '2022/1/4', value: 9 },
        { type: '分类二', date: '2022/1/5', value: 10 },
        { type: '分类三', date: '2022/1/1', value: 11 },
        { type: '分类三', date: '2022/1/2', value: 12 },
        { type: '分类三', date: '2022/1/3', value: 13 },
        { type: '分类三', date: '2022/1/4', value: 14 },
        { type: '分类三', date: '2022/1/5', value: 15 },
        { type: '分类四', date: '2022/1/1', value: 1 },
        { type: '分类四', date: '2022/1/2', value: 2 },
        { type: '分类四', date: '2022/1/3', value: 3 },
        { type: '分类四', date: '2022/1/4', value: 4 },
        { type: '分类四', date: '2022/1/5', value: 5 },
      ],
    };

    await waitTime(1500);
    res.send(data);
  },
};
