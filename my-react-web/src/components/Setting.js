import React from 'react'
import { Menu, Input, Select, Button ,Switch} from 'antd'
import '../style/content/setting.less'
import { TaobaoOutlined, AlipayOutlined, DingdingOutlined } from '@ant-design/icons';


const { TextArea } = Input;
const { Option } = Select;

const provinceData = ['浙江', '江苏'];
const cityData = {
    浙江: ['杭州', '宁波', '温州'],
    江苏: ['南京', '苏州', '淮安'],
};

export default class Setting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMenu: 'basic',
            basicInfo: {
                label: '基本信息',
                email: 'antdesign@alipay.com',
                nickname: 'vanliant',
                introduction: '',
                country: 'China',
                city: ['浙江', '杭州'],
                place: 'xxxxx',
                phone: ['0752', '88888']
            },
            safeInfo: {
                label: '安全设置',
                data: [
                    { label: '账户密码', info: '当前密码强度：：强', operator: '修改' },
                    { label: '密保手机', info: '已绑定手机：：138****8293', operator: '修改' },
                    { label: '密保问题', info: '未设置密保问题，密保问题可有效保护账户安全', operator: '设置' },
                    { label: '备用邮箱', info: '已绑定邮箱：：ant***sign.com', operator: '修改' },
                    { label: 'MFA设备', info: '未绑定 MFA 设备，绑定后，可以进行二次确认', operator: '绑定' }
                ]
            },
            accountInfo: {
                label: '账号绑定',
                data: [
                    { label: '绑定淘宝', info: '当前未绑定淘宝账号', operator: '绑定' },
                    { label: '绑定支付宝', info: '当前未绑定支付宝账号', operator: '绑定' },
                    { label: '绑定钉钉', info: '当前未绑定钉钉账号', operator: '绑定' }
                ]
            },
            msgInfo: {
                label: '新消息通知',
                data: [
                    { label: '账户密码', info: '其他用户的消息将以站内信的形式通知', status: true },
                    { label: '系统消息', info: '系统消息将以站内信的形式通知', status: false },
                    { label: '待办任务', info: '待办任务将以站内信的形式通知', status: true }
                ]
            },
        }
    }

    render() {
        return (
            <div style={{ padding: '24px', backgroundColor: '#fff', display: 'flex' }}>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['basic']}
                    mode="inline"
                >
                    <Menu.Item key="basic">基本设置</Menu.Item>
                    <Menu.Item key="safe">安全设置</Menu.Item>
                    <Menu.Item key="account">账号绑定</Menu.Item>
                    <Menu.Item key="msg">新消息通知</Menu.Item>
                </Menu>
                <div style={{ padding: '8px 40px', width: '100%' }}>
                    {this.menuContent()}
                </div>
            </div>
        )
    }

    handleClick = e => {
        this.setState({
            currentMenu: e.key
        })
    };
    menuContent = () => {
        let currentMenu = this.state.currentMenu
        if (currentMenu == 'basic') {
            return (
                <div className='setting-content' style={{ width: '300px' }}>
                    <div className='setting-label'>{this.state.basicInfo.label}</div>
                    <div>
                        <div className='setting-basic-label'>邮箱</div>
                        <div className='setting-basic-content'>
                            <Input placeholder="请输入邮箱" defaultValue={this.state.basicInfo.email} />
                        </div>

                        <div className='setting-basic-label'>昵称</div>
                        <div className='setting-basic-content'>
                            <Input placeholder="请输入昵称" defaultValue={this.state.basicInfo.nickname} />
                        </div>

                        <div className='setting-basic-label'>个人简介</div>
                        <div className='setting-basic-content'>
                            <TextArea placeholder="请输入个人简介" autoSize={{ minRows: 2, maxRows: 6 }} defaultValue={this.state.basicInfo.introduction} />
                        </div>

                        <div className='setting-basic-label'>国家/地区</div>
                        <div className='setting-basic-content'>
                            <Select defaultValue={this.state.basicInfo.country} style={{ width: 120 }} onChange={this.countryChange}>
                                <Option value="China">中国</Option>
                                <Option value="American">美国</Option>
                            </Select>
                        </div>

                        <div className='setting-basic-label'>所在省市</div>
                        <div className='setting-basic-content'>
                            <Select
                                defaultValue={this.state.basicInfo.city[0]}
                                style={{ width: 120 }}
                                onChange={this.handleProvinceChange}
                            >
                                {provinceData.map(province => (
                                    <Option key={province}>{province}</Option>
                                ))}
                            </Select>
                            <Select
                                style={{ width: 120 }}
                                value={this.state.basicInfo.city[1]}
                                onChange={this.onSecondCityChange}
                            >
                                {cityData[this.state.basicInfo.city[0]].map(city => (
                                    <Option key={city}>{city}</Option>
                                ))}
                            </Select>
                        </div>

                        <div className='setting-basic-label'>街道地址</div>
                        <div className='setting-basic-content'>
                            <Input placeholder="请输入街道地址" defaultValue={this.state.basicInfo.place} />
                        </div>

                        <div className='setting-basic-label'>联系电话</div>
                        <div className='setting-basic-content'>
                            <Input.Group compact>
                                <Input style={{ width: '20%' }} defaultValue={this.state.basicInfo.phone[0]} />
                                <Input style={{ width: '30%' }} defaultValue={this.state.basicInfo.phone[1]} />
                            </Input.Group>
                        </div>
                    </div>
                    <Button type='primary'>更新基本信息</Button>
                </div>
            )
        } else if (currentMenu == 'safe') {
            return (
                <div className='setting-content'>
                    <div className='setting-label'>{this.state.safeInfo.label}</div>
                    <div>
                        <ul className='setting-safe-ul'>
                            {this.state.safeInfo.data.map((value, index) => {
                                return (
                                    <li key={index}>
                                        <div className='setting-safe-item'>
                                            <div className='setting-safe-item-left' >
                                                <div className='label'>{value.label}</div>
                                                <div className='info'>{value.info}</div>
                                            </div>
                                            <div className='setting-safe-item-right'>
                                                <a className='operator'>{value.operator}</a>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        } else if (currentMenu == 'account') {
            return (
                <div className='setting-content'>
                    <div className='setting-label'>{this.state.accountInfo.label}</div>
                    <div>
                        <div>
                            <ul className='setting-safe-ul'>
                                <li>
                                    <div className='setting-safe-item'>
                                    <div className='setting-account-icon'>
                                    <TaobaoOutlined className='account-icon' style={{  color: '#ff4000' }} />
                                    </div>
                                        <div className='setting-safe-item-left' >
                                            <div className='label'>{this.state.accountInfo.data[0].label}</div>
                                            <div className='info'>{this.state.accountInfo.data[0].info}</div>
                                        </div>
                                        <div className='setting-safe-item-right'>
                                            <a className='operator'>{this.state.accountInfo.data[0].operator}</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className='setting-safe-item'>
                                    <div className='setting-account-icon'>
                                    <AlipayOutlined className='account-icon' style={{  color: '#30abfe' }} />
                                    </div>
                                        <div className='setting-safe-item-left' >
                                            <div className='label'>{this.state.accountInfo.data[1].label}</div>
                                            <div className='info'>{this.state.accountInfo.data[1].info}</div>
                                        </div>
                                        <div className='setting-safe-item-right'>
                                            <a className='operator'>{this.state.accountInfo.data[1].operator}</a>
                                        </div>
                                    </div>
                                </li>
                                <li >
                                    <div className='setting-safe-item'>
                                    <div className='setting-account-icon'>
                                    <DingdingOutlined className='account-icon' style={{ color: '#30abfe' }} />
                                    </div>
                                        <div className='setting-safe-item-left' >
                                            <div className='label'>{this.state.accountInfo.data[2].label}</div>
                                            <div className='info'>{this.state.accountInfo.data[2].info}</div>
                                        </div>
                                        <div className='setting-safe-item-right'>
                                            <a className='operator'>{this.state.accountInfo.data[2].operator}</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='setting-content'>
                    <div className='setting-label'>{this.state.msgInfo.label}</div>
                    <div>
                        <ul className='setting-safe-ul'>
                            {this.state.msgInfo.data.map((value, index) => {
                                return (
                                    <li key={index}>
                                        <div className='setting-safe-item'>
                                            <div className='setting-safe-item-left' >
                                                <div className='label'>{value.label}</div>
                                                <div className='info'>{value.info}</div>
                                            </div>
                                            <div className='setting-safe-item-right'>
                                                <Switch className='operator' checkedChildren="开启" unCheckedChildren="关闭" defaultChecked={value.status} style={{width:'60px'}}/>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )
        }
    }

    countryChange = e => {
        let curBaseInfo = this.state.basicInfo
        curBaseInfo.country = e
        this.setState({
            basicInfo: curBaseInfo
        })
    }
    handleProvinceChange = e => {
        let curBaseInfo = this.state.basicInfo
        curBaseInfo.city[0] = e
        curBaseInfo.city[1] = cityData[e][0]
        this.setState({
            basicInfo: curBaseInfo
        })
    }
    onSecondCityChange = e => {
        let curBaseInfo = this.state.basicInfo
        curBaseInfo.city[1] = e
        this.setState({
            basicInfo: curBaseInfo
        })
    }
}