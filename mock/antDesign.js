const waitTime = (time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default {
  // 表格数据
  'GET /api/tabledata': async (_, res) => {
    const data = {
      current: 1,
      data: [
        {
          id: 1,
          title: '标题1',
          status: 'all',
          content: '去年今日此门中，人面桃花相映红。',
        },
        {
          id: 2,
          title: '标题2',
          status: 'close',
          content: '春风未动枝先觉，夜月初来树欲空。',
        },
        {
          id: 3,
          title: '标题3',
          status: 'running',
          content: '花艳参差，香雾飘零。',
        },
        {
          id: 4,
          title: '标题4',
          status: 'online',
          content: '城中桃李愁风雨，春在溪头荠菜花。',
        },
        {
          id: 5,
          title: '标题5',
          status: 'error',
          content: '东风不与周郎便，铜雀春深锁二乔。',
        },
      ],
    };

    await waitTime(1000);
    res.send(data);
  },
};
