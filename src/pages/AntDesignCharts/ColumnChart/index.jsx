// 柱状图
import { useMemo } from 'react';
import { useRequest } from 'umi';

import { Card } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { Column } from '@ant-design/charts';

import { wantArray } from '@/utils/index';
import { getColumnData } from '../service';

const ColumnChart = () => {
    // todo 获取数据
    const { data: chartData, loading: chartLoading } = useRequest(getColumnData, {
        initialData: [],
        formatResult: res => wantArray(res?.data)
    });

    // * 图表配置
    const chartColors = {
        '分类一': '#177D77',
        '分类二': '#43AEA8',
        '分类三': '#81D2CD',
        '分类四': '#C6EDEA'
    };
    const chartConfig = useMemo(() => {
        return {
            appendPadding: [10, 0, 0, 0],
            maxColumnWidth: 30,
            height: 300,
            autoFit: true,
            data: chartData,
            isStack: true,
            xField: 'date',
            xAxis: { tickLine: false },
            yField: 'value',
            seriesField: 'type',
            color: ({ type }) => chartColors[type],
            legend: {
                position: 'top-right',
                marker: { symbol: 'square' },
                custom: true,
                items: [
                    { name: '分类一', marker: { style: { fill: '#177D77' } } },
                    { name: '分类二', marker: { style: { fill: '#43AEA8' } } },
                    { name: '分类三', marker: { style: { fill: '#81D2CD' } } },
                    { name: '分类四', marker: { style: { fill: '#C6EDEA' } } }
                ]
            },
            tooltip: { domStyles: { 'g2-tooltip-marker': { borderRadius: '0' } } },
            slider: {
                start: 0,
                end: 1,
                trendCfg: { isArea: true }
            }
        };
    }, [chartData]);

    return (
        <PageContainer title={false} ghost>
            <Card loading={chartLoading}>
                <Column {...chartConfig} />
            </Card>
        </PageContainer>
    );
};

export default ColumnChart;