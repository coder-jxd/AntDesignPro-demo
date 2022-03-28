// 饼图
import { useMemo, useState } from 'react';
import { useRequest } from 'umi';

import { Card, Dropdown, Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Pie } from '@ant-design/plots';

import { wantArray } from '@/utils/index';
import { getPieData } from '../service';

/**
 * 主要功能：
 * 1.展示饼图
 * 2.两个图表的切换
 * 
 * 注意点：
 * 1.默认数据进行占位（业务需求）
 */
const PieChart = () => {
    /* ======================== 公共 ======================== */
    // * 默认数据
    const defaultData = {
        frontend: [
            { type: 'HTML', value: 0 },
            { type: 'CSS', value: 0 },
            { type: 'JavaScript', value: 0 },
            { type: 'TypeScript', value: 0 }
        ],
        framework: [
            { type: 'React.js', value: 0 },
            { type: 'Vue.js', value: 0 },
            { type: 'TypeScript', value: 0 }
        ]
    };
    // todo 请求数据
    const { data: chartData, loading: chartLoading } = useRequest(getPieData, {
        initialData: defaultData,
        formatResult: res => ({ frontend: wantArray(res?.frontend), framework: wantArray(res?.framework) })
    });

    /* ======================== 图表配置 ======================== */
    const [flag, setFlag] = useState('frontend');
    const fedColors = {
        'HTML': '#E8F7FF',
        'CSS': '#C3E7FE',
        'JavaScript': '#9FD4FD',
        'TypeScript': '#7BC0FC'
    };
    const fwColors = ['#9FDB1D', '#00B42A', '#14C9C9', '#3491FA', '#165DFF'];
    const pieConfig = useMemo(() => {
        if (flag === 'frontend') {
            return {
                appendPadding: [10, 0, 10, 0],
                padding: 0,
                height: 300,
                autoFit: true,
                radius: 1,
                innerRadius: 0,
                data: chartData?.frontend || [],
                angleField: 'value',
                colorField: 'type',
                color: ({ type }) => fedColors[type],
                statistic: false,
                label: false,
                legend: {
                    position: 'top-left',
                    layout: 'horizontal',
                    marker: { symbol: 'circle' },
                    flipPage: false
                },
                tooltip: {
                    formatter: e => {
                        return { name: e.type, value: (e.value).toFixed(1) + '%' }
                    }
                },
                interactions: [{ type: 'element-active' }]
            };
        } else {
            return {
                appendPadding: [10, 0, 10, 0],
                padding: 0,
                height: 300,
                autoFit: true,
                radius: 1,
                innerRadius: 0.3,
                data: chartData?.framework || [],
                angleField: 'value',
                colorField: 'type',
                color: fwColors,
                statistic: false,
                label: false,
                legend: {
                    position: 'top-left',
                    layout: 'vertical',
                    marker: { symbol: 'square' },
                    flipPage: false
                },
                tooltip: {
                    formatter: e => {
                        return { name: e.type, value: (e.value).toFixed(1) + '%' }
                    }
                },
                interactions: [{ type: 'element-active' }]
            };
        }
    }, [chartData, flag]);

    /* ======================== 切换菜单 ======================== */
    // * 菜单映射
    const menuMap = {
        frontend: '前端技术',
        framework: '前端框架'
    };
    // * 菜单选中
    const [menuSelectedKeys, setMenuSelectedKeys] = useState(['frontend']);
    // todo 切换图表数据
    const handleChangeData = e => {
        setFlag(e);
        setMenuSelectedKeys([e]);
    };
    // 切换菜单
    const changeMenu = (
        <Menu selectedKeys={menuSelectedKeys}>
            {Object.keys(menuMap).map(key => {
                return (
                    <Menu.Item
                        key={key}
                        onClick={() => { handleChangeData(key) }}
                    >
                        {menuMap[key]}
                    </Menu.Item>
                );
            })}
        </Menu>
    );
    // 切换下拉列表
    const changeDropdown = (
        <Dropdown overlay={changeMenu} trigger={['click']}>
            <SettingOutlined spin style={{ fontSize: 20 }} />
        </Dropdown>
    );

    return (
        <PageContainer title={false} ghost>
            <Card
                title={menuMap[flag]}
                loading={chartLoading}
                extra={changeDropdown}
            >
                <Pie {...pieConfig} />
            </Card>
        </PageContainer>
    );
};

export default PieChart;