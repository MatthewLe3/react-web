import React from 'react'
import '../style/content/basic.less'
import { Table } from 'antd'

export default class Basic extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            basicInfo: [
                { label: '退款申请', infoList: [{ label: '取货单号', content: '1000000' }, { label: '状态', content: '已取货' }, { label: '销售单号', content: '12313' }, { label: '子单号', content: '343134' }] },
                { label: '用户信息', infoList: [{ label: '用户姓名', content: 'tt' }, { label: '联系电话', content: '18100001234' }, { label: '常用快递', content: '顺丰' }, { label: '取货地址', content: '浙江省杭州市' }, { label: '备注', content: '无' }] },
            ],
            tableList: [
                {
                    label: '退货商品', data: [
                        { key: 0, num: 1234561, name: '矿泉水', goods: '123134', price: '2.00', count: 1,total:'2.00' },
                        { key: 1, num: 4123, name: '凉茶', goods: '341', price: '3.00', count: 2,total:'6.00' },
                        { key: 2, num: 12413, name: '薯片', goods: '1345', price: '7.00', count: 4,total:'28.00' },
                        { key: 3, num: 43523, name: '蛋卷', goods: '3542', price: '8.00', count: 3 ,total:'24.00'},
                    ]
                },
                {
                    label: '退货进度', data: [
                        { key: 0, time: '2017-10-01 14:10', progress: '联系客户', status: 'run', peo: '取货员 ID1234', used: '5mins' },
                        { key: 1, time: '2017-10-01 14:05', progress: '取货员出发', status: 'closed', peo: '取货员 ID1234', used: '1h' },
                        { key: 2, time: '2017-10-01 13:05', progress: '取货员接单', status: 'closed', peo: '取货员 ID1234', used: '5mins' },
                        { key: 3, time: '2017-10-01 13:00', progress: '申请审批通过', status: 'run', peo: '系统', used: '1h' },
                        { key: 4, time: '2017-10-01 12:00', progress: '发起退货申请', status: 'closed', peo: '用户', used: '5mins' },
                    ]
                },
            ]
        }
    }

    render() {
        const goodsColumns = [
            {
                title: '商品编号',
                dataIndex: 'num',
                key: 'num',
                render: text => <a>{text}</a>,
            },
            {
                title: '商品名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <span>{text}</span>,
            },
            {
                title: '商品条码',
                dataIndex: 'goods',
                key: 'goods',
                render: text => <span>{text}</span>
            },
            {
                title: '单价',
                dataIndex: 'price',
                key: 'price',
                render: text => <span>{text}</span>,
            },
            {
                title: '数量（件）',
                dataIndex: 'count',
                key: 'count',
                render: text => <span>{text}</span>,
            },
            {
                title: '金额',
                dataIndex: 'total',
                key: 'total',
                render: text => <span>{text}</span>,
            },
        ]

        const progressColumns = [
            {
                title: '时间',
                dataIndex: 'time',
                key: 'time',
                render: text => <span>{text}</span>,
            },
            {
                title: '当前进度',
                dataIndex: 'progress',
                key: 'progress',
                render: text => <span>{text}</span>,
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render: text => {
                    if (text == 'closed') {
                        return (
                            <div>
                                <span className='table-list-status' style={{ backgroundColor: '#d9d9d9' }}></span>
                                <span>{'完成'}</span>
                            </div>
                        )
                    } else {
                        return (
                            <div>
                                <span className='table-list-status' style={{ backgroundColor: '#1890ff' }}></span>
                                <span>{'运行中'}</span>
                            </div>
                        )
                    }
                },
            },
            {
                title: '操作员ID',
                dataIndex: 'peo',
                key: 'peo',
                render: text => <span>{text}</span>,
            },
            {
                title: '耗时',
                dataIndex: 'used',
                key: 'used',
                render: text => <span>{text}</span>,
            }
        ]

        return (
            <div style={{ padding: '24px', backgroundColor: '#fff' }}>
                {this.state.basicInfo.map((val, index) => {
                    return (
                        <div key={index} style={{ borderBottom: '1px solid #f0f0f0', marginBottom: '24px' }}>
                            <div className='basic-label'>{val.label}</div>
                            <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                                {val.infoList.map((value, valIndex) => {
                                    return (
                                        <div key={valIndex} style={{ width: '33.333%', display: 'flex', paddingBottom: '16px' }}>
                                            <div className='basic-info-label'>{value.label}:</div>
                                            <div>{value.content}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
                <div style={{ borderBottom: '1px solid #f0f0f0', marginBottom: '24px' }}>
                    <div className='basic-label'>{this.state.tableList[0].label}</div>
                    <Table columns={goodsColumns} dataSource={this.state.tableList[0].data} rowKey={row => row.key} pagination={false} />
                </div>
                <div style={{ borderBottom: '1px solid #f0f0f0', marginBottom: '24px' }}>
                    <div className='basic-label'>{this.state.tableList[1].label}</div>
                    <Table columns={progressColumns} dataSource={this.state.tableList[1].data} rowKey={row => row.key} pagination={false} />
                </div>
            </div>
        )
    }
}