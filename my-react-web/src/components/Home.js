import React from 'react'
import '../style/content/home.less'

import { Tooltip, Progress, Tabs, DatePicker } from 'antd'
import { ExclamationCircleOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import moment from 'moment';

import { Chart } from '@antv/g2';

import dayjs from 'dayjs'

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;


const dateFormat = 'YYYY-MM-DD';



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
            endDate: '2020-01-02'
        }
    }

    render() {
        const operations = <div className='rightDate'>
            <div className='changeDate' onClick={() => { this.getDate('today') }}>今日</div>
            <div className='changeDate' onClick={() => { this.getDate('week') }}>本周</div>
            <div className='changeDate' onClick={() => { this.getDate('month') }}>本月</div>
            <div className='changeDate' onClick={() => { this.getDate('year') }}>本年</div>
            <RangePicker value={[moment(this.state.startDate, dateFormat), moment(this.state.endDate, dateFormat)]} onChange={(date,dateString)=>this.changeDate(date,dateString)} />
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
                        <Tabs defaultActiveKey="1" onChange={callback} className='body-tab' tabBarExtraContent={operations}>
                            <TabPane tab="销售额" key="1">
                                Content of Tab Pane 1
    </TabPane>
                            <TabPane tab="访问量" key="2">
                                Content of Tab Pane 2
    </TabPane>
                        </Tabs>

                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.drawChart()
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
    }

    getDate = (type)  => {
        
        if(type == 'today'){
            this.setState({
                startDate:dayjs().format('YYYY-MM-DD'),
                endDate:dayjs().format('YYYY-MM-DD')
            })
        }else if(type == 'week'){
            let dayLeft = 7 - dayjs().day()

            if(dayjs().day() == 0) dayLeft = 0
            
            this.setState({
                startDate:dayjs().subtract(7-dayjs().day(), 'day').format('YYYY-MM-DD'),
                endDate:dayjs().add(dayLeft, 'day').format('YYYY-MM-DD')
            })

        }else if(type == 'month'){
            this.setState({
                startDate:dayjs().startOf('month').format('YYYY-MM-DD'),
                endDate:dayjs().endOf('month').format('YYYY-MM-DD')
            })
        }else{
            this.setState({
                startDate:dayjs().startOf('year').format('YYYY-MM-DD'),
                endDate:dayjs().endOf('year').format('YYYY-MM-DD')
            })
        }
    }

    changeDate = (date,dateString) => {
        this.setState({
            startDate:dateString[0],
            endDate:dateString[1]
        })
    }
}

function callback(key) {
    console.log(key);
}