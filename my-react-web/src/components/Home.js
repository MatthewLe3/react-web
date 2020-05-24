import React from 'react'
import '../style/content/home.less'

import { Tooltip, Progress, Tabs, DatePicker } from 'antd'
import { Row, Col } from 'antd';
import { Table } from 'antd';
import { ExclamationCircleOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import moment from 'moment';

import { Chart } from '@antv/g2';

import dayjs from 'dayjs'

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
const { Column } = Table;


const dateFormat = 'YYYY-MM-DD';
const columns = [
    {
        title: '排名',
        dataIndex: 'rate',

    },
    {
        title: '搜索关键词',
        dataIndex: 'keyWords',
        render: (text, record, index) => <a>{text + '-' + index}</a>,
    },
    {
        title: '用户数',
        dataIndex: 'users',
        sorter: {
            compare: (a, b) => a.users - b.users,
            multiple: 3,
        },
    },
    {
        title: '周涨幅',
        dataIndex: 'up',
        sorter: {
            compare: (a, b) => a.up - b.up,
            multiple: 3,
        },
    },
]



export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerData: [
                { title: '总销售额', num: '￥126,560', type: 'compare', data: ['12%', '11%'], footerData: { text: '日销售额', num: '￥12,423' } },
                { title: '访问量', num: '8,846', type: 'line', data: ['12%', '11%'], footerData: { text: '日访问量', num: '1,234' } },
                { title: '支付比数', num: '6,560', type: 'bar', data: ['12%', '11%'], footerData: { text: '转化率', num: '60%' } },
                { title: '运营活动效果', num: '78%', type: 'progress', data: [78], footerData: { text: ['周同比', '日同比'], num: ['12%', '11%'] } },
            ],
            payData: [
                { date: '2020-05-01', num: 275 },
                { date: '2020-05-02', num: 115 },
                { date: '2020-05-03', num: 120 },
                { date: '2020-05-04', num: 350 },
                { date: '2020-05-05', num: 150 },
                { date: '2020-05-06', num: 321 },
                { date: '2020-05-07', num: 132 },
                { date: '2020-05-08', num: 156 },
                { date: '2020-05-09', num: 264 },
                { date: '2020-05-10', num: 136 },
                { date: '2020-05-11', num: 78 },
                { date: '2020-05-12', num: 123 },
                { date: '2020-05-13', num: 311 },
                { date: '2020-05-14', num: 201 },
            ],
            visitedData: [
                { date: '2020-05-01', num: 21 },
                { date: '2020-05-02', num: 32 },
                { date: '2020-05-03', num: 31 },
                { date: '2020-05-04', num: 12 },
                { date: '2020-05-05', num: 23 },
                { date: '2020-05-06', num: 21 },
                { date: '2020-05-07', num: 12 },
                { date: '2020-05-08', num: 43 },
                { date: '2020-05-09', num: 43 },
                { date: '2020-05-10', num: 12 },
                { date: '2020-05-11', num: 11 },
                { date: '2020-05-12', num: 53 },
                { date: '2020-05-13', num: 3 },
                { date: '2020-05-14', num: 13 },
            ],
            startDate: '2020-01-01',
            endDate: '2020-01-02',
            dateType: 'today',
            saleDate: [
                { date: '1月', num: 275 },
                { date: '2月', num: 432 },
                { date: '3月', num: 253 },
                { date: '4月', num: 1235 },
                { date: '5月', num: 753 },
                { date: '6月', num: 324 },
                { date: '7月', num: 263 },
                { date: '8月', num: 563 },
                { date: '9月', num: 931 },
                { date: '10月', num: 293 },
                { date: '11月', num: 126 },
                { date: '12月', num: 742 },
            ],
            rankList: [
                { name: '工专路0号店', num: '321,435' },
                { name: '工专路1号店', num: '321,435' },
                { name: '工专路2号店', num: '321,435' },
                { name: '工专路3号店', num: '321,435' },
                { name: '工专路4号店', num: '321,435' },
                { name: '工专路5号店', num: '321,435' },
                { name: '工专路6号店', num: '321,435' },
            ],

            footerContent: [
                {
                    name: '搜索用户数', num: '12,321', trend: 'top', trendDate: '17.1', data: [
                        { date: '2020-05-01', num: 275 },
                        { date: '2020-05-02', num: 115 },
                        { date: '2020-05-03', num: 120 },
                        { date: '2020-05-04', num: 350 },
                        { date: '2020-05-05', num: 150 },
                        { date: '2020-05-06', num: 321 },
                        { date: '2020-05-07', num: 132 },
                        { date: '2020-05-08', num: 156 },
                        { date: '2020-05-09', num: 150 },
                        { date: '2020-05-10', num: 321 },
                        { date: '2020-05-11', num: 132 },
                        { date: '2020-05-12', num: 156 }
                    ]
                },
                {
                    name: '人均搜索次数', num: '2.7', trend: 'down', trendDate: '26.2', data: [
                        { date: '2020-05-01', num: 275 },
                        { date: '2020-05-02', num: 115 },
                        { date: '2020-05-03', num: 120 },
                        { date: '2020-05-04', num: 12 },
                        { date: '2020-05-05', num: 312 },
                        { date: '2020-05-06', num: 12 },
                        { date: '2020-05-07', num: 42 },
                        { date: '2020-05-08', num: 123 },
                        { date: '2020-05-09', num: 431 },
                        { date: '2020-05-10', num: 43 },
                        { date: '2020-05-11', num: 12 },
                        { date: '2020-05-12', num: 156 }
                    ]
                }
            ],
            tableData: [
                { id: 1, keyWords: '搜索关键词', users: '983', up: '88', rate: 1 },
                { id: 2, keyWords: '搜索关键词', users: '563', up: '12', rate: 2 },
                { id: 3, keyWords: '搜索关键词', users: '453', up: '24', rate: 3 },
                { id: 4, keyWords: '搜索关键词', users: '234', up: '53', rate: 4 },
                { id: 5, keyWords: '搜索关键词', users: '745', up: '132', rate: 5 },
            ],
            pieData: [
                { name: '家用电器', num: 4544 },
                { name: '食用酒水', num: 3321 },
                { name: '个护健康', num: 3113 },
                { name: '服饰箱包', num: 2341 },
                { name: '母婴产品', num: 1231 },
                { name: '其他', num: 1231 },
            ]
        }
    }

    render() {

        const operations = <div className='rightDate'>
            <div className={this.state.dateType == 'today' ? 'changeDate activeDate' : 'changeDate'} onClick={() => { this.getDate('today') }}>今日</div>
            <div className={this.state.dateType == 'week' ? 'changeDate activeDate' : 'changeDate'} onClick={() => { this.getDate('week') }}>本周</div>
            <div className={this.state.dateType == 'month' ? 'changeDate activeDate' : 'changeDate'} onClick={() => { this.getDate('month') }}>本月</div>
            <div className={this.state.dateType == 'year' ? 'changeDate activeDate' : 'changeDate'} onClick={() => { this.getDate('year') }}>本年</div>
            <RangePicker value={[moment(this.state.startDate, dateFormat), moment(this.state.endDate, dateFormat)]} onChange={(date, dateString) => this.changeDate(date, dateString)} />
        </div>;


        return (
            <div>
                <div className='header-content'>
                    {this.state.headerData.map((val, index) => {
                        return (
                            <div key={index} className='content-div'>
                                <div className='content-div-body'>
                                    <div className='content-div-body-header'>
                                        <div className='header-title'>{val.title}</div>
                                        <div className='header-tips'>
                                            <Tooltip placement="top" title={val.title + '信息'}>
                                                <ExclamationCircleOutlined style={{ cursor: 'pointer' }} />
                                            </Tooltip>
                                        </div>
                                    </div>
                                    <div className='content-div-body-num'>
                                        <span>{val.num}</span>
                                    </div>
                                    <div className='content-div-body-chart'>
                                        {this.bodyHtml(val)}
                                    </div>
                                    <div className='content-div-body-footer'>
                                        {this.footerHtml(val)}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='body-content'>
                    <div>
                        <Tabs defaultActiveKey="1" onChange={(key) => this.callback(key)} className='body-tab' tabBarExtraContent={operations}>
                            <TabPane tab="销售额" key="1">
                                {this.dateHtml('销售趋势', '门店销售额排名')}
                            </TabPane>
                            <TabPane tab="访问量" key="2">
                                {this.dateHtml_('访问量趋势', '门店访问量排名')}
                            </TabPane>
                        </Tabs>

                    </div>
                </div>
                <div className='footer-content'>
                    <Row>
                        <Col span={12} push={0}>
                            <div style={{ backgroundColor: '#fff', paddingRight: '12px' }}>
                                <div className='footer-title'>
                                    线上热门搜索
                                </div>
                                <div style={{ padding: '12px 24px' }}>
                                    {this.footerContent()}
                                </div>
                                <div style={{ padding: '12px 24px' }}>
                                    <Table columns={columns} dataSource={this.state.tableData} scroll={{ y: 300 }} rowKey={row => row.id}>
                                    </Table>
                                </div>
                            </div>

                        </Col>
                        <Col span={12} pull={0}>
                            <div style={{ backgroundColor: '#fff', paddingLeft: '12px' }}>
                                <div className='footer-title'>
                                    销售额类别占比
                                </div>
                                <div style={{ padding: '12px 24px' }}>
                                    <h4>销售额</h4>
                                    <div style={{ height: '493px', padding: '20px'}}>
                                        <div id='pieChart' style={{ height: '300px' ,width:'100%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getDate('today')

        setTimeout(() => {
            this.drawChart()
            this.drawFooterChart()
            this.drawPie()
        }, 100);

    }

    bodyHtml = val => {

        if (val.type == 'compare') {
            return (
                <div className='chart-content'>
                    <span>周同比</span>
                    <span style={{ marginLeft: '10px', color: '#000' }}>12%</span>
                    <CaretUpOutlined style={{ color: '#f5222d', marginLeft: '5px' }} />

                    <span style={{ marginLeft: '15px' }}>日同比</span>
                    <span style={{ marginLeft: '10px', color: '#000' }}>11%</span>
                    <CaretDownOutlined style={{ color: '#52c41a', marginLeft: '5px' }} />
                </div>
            )
        } else if (val.type == 'line') {
            return (
                <div id='visitedChart' className='chart-content'></div>
            )
        } else if (val.type == 'bar') {
            return (
                <div id='payChart' className='chart-content'></div>
            )
        } else if (val.type == 'progress') {
            return (
                <Progress className='chart-content' percent={val.data} showInfo={false} />
            )
        }
    }

    footerHtml = val => {
        if (val.type != 'progress') {
            return (
                <div>
                    <span>{val.footerData.text}</span>
                    <span style={{ marginLeft: '10px', color: '#000' }}>{val.footerData.num}</span>
                </div>
            )
        } else {
            return (
                <div>
                    <span>{val.footerData.text[0]}</span>
                    <span style={{ marginLeft: '10px', color: '#000' }}>{val.footerData.num[0]}</span>
                    <CaretUpOutlined style={{ color: '#f5222d', marginLeft: '5px' }} />

                    <span style={{ marginLeft: '15px' }}>{val.footerData.text[1]}</span>
                    <span style={{ marginLeft: '10px', color: '#000' }}>{val.footerData.num[1]}</span>
                    <CaretDownOutlined style={{ color: '#52c41a', marginLeft: '5px' }} />
                </div>
            )
        }
    }

    drawChart = () => {
        const data = this.state.payData
        const visitedData = this.state.visitedData

        // Step 1: 创建 Chart 对象
        const chart = new Chart({
            container: 'payChart', // 指定图表容器 ID
            // width: document.querySelector('#payChart').offsetWidth, // 指定图表宽度
            height: document.querySelector('#payChart').offsetHeight, // 指定图表高度
            padding: [20, 10, 0, 10],
            autoFit: true,
        });

        // Step 2: 载入数据源
        chart.data(data);

        // Step 3: 创建图形语法，绘制柱状图
        chart.axis('num', false)
            .interval()
            .position('date*num')
        // .label('num',{
        //     offset: 10, // 文本距离图形的距离
        //     textStyle: {
        //       fill: '#404040',
        //       fontSize:'122',
        //       fontWeight: 'bold', // 文本粗细
        //       shadowBlur: 5, // 文本阴影模糊
        //       shadowColor: '#fff' // 阴影颜色
        //     },
        //     formatter:function (value) {
        //       return value
        //     }
        // });

        // Step 4: 渲染图表
        chart.render();


        const visitedChart = new Chart({
            container: 'visitedChart', // 指定图表容器 ID
            // width: document.querySelector('#payChart').offsetWidth, // 指定图表宽度
            height: document.querySelector('#visitedChart').offsetHeight, // 指定图表高度
            padding: [20, 10, 0, 10],
            autoFit: true,
        });
        visitedChart.data(visitedData);

        visitedChart
            .line()
            .position('date*num')
            .color('', () => {
                return '#975fe4'
            })
            .shape('smooth');


        visitedChart
            .area()
            .position('date*num')
            .color('', () => {
                return '#975fe4'
            })

        visitedChart.axis('num', false)
        visitedChart.render();


        // 销售量的图
        const saleDate = this.state.saleDate
        const saleChart = new Chart({
            container: 'barChart', // 指定图表容器 ID
            // width: document.querySelector('#payChart').offsetWidth, // 指定图表宽度
            height: document.querySelector('#barChart').offsetHeight, // 指定图表高度
            padding: [20, 30, 30, 30],
            autoFit: true,
        });
        saleChart.data(saleDate);

        saleChart
            .interval()
            .position('date*num')
            .label('num', {
                offset: 10, // 文本距离图形的距离
                textStyle: {
                    fill: '#404040',
                    fontSize: '122',
                    fontWeight: 'bold', // 文本粗细
                    shadowBlur: 5, // 文本阴影模糊
                    shadowColor: '#fff' // 阴影颜色
                },
                formatter: function (value) {
                    return value
                }
            })
            .color('', function () {
                return '#64b0ff'
            });

        saleChart.tooltip({
            // showMarkers: false, // 不展示 tooltip markers
            showCrosshairs: true,
        });
        chart.interaction('active-region'); // 使用 active-region 交互行为

        // saleChart.axis('num', false)
        saleChart.render();



    }

    drawChart2 = () => {
        const shopVisitedDate = this.state.saleDate
        const shopVisitedChart = new Chart({
            container: 'barChart2', // 指定图表容器 ID
            // width: document.querySelector('#payChart').offsetWidth, // 指定图表宽度
            height: document.querySelector('#barChart2').offsetHeight, // 指定图表高度
            padding: [20, 30, 30, 30],
            autoFit: true,
        });
        shopVisitedChart.data(shopVisitedDate);

        shopVisitedChart
            .interval()
            .position('date*num')
            .label('num', {
                offset: 10, // 文本距离图形的距离
                textStyle: {
                    fill: '#404040',
                    fontSize: '122',
                    fontWeight: 'bold', // 文本粗细
                    shadowBlur: 5, // 文本阴影模糊
                    shadowColor: '#fff' // 阴影颜色
                },
                formatter: function (value) {
                    return value
                }
            })
            .color('', function () {
                return '#64b0ff'
            });

        shopVisitedChart.tooltip({
            // showMarkers: false, // 不展示 tooltip markers
            showCrosshairs: true,
        });
        shopVisitedChart.interaction('active-region'); // 使用 active-region 交互行为

        shopVisitedChart.render();
    }

    getDate = (type) => {

        if (type == 'today') {
            this.setState({
                startDate: dayjs().format('YYYY-MM-DD'),
                endDate: dayjs().format('YYYY-MM-DD'),
                dateType: 'today'
            })
        } else if (type == 'week') {
            let dayLeft = 7 - dayjs().day()

            if (dayjs().day() == 0) dayLeft = 0

            this.setState({
                startDate: dayjs().subtract(7 - dayjs().day(), 'day').format('YYYY-MM-DD'),
                endDate: dayjs().add(dayLeft, 'day').format('YYYY-MM-DD'),
                dateType: 'week'
            })

        } else if (type == 'month') {
            this.setState({
                startDate: dayjs().startOf('month').format('YYYY-MM-DD'),
                endDate: dayjs().endOf('month').format('YYYY-MM-DD'),
                dateType: 'month'
            })
        } else {
            this.setState({
                startDate: dayjs().startOf('year').format('YYYY-MM-DD'),
                endDate: dayjs().endOf('year').format('YYYY-MM-DD'),
                dateType: 'year'
            })
        }
    }

    changeDate = (date, dateString) => {
        this.setState({
            startDate: dateString[0],
            endDate: dateString[1]
        })
    }

    dateHtml = (label, tableLabel) => {
        console.log('aa', this.state.rankList)

        let tableList = this.state.rankList.map((val, index) => {
            return (
                <li key={index} style={{ display: 'flex', lineHeight: '35px', height: '35px' }}>
                    <div>
                        <div className={index < 3 ? 'front' : 'unfront'}>
                            <span>{index + 1}</span>
                        </div>
                    </div>
                    <div className='tableName'>{val.name}</div>
                    <div className='tableNum'>{val.num}</div>
                </li>
            )
        })
        return (
            <div>
                <Row>
                    <Col span={18} push={0}>
                        <h4 style={{ padding: '10px 20px 10px 0' }}>{label}</h4>
                        <div id='barChart' style={{ height: '274px', padding: '10px 20px' }}></div>
                    </Col>
                    <Col span={6} pull={0}>
                        <h4 style={{ padding: '10px 20px 10px 0' }}>{tableLabel}</h4>
                        <div>
                            <ul style={{ padding: '0' }}>
                                {tableList}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

    dateHtml_ = (label, tableLabel) => {
        console.log('aa', this.state.rankList)

        let tableList = this.state.rankList.map((val, index) => {
            return (
                <li key={index} style={{ display: 'flex', lineHeight: '35px', height: '35px' }}>
                    <div>
                        <div className={index < 3 ? 'front' : 'unfront'}>
                            <span>{index + 1}</span>
                        </div>
                    </div>
                    <div className='tableName'>{val.name}</div>
                    <div className='tableNum'>{val.num}</div>
                </li>
            )
        })
        return (
            <div>
                <Row>
                    <Col span={18} push={0}>
                        <h4 style={{ padding: '10px 20px 10px 0' }}>{label}</h4>
                        <div id='barChart2' style={{ height: '274px', padding: '10px 20px' }}></div>
                    </Col>
                    <Col span={6} pull={0}>
                        <h4 style={{ padding: '10px 20px 10px 0' }}>{tableLabel}</h4>
                        <div>
                            <ul style={{ padding: '0' }}>
                                {tableList}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

    callback = key => {
        if (key == 2) {
            setTimeout(() => {
                this.drawChart2()
            }, 100);
        }
    }


    footerContent = () => {
        return (
            <div style={{ display: 'flex' }}>
                <div style={{ paddingRight: '24px', flex: 1 }}>
                    <div className='footer-chart-title'>
                        {this.state.footerContent[0].name}
                        <Tooltip placement="top" title={this.state.footerContent[0].name + '信息'}>
                            <ExclamationCircleOutlined style={{ cursor: 'pointer', marginLeft: '10px' }} />
                        </Tooltip>
                    </div>
                    <div>
                        <span className='footer-chart-num'>{this.state.footerContent[0].num}</span>
                        <span style={{ marginLeft: '10px', color: '#8b8c8b' }}>{this.state.footerContent[0].trendDate}</span>
                        <CaretUpOutlined style={{ color: '#f5222d', marginLeft: '5px' }} />
                    </div>
                    <div id='searchChart' style={{ height: '50px' }}></div>
                </div>
                <div style={{ paddingLeft: '24px', flex: 1 }}>
                    <div className='footer-chart-title'>
                        {this.state.footerContent[1].name}
                        <Tooltip placement="top" title={this.state.footerContent[1].name + '信息'}>
                            <ExclamationCircleOutlined style={{ cursor: 'pointer', marginLeft: '10px' }} />
                        </Tooltip>
                    </div>
                    <div>
                        <span className='footer-chart-num'>{this.state.footerContent[1].num}</span>
                        <span style={{ marginLeft: '10px', color: '#8b8c8b' }}>{this.state.footerContent[1].trendDate}</span>
                        <CaretDownOutlined style={{ color: '#f5222d', marginLeft: '5px' }} />
                    </div>
                    <div id='averageChart' style={{ height: '50px' }}></div>
                </div>
            </div>
        )
    }

    drawFooterChart = () => {
        const searchChartData = this.state.footerContent[0].data
        const searchChart = new Chart({
            container: 'searchChart', // 指定图表容器 ID
            // width: document.querySelector('#payChart').offsetWidth, // 指定图表宽度
            height: document.querySelector('#searchChart').offsetHeight, // 指定图表高度
            padding: [20, 10, 0, 10],
            autoFit: true,
        });
        searchChart.data(searchChartData);

        searchChart
            .line()
            .position('date*num')
            .shape('smooth');


        searchChart
            .area()
            .position('date*num')

        searchChart.axis('num', false)
        searchChart.render();

        const averageChartData = this.state.footerContent[1].data
        const averageChart = new Chart({
            container: 'averageChart', // 指定图表容器 ID
            // width: document.querySelector('#payChart').offsetWidth, // 指定图表宽度
            height: document.querySelector('#averageChart').offsetHeight, // 指定图表高度
            padding: [20, 10, 0, 10],
            autoFit: true,
        });
        averageChart.data(averageChartData);

        averageChart
            .line()
            .position('date*num')
            .shape('smooth');


        averageChart
            .area()
            .position('date*num')

        averageChart.axis('num', false)
        averageChart.render();
    }

    drawPie = () => {
        const pieData = this.state.pieData


        let totalData = 0

        this.state.pieData.map(val=>{
            totalData += val.num
        })
        const pieChart = new Chart({
            container: 'pieChart', // 指定图表容器 ID
            // width: document.querySelector('#payChart').offsetWidth, // 指定图表宽度
            height: document.querySelector('#pieChart').offsetHeight, // 指定图表高度
            padding: [100, 10, 0, -210],
            autoFit: true,
        });
        pieChart.data(pieData);

        pieChart.coordinate('theta', {
            radius: 0.75,
            innerRadius: 0.7,
        });

        pieChart
            .annotation()
            .text({
                position: ['50%', '50%'],
                content: '总销售额',
                style: {
                    fontSize: 14,
                    fill: '#8c8c8c',
                    textAlign: 'center',
                },
                offsetY: -10,
            })
            .text({
                position: ['50%', '50%'],
                content: '￥ '+totalData,
                style: {
                    fontSize: 16,
                    fill: '#8c8c8c',
                    textAlign: 'center',
                },
                offsetX: -5,
                offsetY: 20,
            })

        pieChart
            .interval()
            .adjust('stack')
            .position('num')
            .color('name')
            .label('num', (num) => {
                return {
                  content: (data) => {
                    return `${data.name}: ${(num/totalData*100).toFixed(2)}%`;
                  },
                };
              })
            

            pieChart.legend({
                position: 'right'
              });

        pieChart.interaction('element-active');
        pieChart.render();


    }

}

