// 中国地图
import { useRequest } from 'umi';

import { Card, message } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import { ChoroplethMap } from '@ant-design/maps';

import { wantArray } from '@/utils/index';
import { getChinaData } from '../service';

const ChinaMap = () => {
    // todo 获取数据
    const { data: chartData, loading: chartLoading } = useRequest(getChinaData, {
        initialData: [],
        formatResult: res => wantArray(res?.data)
    });
    // * 图表配置
    // 中国地图：https://charts.ant.design/zh/examples/map-choropleth/administrative#china-map
    const chartConfig = {
        autoFit: true,
        map: {
            type: 'mapbox',
            style: 'blank',
            pitch: 0
        },
        // 行政地理数据地址
        source: {
            // 业务数据 required
            data: chartData,
            // 地理元数据关联 required
            joinBy: {
                // 业务元数据地理字段 required
                sourceField: 'code',
                // 地理数据字段
                geoField: 'adcode'
            }
        },
        // 行政级别及范围配置
        viewLevel: {
            // 行政级别 'world'｜'country'｜'province'｜'city'｜'district' required
            level: 'country',
            // 行政代码/行政名称 required
            adcode: 100000
        },
        // 元素颜色
        color: {
            // 元素颜色值映射关联字段
            field: 'value',
            // 元素颜色值映射值
            value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
            /**
             * 关联字段的映射 scale 类型，有以下 scale 类型：
             * linear：线性
             * power：指数
             * log：对数
             * quantile：等分位
             * quantize：等间距
             * cat：枚举
             */
            scale: { type: 'quantile' }
        },
        // 区域样式
        style: {
            opacity: 1,
            // 边线描边颜色
            stroke: '#fff',
            lineOpacity: 1,
            lineWidth: 0.6
        },
        // 区域交互反馈效果
        state: {
            // 标签 mousehover 高亮效果
            active: {
                stroke: '#8D4EDA',
                lineWidth: 1
            },
            // 元素 mouseclick 选中高亮效果
            select: {
                fill: '#FDC2DB',
                stroke: '#F754A8'
            }
        },
        // 是否显示中国国界线
        chinaBorder: false,
        // 地图数据标签配置
        label: {
            visible: true,
            field: 'name',
            style: {
                fill: '#000',
                opacity: 1,
                fontSize: 10,
                stroke: '#fff',
                strokeWidth: 1.5,
                textAllowOverlap: false,
                padding: [5, 5]
            }
        },
        // 数据悬浮提示组件配置
        tooltip: {
            items: ['name', 'adcode', 'value'],
        },
        // 地图图例组件配置
        legend: {
            position: 'bottomleft',
        },
        // 地图放大缩小控件
        zoom: {
            position: 'bottomright',
        },
        onReady: plot => {
            plot.on('click', e => {
                message.info(`x：${e.point.x}，y：${e.point.y}`);
            })
        }
    };

    return (
        <PageContainer title={false} ghost>
            <Card loading={chartLoading} bodyStyle={{ padding: 0, height: 600 }}>
                <ChoroplethMap {...chartConfig} />
            </Card>
        </PageContainer>
    );
};

export default ChinaMap;