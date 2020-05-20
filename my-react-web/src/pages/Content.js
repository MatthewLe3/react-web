import React from 'react'
import '../style/content/content.less'
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route } from "react-router-dom"

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
const { SubMenu } = Menu

export default class ContentPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isAuthenticated: window.localStorage.getItem('USER_INFO') ? true : false,
            collapsed: false,
            openKeys: ['home'],
            current:'',
            defaultOpenKeys:[],
            selectedKeys:[],
            openKeys:[]
        }
    }

    rootSubmenuKeys = ['form', 'list', 'profile', 'result', 'exception', 'account', 'edit'];
    menuList = {
        'home':['home'],
        'form':['basic-form','step-form','advanced-form'],
        'list':['table-list','basic-list','card-list'],
        'profile':['basic','advanced'],
        'result':['success','fail'],
        'exception':['403','404','500'],
        'account':['center','setting'],
        'edit':['flow','mind','koni']
    }

    componentWillMount() {
        if (!this.state.isAuthenticated) {
            const { history } = this.props
            history.replace('/login')
        }
    }

    componentDidMount(){
        let pathArr = this.props.history.location.pathname.split('/')
        Object.keys(this.menuList).map((val => {
            if(this.menuList[val].includes(pathArr[pathArr.length-1])){
                console.log('dddd',val)
                this.setState({
                    openKeys:[val],
                    selectedKeys:[pathArr[pathArr.length-1]]
                })
            }
        }))
    }

    render() {
        return (
            <div className='content'>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo" />
                        <Menu theme="dark" mode="inline" 
                            selectedKeys={this.state.selectedKeys}  
                            openKeys={this.state.openKeys}
                            onClick={(key) => this.clickMenu(key)}
                            onOpenChange={this.onOpenChange}>
                            <Menu.Item key="home" icon={<HomeOutlined />}>
                                主页
                        </Menu.Item>
                            <SubMenu key="form" icon={<FormOutlined />} title="表单页">
                                <Menu.Item key="basic-form">基础表单</Menu.Item>
                                <Menu.Item key="step-form">分步表单</Menu.Item>
                                <Menu.Item key="advanced-form">高级表单</Menu.Item>
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
                            {
                                this.props.routes.map((v, i) => {
                                    return <Route key={i} path={v.path} component={v.component} exact></Route>
                                })
                            }
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

    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    clickMenu = (value) => {
        this.props.history.push('/content/'+value.key)

        Object.keys(this.menuList).map((val => {
            if(this.menuList[val].includes(value.key)){
                this.setState({
                    openKeys:[val],
                    selectedKeys:[value.key]
                })
            }
        }))
    }
}