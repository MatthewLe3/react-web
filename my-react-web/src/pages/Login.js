import React from 'react'
import '../style/login/login.less'

import { Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { connect } from 'react-redux'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userPassword: ''
        }
    }

    render() {

        return (
            <div className='login'>
                <div className='login-content'>
                    <Input size="large" placeholder="请输入用户名" prefix={<UserOutlined />} style={{ width: '300px', marginBottom: '10px' }} onChange={event => this.getUserName(event)} />
                    <Input.Password size='large' placeholder="请输入密码" prefix={<LockOutlined />} style={{ width: '300px', marginBottom: '10px' }} onChange={event => this.getUserPassword(event)} />
                    <span className='userTip'>用户名：admin，密码：admin</span>
                    <Button type="primary" style={{ width: '300px' }} onClick={this.login}>登录</Button>
                </div>
            </div>
        )
    }

    // 用户名
    getUserName(event) {
        if (event && event.target && event.target.value) {
            let userName = event.target.value;
            this.setState(() => ({ userName: userName }))
        }
    }
    // 密码
    getUserPassword(event) {
        if (event && event.target && event.target.value) {
            let userPassword = event.target.value;
            this.setState(() => ({ userPassword: userPassword }))
        }
    }

    //登录
    login = () => {
        if (this.state.userName != 'admin') {
            message.error('用户名错误！');
            return
        }
        if (this.state.userPassword != 'admin') {
            message.error('密码错误！');
            return
        }

        localStorage.setItem('USER_INFO', this.state.userName)
        // console.log('跳转至详情页面，同时将登录状态保存进localstorage',this)
        this.props.history.push('/content/home')
        this.props.setUserName(this.state.userName)
    }
}

//需要渲染什么数据
function mapStateToProps(state) {
    return {
        userName: state
    }
}
//需要触发什么行为
function mapDispatchToProps(dispatch) {
    return {
        setUserName: (val) => dispatch({ type: 'SET_USERNAME', name: val })
    }
}

export default Login = connect(mapStateToProps, mapDispatchToProps)(Login)