import React from 'react'
import '../style/content/center.less'

import { Row, Col, Avatar, Divider, Tag, Input, Tabs, Card, Statistic } from 'antd';
import { TweenOneGroup } from 'rc-tween-one';
import { ContactsOutlined, ClusterOutlined, HomeOutlined, PlusOutlined, StarTwoTone, LikeOutlined, MessageOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'


const { TabPane } = Tabs;
const { Meta } = Card;

export default class Center extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: require('../assets/img/avatar.png'),
            userName: 'vanliant',
            info: 'Keep Moving!',
            tags: ['混子', '前端', 'Vue', 'Weex', 'React', 'Bootstrap'],
            inputVisible: false,
            inputValue: '',
            team: [
                { pic: require('../assets/img/Alipay.png'), label: '科学搬砖组' },
                { pic: require('../assets/img/Angular.png'), label: '全组都是吴彦祖' },
                { pic: require('../assets/img/Antd.png'), label: '中二少女团' },
                { pic: require('../assets/img/AntdPro.png'), label: '程序员日常' },
                { pic: require('../assets/img/Bootstrap.png'), label: '高逼格设计天团' },
                { pic: require('../assets/img/React.png'), label: '骗你来学计算机' },
            ],
            airticleList: [
                { title: 'Alipay', tagList: ['Ant Design', '设计语言', '蚂蚁金服'], content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案', icon: require('../assets/img/Alipay.png'), author: 'vanlish', site: 'https://ant.design', star: 110, support: 173, comment: 20 },
                { title: 'Angular', tagList: ['Ant Design', '设计语言', '蚂蚁金服'], content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案', icon: require('../assets/img/Angular.png'), author: 'vanlish', site: 'https://ant.design', star: 110, support: 173, comment: 20 },
                { title: 'Antd Design', tagList: ['Ant Design', '设计语言', '蚂蚁金服'], content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案', icon: require('../assets/img/Antd.png'), author: 'vanlish', site: 'https://ant.design', star: 110, support: 173, comment: 20 },
                { title: 'Antd Design Pro', tagList: ['Ant Design', '设计语言', '蚂蚁金服'], content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案', icon: require('../assets/img/AntdPro.png'), author: 'vanlish', site: 'https://ant.design', star: 110, support: 173, comment: 20 },
                { title: 'Bootstrap', tagList: ['Ant Design', '设计语言', '蚂蚁金服'], content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案', icon: require('../assets/img/Bootstrap.png'), author: 'vanlish', site: 'https://ant.design', star: 110, support: 173, comment: 20 },
                { title: 'Vue', tagList: ['Ant Design', '设计语言', '蚂蚁金服'], content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案', icon: require('../assets/img/vue_.png'), author: 'vanlish', site: 'https://ant.design', star: 110, support: 173, comment: 20 },
                { title: 'React', tagList: ['Ant Design', '设计语言', '蚂蚁金服'], content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案', icon: require('../assets/img/React.png'), author: 'vanlish', site: 'https://ant.design', star: 110, support: 173, comment: 20 },
                { title: 'Webpack', tagList: ['Ant Design', '设计语言', '蚂蚁金服'], content: '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案', icon: require('../assets/img/Webpack.png'), author: 'vanlish', site: 'https://ant.design', star: 110, support: 173, comment: 20 },
            ],
            appList: [
                { icon: require('../assets/img/Alipay.png'), label: 'Alipay', user: 11, add: 1503 },
                { icon: require('../assets/img/Angular.png'), label: 'Angular', user: 14, add: 1342 },
                { icon: require('../assets/img/Antd.png'), label: 'Antd Design', user: 13, add: 1425 },
                { icon: require('../assets/img/AntdPro.png'), label: 'Antd Design Pro', user: 8, add: 2345 },
                { icon: require('../assets/img/Bootstrap.png'), label: 'Bootstrap', user: 25, add: 2131 },
                { icon: require('../assets/img/vue_.png'), label: 'Vue', user: 16, add: 4563 },
                { icon: require('../assets/img/React.png'), label: 'Alipay', user: 15, add: 4532 },
            ],
            proList: [
                { pic: require('../assets/img/pro1.png'), label: 'Alipay', introduction: '那是一种内在的东西， 他们到达不了，也无法触及的', time: '1天前' },
                { pic: require('../assets/img/pro2.png'), label: 'Angular', introduction: '希望是一个好东西，也许是最好的，好东西是不会消亡的', time: '1天前' },
                { pic: require('../assets/img/pro3.png'), label: 'React', introduction: '生命就像一盒巧克力，结果往往出人意料', time: '1天前' },
                { pic: require('../assets/img/pro4.png'), label: 'Vue', introduction: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆', time: '1天前' },
                { pic: require('../assets/img/pro5.png'), label: 'Bootstrap', introduction: '那时候我只会想自己想要什么，从不想自己拥有什么', time: '1天前' },
            ]
        }
    }

    render() {
        return (
            <div className='center-content'>
                <Row style={{ padding: '12px 0' }}>
                    <Col span={7}>
                        {this.personalInfo()}
                    </Col>
                    <Col span={17} >
                        {this.personalContent()}
                    </Col>
                </Row>
            </div>
        )
    }

    personalInfo = () => {

        const { tags, inputVisible, inputValue } = this.state;
        const tagChild = tags.map(this.forMap);

        return (
            <div style={{ margin: '0 12px', backgroundColor: '#fff', padding: '24px' }}>
                {/* 头部 */}
                <div style={{ marginBottom: '24px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <Avatar size={104} src={this.state.avatar} />
                    </div>
                    <div className='center-name'>{this.state.userName}</div>
                    <div className='center-info'>{this.state.info}</div>
                </div>
                {/* 职位信息 */}
                <div className='center-workInfo'>
                    <div>
                        <ContactsOutlined style={{ fontSize: '14px' }} />
                        <span>前端工程师</span>
                    </div>
                    <div>
                        <ClusterOutlined style={{ fontSize: '14px' }} />
                        <span>xxxBU-xxx</span>
                    </div>
                    <div>
                        <HomeOutlined style={{ fontSize: '14px' }} />
                        <span>浙江省杭州市</span>
                    </div>
                </div>

                <Divider />

                {/* 个人标签 */}
                <div className='center-tag'>
                    <div className='label'>标签</div>
                    <TweenOneGroup
                        className='center-tag-content'
                        enter={{
                            scale: 0.8,
                            opacity: 0,
                            type: 'from',
                            duration: 100,
                            onComplete: e => {
                                e.target.style = '';
                            },
                        }}
                        leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                        appear={false}
                    >
                        {tagChild}
                    </TweenOneGroup>
                    {inputVisible && (
                        <Input
                            ref={this.saveInputRef}
                            type="text"
                            size="small"
                            style={{ width: 78 }}
                            value={inputValue}
                            onChange={this.handleInputChange}
                            onBlur={this.handleInputConfirm}
                            onPressEnter={this.handleInputConfirm}
                        />
                    )}
                    {!inputVisible && (
                        <Tag onClick={this.showInput} className="site-tag-plus" style={{ margin: '2px' }}>
                            <PlusOutlined />
                        </Tag>
                    )}
                </div>

                <Divider />

                {/* 团队 */}
                <div className='center-team'>
                    <div className='label'>团队</div>
                    <div className='group'>
                        {this.state.team.map((val, index) => {
                            return (
                                <div key={index}>
                                    <img src={val.pic}></img>
                                    <span>{val.label}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

    personalContent = () => {
        return (
            <div style={{ margin: '0 12px', backgroundColor: '#fff', padding: '24px' }}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab={'文章' + '(' + (this.state.airticleList.length) + ')'} key="1">
                        {this.airticleHtml()}
                    </TabPane>
                    <TabPane tab={'应用' + '(' + (this.state.appList.length) + ')'} key="2">
                        {this.appListHtml()}
                    </TabPane>
                    <TabPane tab={'项目' + '(' + (this.state.proList.length) + ')'} key="3">
                        {this.proListHtml()}
                    </TabPane>
                </Tabs>
            </div>
        )
    }

    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    };

    showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
    };

    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
    };

    handleInputConfirm = () => {
        const { inputValue } = this.state;
        let { tags } = this.state;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            tags = [...tags, inputValue];
        }
        console.log(tags);
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        });
    };

    saveInputRef = input => (this.input = input);

    forMap = tag => {
        const tagElem = (
            <Tag
                closable
                onClose={e => {
                    e.preventDefault();
                    this.handleClose(tag);
                }}
            >
                {tag}
            </Tag>
        );
        return (
            <span key={tag} style={{ display: 'inline-block' }}>
                {tagElem}
            </span>
        );
    };

    airticleHtml = () => {
        return (
            <div>
                {this.state.airticleList.map((value, index) => {
                    return (
                        <div key={index} className='center-airticle'>
                            {/* 标题 */}
                            <h4 className='center-airticle-title'>{value.title}</h4>
                            {/* tag */}
                            {value.tagList.map((tagVal, tagIndex) => {
                                return (
                                    <Tag key={tagIndex}>{tagVal}</Tag>
                                )
                            })}
                            {/* 内容 */}
                            <p className='center-airticle-content'>{value.content}</p>
                            {/* 作者、链接 */}
                            <div className='center-airticle-author'>
                                <img src={value.icon} style={{ width: '20px', height: '20px', borderRadius: '50%', cursor: 'pointer' }}></img>
                                <a style={{ marginLeft: '10px' }}>{value.author}</a>
                                <span style={{ marginLeft: '5px' }}>发布在</span>
                                <a style={{ marginLeft: '5px' }}>{value.site}</a>
                                <span style={{ marginLeft: '10px', color: '#00000040' }}>2020-06-01 19:34</span>
                            </div>

                            {/* 点赞、关注、评论 */}
                            <div style={{ display: 'flex', marginTop: '16px' }}>
                                <div style={{ marginRight: '10px' }}><StarTwoTone style={{ cursor: 'pointer', marginRight: '5px' }} />{value.star}</div>
                                <div style={{ marginRight: '10px' }}><LikeOutlined style={{ cursor: 'pointer', marginRight: '5px' }} />{value.support}</div>
                                <div style={{ marginRight: '10px' }}><MessageOutlined style={{ cursor: 'pointer', marginRight: '5px' }} />{value.comment}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    appListHtml = () => {
        return (
            <div className='center-card'>
                {this.state.appList.map((value, index) => {
                    return (
                        <div className='app' key={index}>
                            <Card
                                hoverable
                                style={{ marginTop: 16 }}
                                actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                ]}
                            >
                                <Meta
                                    avatar={
                                        <Avatar src={value.icon} />
                                    }
                                    title={value.label}
                                />
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '50%' }}>
                                        <div className='card-user'>活跃用户</div>
                                        <div style={{
                                            fontSize: '24px',
                                            lineHeight: '32px'
                                        }}>{value.user}万</div>
                                    </div>
                                    <div style={{ width: '50%' }}>
                                        <div className='card-user'>新增用户</div>
                                        <div style={{
                                            fontSize: '24px',
                                            lineHeight: '32px'
                                        }}><Statistic value={value.add} precision={0} /></div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }

    proListHtml = () => {
        return (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {this.state.proList.map((value, index) => {
                    return (
                        <div key={index} style={{ width: '33.3%', padding: '12px' }}>
                            <Card

                                hoverable

                                cover={<img alt="example" src={value.pic} />}
                            >
                                <Meta title={value.label} description={value.introduction} />
                                <div style={{
                                    height:'20px',
                                    marginTop:'16px',
                                    fontSize:'12px',
                                    color:'#00000073'
                                }}>{value.time}</div>
                            </Card>
                        </div>
                    )
                })}
            </div>
        )
    }
}