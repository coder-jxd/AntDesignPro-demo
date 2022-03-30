// 路由配置
export default [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/welcome',
    name: '欢迎',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/umijs',
    name: 'UmiJS',
    icon: 'crown',
    routes: [
      {
        path: '/umijs/plugin-access',
        name: '管理页',
        access: 'canAdmin',
        component: './UmiJS/PluginAccess',
      },
      {
        path: '/umijs/plugin-dva',
        name: 'dva 同步操作',
        component: './UmiJS/PluginDva',
      },
    ],
  },
  {
    path: '/ant-design',
    name: 'Ant Design',
    icon: 'AntDesign',
    routes: [
      {
        path: '/ant-design/protable',
        name: 'ProTable',
        component: './AntDesign/TableList',
      },
    ],
  },
  {
    path: '/ant-design-charts',
    name: 'Ant Design Charts',
    icon: 'AreaChart',
    routes: [
      {
        path: '/ant-design-charts/column',
        name: '柱状图',
        component: './AntDesignCharts/ColumnChart',
      },
      {
        path: '/ant-design-charts/pie',
        name: '饼图',
        component: './AntDesignCharts/PieChart',
      },
      {
        path: '/ant-design-charts/china-map',
        name: '中国地图',
        component: './AntDesignCharts/ChinaMap',
      },
    ],
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
