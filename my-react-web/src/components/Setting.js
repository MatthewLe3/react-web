import React from 'react'
import { Menu } from 'antd'
import '../style/content/setting.less'
import { TaobaoOutlined, AlipayOutlined, DingdingOutlined } from '@ant-design/icons';


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
                country: '中国',
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
                label: '账号绑定'
            },
            msgInfo: {
                label: '新消息通知',
                data: [
                    { label: '账户密码', info: '其他用户的消息将以站内信的形式通知', status: true },
                    { label: '系统消息', info: '系统消息将以站内信的形式通知', status: true },
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
                <div style={{ padding: '8px 40px' }}>
                    {this.menuContent()}
                </div>
            </div>
        )
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            currentMenu: e.key
        })
    };
    menuContent = () => {
        let currentMenu = this.state.currentMenu
        if (currentMenu == 'basic') {
            return (
                <div className='setting-content'>
                    <div className='setting-label'>{this.state.basicInfo.label}</div>
                </div>
            )
        } else if (currentMenu == 'safe') {
            return (
                <div className='setting-content'>
                    <div className='setting-label'>{this.state.safeInfo.label}</div>
                </div>
            )
        } else if (currentMenu == 'account') {
            return (
                <div className='setting-content'>
                    <div className='setting-label'>{this.state.accountInfo.label}</div>
                    <div>

                        <TaobaoOutlined style={{ fontSize: '48px', color: '#ff4000' }} />
                        <AlipayOutlined style={{ fontSize: '48px', color: '#30abfe' }} />
                        <DingdingOutlined style={{ fontSize: '48px', color: '#30abfe' }} />
                    </div>
                </div>
            )
        } else {
            return (
                <div className='setting-content'>
                    <div className='setting-label'>{this.state.msgInfo.label}</div>
                </div>
            )
        }
    }
}