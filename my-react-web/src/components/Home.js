import React from 'react'
import '../style/content/home.less'

import { Tooltip, Progress } from 'antd'
import { ExclamationCircleOutlined, CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';


export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            headerData: [
                { title: '总销售额', num: '￥126,560', type: 'compare', data: ['12%', '11%'], footerData: { text: '日销售额', num: '￥12,423' } },
                { title: '访问量', num: '8,846', type: 'line', data: ['12%', '11%'], footerData: { text: '日访问量', num: '1,234' } },
                { title: '支付比数', num: '6,560', type: 'bar', data: ['12%', '11%'], footerData: { text: '转化率', num: '60%' } },
                { title: '运营活动效果', num: '78%', type: 'progress', data: [78], footerData: { text: ['周同比', '日同比'], num: ['12%', '11%'] } },
            ]
        }
    }

    render() {
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
            </div>
        )
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
                <div className='chart-content'>aa</div>
            )
        } else if (val.type == 'bar') {
            return (
                <div className='chart-content'>bb</div>
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
}