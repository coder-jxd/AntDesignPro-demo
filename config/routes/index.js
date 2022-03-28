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
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: '二级管理页',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
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
