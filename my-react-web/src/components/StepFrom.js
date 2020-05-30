import React from 'react'
import '../style/content/step-form.less'

import { Steps, Button, message, Form, Input, Select, Alert } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
const { Step } = Steps;
const { Option } = Select;

const layout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 10,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};




export default class StepForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current: 0,
            loading: false,
            formData: {}
        }
    }

    render() {



        const validateMessages = {
            required: '请输入${label}!',
            types: {
                email: '${label} is not validate email!',
                number: '${label} is not a validate number!',
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };

        const onFinish = val => {
            this.setState({
                formData: val
            })
            this.next()
        }

        const prefixSelector = (
            <Form.Item name="accountType" noStyle>
                <Select>
                    <Option value="zfb">支付宝</Option>
                    <Option value="card">银行账户</Option>
                </Select>
            </Form.Item>
        );





        const steps = [
            {
                title: '填写转账信息',
                content: <div>
                    <Form {...layout} name="nest-messages" id='stepFrom' onFinish={onFinish} validateMessages={validateMessages} initialValues={{
                        ['payAccount']: 'xx@163.com',
                        ['getName']: 'vanliant',
                        ['payValue']: '500',
                        ['getAccount']: 'aa@163.com',
                        ['accountType']: 'zfb'
                    }}>
                        <Form.Item name='payAccount' label="付款账户" rules={[{ required: true }]} >
                            <Select style={{ width: '200px' }}>
                                <Option value={'xx@163.com'}>xx@163.com</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item name='getAccount' label="收款账户" rules={[{ required: false }]} >
                            <Input addonBefore={prefixSelector} style={{ width: '200px' }} placeholder={'请输入付款账户'} />
                        </Form.Item>

                        <Form.Item name='getName' label="收款人姓名" rules={[{ required: true }]} >
                            <Input style={{ width: '200px' }} placeholder={'请输入收款人姓名'}></Input>
                        </Form.Item>

                        <Form.Item name='payValue' label="转账金额" rules={[{ required: true }]} >
                            <Input style={{ width: '200px' }} prefix="￥" placeholder={'请输入转账金额'}></Input>
                        </Form.Item>

                        <Button type="primary" htmlType="submit">
                            提交
              </Button>
                    </Form>
                </div>,
            },
            {
                title: '确认转账信息',
                content: <div style={{ textAlign: 'center' }}>
                    {this.detailPage()}
                </div>,
            },
            {
                title: '完成',
                content: <div>
                    <CheckCircleFilled style={{ fontSize: '72px', color: '#52c41a' }} />
                    <div style={{
                        fontSize: '24px', color: '#000000d9',
                        lineHeight: 1.8,
                        textAlign: 'center'
                    }}>操作成功</div>
                    <div style={{
                        fontSize: '14px', color: '#00000073',
                        lineHeight: 1.6,
                        textAlign: 'center'
                    }}>
                        预计两小时内到账
                    </div>
                </div>,
            },
        ];

        const { current } = this.state;
        return (
            <div className='step-form'>
                <div className='step-form-title'>
                    <div>分步表单</div>
                    <div className='step-form-descript'>
                        将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。
                    </div>
                </div>
                <div className='step-form-content'>
                    {/* current控制当前的step */}
                    <Steps current={current}>
                        {steps.map(item => (
                            <Step key={item.title} title={item.title} />
                        ))}
                    </Steps>

                    <div className="steps-content">{steps[current].content}</div>
                    <div className="steps-action">
                        {current === 1 && (
                            <Button type="primary" onClick={() => this.submitForm()} loading={this.state.loading}>
                                提交
                            </Button>
                        )}

                        {current === 1 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                                上一步
                            </Button>
                        )}

                        {current === 2 && (
                            <Button type="primary" style={{ margin: '0 8px' }} onClick={() => this.returnFirst()}>
                                再来一笔
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
        // this.onFinish()
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    returnFirst() {
        const current = 0;
        this.setState({ current });
    }

    submitForm = () => {
        this.setState({
            loading: true
        })



        setTimeout(() => {
            this.setState({
                loading: false
            })
            message.success('分布表单提交完成')
            this.next()
        }, 2000);
    }

    detailPage = () => {
        console.log('vv', this.state.formData)
        return (
            <div style={{ width: '500px', margin: 'auto' }}>
                <Alert message="确认转账后，资金将直接打入对方账户，无法退回。" style={{ width: '500px' }} type="info" showIcon closable />
                <div className='pay-info'>
                    <span className='pay-info-label'>
                        付款账户：
                    </span>
                    <span className='pay-info-value'>{this.state.formData.payAccount}</span>
                </div>
                <div className='pay-info'>
                    <span className='pay-info-label'>
                        收款账户:
                    </span>
                    <span className='pay-info-value'>{this.state.formData.getAccount}</span>
                </div>
                <div className='pay-info'>
                    <span className='pay-info-label'>
                        收款人姓名:
                    </span>
                    <span className='pay-info-value'>{this.state.formData.getName}</span>
                </div>
                <div className='pay-info'>
                    <span className='pay-info-label'>
                        转账金额:
                    </span>
                    <span className='pay-info-value' style={{ fontSize: '24px' }}>{this.state.formData.payValue}元</span>
                </div>
            </div>
        )
    }
}

