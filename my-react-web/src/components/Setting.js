import React from 'react'
import { Menu } from 'antd'

export default class Setting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentMenu:'basic'
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
                <div>
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
                <div>
                    basic
                </div>
            )
        }else if(currentMenu == 'safe'){
            return (
                <div>
                    safe
                </div>
            )
        }else if(currentMenu == 'account'){
            return (
                <div>
                    account
                </div>
            )
        }else{
            return (
                <div>
                    msg
                </div>
            )
        }
    }
}