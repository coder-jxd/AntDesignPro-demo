// 管理页
import { useIntl } from 'umi';

import { Card, Typography, Alert } from 'antd';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const Admin = () => {
    const intl = useIntl();

    return (
        <PageHeaderWrapper
            content={intl.formatMessage({
                id: 'pages.admin.subPage.title',
                defaultMessage: 'This page can only be viewed by admin',
            })}
        >
            <Card>
                <Alert
                    message={intl.formatMessage({
                        id: 'pages.welcome.alertMessage',
                        defaultMessage: 'Faster and stronger heavy-duty components have been released.',
                    })}
                    type="success"
                    showIcon
                    banner
                    style={{ margin: -12, marginBottom: 48 }}
                />
                <Typography.Title
                    level={2}
                    style={{ textAlign: 'center' }}
                >
                    <SmileTwoTone />
                    <span> Ant Design Pro </span>
                    <HeartTwoTone twoToneColor="#eb2f96" />
                    <span> You</span>
                </Typography.Title>
            </Card>
        </PageHeaderWrapper>
    );
};

export default Admin;