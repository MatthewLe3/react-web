import React from 'react'
import '../style/content/content.less'
import { Layout, Menu } from 'antd';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    HomeOutlined,
    FormOutlined,
    TableOutlined,
    ProfileOutlined,
    CheckCircleOutlined,
    WarningOutlined,
    HighlightOutlined
} from '@ant-design/icons';



const { Header, Sider, Content } = Layout;
const {SubMenu} =Menu

export default class ContentPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: window.localStorage.getItem('USER_INFO') ? true : false,
            collapsed: false,
        }
    }

    componentWillMount() {
        if (!this.state.isAuthenticated) {
            const { history } = this.props
            history.replace('/login')
        }
    }

    render() {
        return (
            <div className='content'>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="home" icon={<HomeOutlined />}>
                                            主页
                        </Menu.Item>
                        <SubMenu key="form" icon={<FormOutlined />} title="表单页">
                            <Menu.Item key="basic-from">基础表单</Menu.Item>
                            <Menu.Item key="step-from">分步表单</Menu.Item>
                            <Menu.Item key="advanced-from">高级表单</Menu.Item>
                        </SubMenu>
                        <SubMenu key="list" icon={<TableOutlined />} title="列表页">
                            <Menu.Item key="table-list">查询表格</Menu.Item>
                            <Menu.Item key="basic-list">标准列表</Menu.Item>
                            <Menu.Item key="card-list">卡片列表</Menu.Item>
                        </SubMenu>
                        <SubMenu key="profile" icon={<ProfileOutlined />} title="详情页">
                            <Menu.Item key="basic">基础详情页</Menu.Item>
                            <Menu.Item key="advanced">高级详情页</Menu.Item>
                        </SubMenu>
                        <SubMenu key="result" icon={<CheckCircleOutlined />} title="结果页">
                            <Menu.Item key="success">成功页</Menu.Item>
                            <Menu.Item key="fail">失败页</Menu.Item>
                        </SubMenu>
                        <SubMenu key="exception" icon={<WarningOutlined />} title="异常页">
                            <Menu.Item key="403">403</Menu.Item>
                            <Menu.Item key="404">404</Menu.Item>
                            <Menu.Item key="500">500</Menu.Item>
                        </SubMenu>
                        <SubMenu key="account" icon={<UserOutlined />} title="个人页">
                            <Menu.Item key="center">个人中心</Menu.Item>
                            <Menu.Item key="setting">个人设置</Menu.Item>
                        </SubMenu>
                        <SubMenu key="edit" icon={<HighlightOutlined />} title="图形编辑器">
                            <Menu.Item key="flow">流程编辑器</Menu.Item>
                            <Menu.Item key="mind">脑图编辑器</Menu.Item>
                            <Menu.Item key="koni">拓补编辑器</Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </Header>
                        <Content
                            className="site-layout-background"
                            style={{
                                margin: '24px 16px',
                                padding: 24,
                                minHeight: 280,
                            }}
                        >
                            Content
          </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
}