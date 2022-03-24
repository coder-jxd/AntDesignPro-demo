import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';

import { getTableData } from '../service';

export default () => {
    const columns = [
        {
            title: '序号',
            valueType: 'index',
            width: 100
        },
        {
            title: '标题',
            dataIndex: 'title',
            tip: '标题',
            width: 200
        },
        {
            title: '状态',
            dataIndex: 'status',
            valueEnum: {
                all: { text: '全部', status: 'Default' },
                close: { text: '关闭', status: 'Default' },
                running: { text: '运行中', status: 'Processing' },
                online: { text: '已上线', status: 'Success' },
                error: { text: '异常', status: 'Error' }
            },
            width: 100
        },
        {
            title: '内容',
            dataIndex: 'content',
            ellipsis: true,
            copyable: true,
            hideInSearch: true,
            width: 400
        }
    ];

    return (
        <PageContainer title={false} ghost>
            <ProTable
                rowKey="id"
                columns={columns}
                request={getTableData}
                scroll={{ x: 800 }}
            />
        </PageContainer>
    );
};