// dva 异步操作
import { useEffect } from 'react';
import { connect } from 'umi';

import { Table } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

const DvaData = ({ dvaAsync: { dataSource, pagination }, loading, dispatch }) => {
  const statusMap = {
    all: '全部',
    close: '关闭',
    running: '运行中',
    online: '已上线',
    error: '异常',
  };
  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      width: 100,
    },
    {
      title: '标题',
      dataIndex: 'title',
      tip: '标题',
      width: 200,
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      render: (_, { status }) => statusMap[status],
    },
    {
      title: '内容',
      dataIndex: 'content',
      ellipsis: true,
      width: 400,
    },
  ];
  useEffect(() => {
    dispatch({ type: 'dvaAsync/queryData' });
  }, []);

  return (
    <PageContainer title={false} ghost>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={dataSource}
        pagination={pagination}
        scroll={{ x: 800 }}
        loading={loading}
      />
    </PageContainer>
  );
};

export default connect(({ dvaAsync, loading }) => ({
  dvaAsync,
  loading: loading.models.dvaAsync,
}))(DvaData);
