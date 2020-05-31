import React from 'react'
import { Table, Input, Select, Button} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../style/content/table-list.less'
const { Option } = Select;
export default class TableList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tableDate: [
                { key: 0, name: 'TradeCode 5888', descript: '12345', num: 299, status: 'closed', time: '2020-05-31 14:32:42' },
                { key: 1, name: 'TradeCode 4444', descript: '12413213213123123213213213231', num: 389, status: 'closed', time: '2020-05-31 14:31:48' },
                { key: 2, name: 'TradeCode 5864', descript: '123213', num: 534, status: 'open', time: '2020-05-31 14:31:36' },
                { key: 3, name: 'TradeCode 2719', descript: '123457', num: 716, status: 'closed', time: '2020-05-31 13:07:26' },
                { key: 4, name: 'TradeCode 5435', descript: 'fdsafdsa', num: 777, status: 'closed', time: '2020-05-31 10:53:51' },
                { key: 5, name: 'TradeCode 4839', descript: 'fdsafdsa', num: 292, status: 'open', time: '2020-05-31 10:53:46' },
                { key: 6, name: 'TradeCode 8950', descript: 'fdsaf', num: 266, status: 'closed', time: '2020-05-31 10:53:42' },
                { key: 7, name: 'TradeCode 7645', descript: '11111', num: 632, status: 'open', time: '2020-05-31 10:24:47' },
                { key: 8, name: 'TradeCode 3304', descript: 'aaadfasd', num: 532, status: 'closed', time: '2020-05-31 08:59:48' },
            ],
            newTableData: [],
            inputVal: '',
            selectVal: 'all'
        }
    }

    render() {
        const columns = [
            {
                title: '规则名称',
                dataIndex: 'name',
                key: 'name',
                render: text => <span>{text}</span>,
            },
            {
                title: '描述',
                dataIndex: 'descript',
                key: 'descript',
                render: text => <span>{text}</span>,
            },
            {
                title: '服务调用次数',
                dataIndex: 'num',
                key: 'num',
                render: text => <span>{text + ' 万'}</span>,
                sorter: {
                    compare: (a, b) => a.num - b.num
                },
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
                                <span>{'关闭'}</span>
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
                sorter: {
                    compare: (a, b) => {
                        let A = a.status.toUpperCase()
                        let B = b.status.toUpperCase()
                        if (A < B) {
                            return -1
                        } else if (A > B) {
                            return 1
                        } else {
                            return 0
                        }
                    }
                },
            },
            {
                title: '上次调度时间',
                dataIndex: 'time',
                key: 'time',
                render: text => <span>{text}</span>,
            },
        ]

        return (
            <div>
                <div className='table-list-search'>
                    <div style={{
                        color: '#000000d9',
                        fontSize: '14px',
                        lineHeight: '24px',
                        display: 'inline-block',
                        marginRight: '24px'
                    }}>规则名称：<Input placeholder="请输入规则名称" style={{ width: '150px' }} onChange={event => this.inputChange(event)} /></div>

                    <div style={{
                        color: '#000000d9',
                        fontSize: '14px',
                        lineHeight: '24px',
                        display: 'inline-block',
                        marginRight: '24px'
                    }}>状态：<Select placeholder="请选择状态" defaultValue='all' style={{ width: 150 }} onChange={val => this.selectChange(val)}>
                            <Option value="open">运行中</Option>
                            <Option value="closed">关闭</Option>
                            <Option value="all">全部</Option>
                        </Select></div>

                    <div style={{
                        color: '#000000d9',
                        fontSize: '14px',
                        lineHeight: '24px',
                        display: 'inline-block',
                        marginRight: '24px'
                    }}><Button type="primary" icon={<SearchOutlined />} onClick={() => this.search()}>
                            搜索
                  </Button></div>
                </div>



                <div className='table-list-content'>
                    <div style={{
                        color: '#000000d9',
                        fontSize: '16px',
                        lineHeight: '24px',
                        marginBottom: '12px'
                    }}>查询表格</div>
                    <Table columns={columns} dataSource={this.state.newTableData} rowKey={row => row.key} pagination={false} />
                </div>
            </div>
        )


    }

    selectChange = val => {
        this.setState({
            selectVal: val
        })
    }

    inputChange = event => {
        if (event && event.target) {
            let val = event.target.value
            this.setState(() => ({ inputVal: val }))
        }
    }

    componentDidMount() {
        this.setState({
            newTableData: this.state.tableDate
        })
    }

    search = () => {
        let newTableData = []
        this.state.tableDate.map((val) => {
            if (this.state.selectVal == 'all') {
                if (val.name.includes(this.state.inputVal)) {
                    newTableData.push(val)
                }
            } else {
                if (val.name.includes(this.state.inputVal) && val.status == this.state.selectVal) {
                    newTableData.push(val)
                }
            }
        })
        this.setState({
            newTableData: newTableData
        })

    }
}