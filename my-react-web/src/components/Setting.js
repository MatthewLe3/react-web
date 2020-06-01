import React from 'react'
import { Menu } from 'antd'
import '../style/content/setting.less'

export default class Setting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMenu:'basic',
            basicInfo:{
                label:'基本信息',
                email:'antdesign@alipay.com',
                nickname:'vanliant',
                introduction:'',
                country:'中国',
                city:['浙江','杭州'],
                place:'xxxxx',
                phone:['0752','88888']
            },
            safeInfo:{
                label:'安全设置',
                data:[]
            },
            accountInfo:{
                label:'账号绑定',
                data:[]
            },
            msgInfo:{
                label:'新消息通知',
                data:[]
            },
        }
    }

    render() {
        return (
            <div style={{ padding: '24px', backgroundColor: '#fff',display:'flex' }}>
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
                <div style={{padding:'8px 40px'}}>
                    {this.menuContent()}
                </div>
            </div>
        )
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            currentMenu:e.key
        })
    };
    menuContent = () => {
        let currentMenu = this.state.currentMenu
        if(currentMenu == 'basic'){
            return (
                <div className='setting-content'>
                    <div className='setting-label'>{this.state.basicInfo.label}</div>
                </div>
            )
        }else if(currentMenu == 'safe'){
            return (
                <div className='setting-content'>
                    <div className='setting-label'>{this.state.safeInfo.label}</div>
                </div>
            )
        }else if(currentMenu == 'account'){
            return (
                <div className='setting-content'>
                    <div className='setting-label'>{this.state.accountInfo.label}</div>
                </div>
            )
        }else{
            return (
                <div className='setting-content'>
                    <div className='setting-label'>{this.state.msgInfo.label}</div>
                </div>
            )
        }
    }
}