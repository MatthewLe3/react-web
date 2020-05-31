import React from 'react'
import { Progress } from 'antd'
import '../style/content/basic-list.less'
export default class BasicList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tableDate: [
                { name: 'Alipay', pic: require('../assets/img/Alipay.png'), descript: '那是一种内在的东西， 他们到达不了，也无法触及的', people: 'vanlish', time: '2020-05-31 16:16', progress: 74 },
                { name: 'Angular', pic: require('../assets/img/Angular.png'), descript: '希望是一个好东西，也许是最好的，好东西是不会消亡的', people: 'vanlish', time: '2020-05-31 14:16', progress: 54 },
                { name: 'Ant Design', pic: require('../assets/img/Antd.png'), descript: '生命就像一盒巧克力，结果往往出人意料', people: 'vanlish', time: '2020-05-31 12:16', progress: 86 },
                { name: 'Ant Design Pro', pic: require('../assets/img/AntdPro.png'), descript: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆', people: 'vanlish', time: '2020-05-31 10:16', progress: 26 },
                { name: 'Vue', pic: require('../assets/img/Vue.png'), descript: '那时候我只会想自己想要什么，从不想自己拥有什么', people: 'vanlish', time: '2020-05-31 11:11', progress: 72 },
            ],
        }
    }

    render() {


        return (
            <div className='basic-list'>
                <ul>
                    {this.state.tableDate.map((val, index) => {
                        return (
                            <li key={index}>
                                <div style={{ width: '50px' }}>
                                    <img src={val.pic} style={{ width: '48px', height: '48px' }} />
                                </div>
                                <div style={{ flex: 1, paddingLeft: '18px' }}>
                                    <div style={{
                                        marginBottom: '4px',
                                        color: '#000000a6',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        lineHeight: 1.5715
                                    }}>{val.name}</div>
                                    <div style={{
                                        fontSize: '14px',
                                        color: '#00000073',
                                        lineHeight: 1.5715
                                    }}>{val.descript}</div>
                                </div>
                                <div style={{ width: '100px', paddingLeft: '18px' }}>
                                    <div style={{
                                        marginBottom: '4px',
                                        color: '#000000a6',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        lineHeight: 1.5715
                                    }}>owner</div>
                                    <div style={{
                                        fontSize: '14px',
                                        color: '#00000073',
                                        lineHeight: 1.5715
                                    }}>{val.people}</div>
                                </div>
                                <div style={{ width: '200px', paddingLeft: '18px' }}>
                                    <div style={{
                                        marginBottom: '4px',
                                        color: '#000000a6',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        lineHeight: 1.5715
                                    }}>开始时间</div>
                                    <div style={{
                                        fontSize: '14px',
                                        color: '#00000073',
                                        lineHeight: 1.5715
                                    }}>{val.time}</div>
                                </div>
                                <div style={{ width: '200px', paddingLeft: '18px', position: 'relative' }}>
                                    <Progress percent={val.progress} status="active" style={{ top: '50%', transform: 'translateY(-50%)' }} />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}