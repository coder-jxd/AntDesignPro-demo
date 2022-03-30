// dva 同步操作
import { connect } from 'umi';

import { Alert, Button } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';

const DvaData = ({ dvaSync, dispatch }) => {
    const { nickname, flag } = dvaSync;
    const changeFlag = () => {
        dispatch({ type: 'dvaSync/save', payload: { flag: !flag } });
    };

    return (
        <PageContainer title={false} ghost>
            <Alert
                message={`hello ${nickname} ! ${flag ? '💡' : '💸'}`}
                action={<Button onClick={changeFlag}>{flag ? '💸' : '💡'}</Button>}
                showIcon
            />
        </PageContainer>
    );
};

export default connect(
    ({ dvaSync }) => ({ dvaSync })
)(DvaData);