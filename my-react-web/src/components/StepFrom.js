import React from 'react'
import '../style/content/step-form.less'

import { Steps, Button, message, Form, Input, Select } from 'antd';
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
            loading: false
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
            console.log('onFinish', val)
        }

        const steps = [
            {
                title: '填写转账信息',
                content: <div>
                    <Form {...layout} name="nest-messages" id='stepFrom' onFinish={onFinish} validateMessages={validateMessages} initialValues={{
                        ['payAccount']: 'xx@163.com',
                        ['getName']: 'vanliant',
                        ['payValue']: '500',
                    }}>
                        <Form.Item name='payAccount' label="付款账户" rules={[{ required: true }]} >
                            <Select style={{ width: '200px' }}>
                                <Option value={'xx@163.com'}>xx@163.com</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item name='getAccount' label="收款账户" rules={[{ required: true }]} >
                            <Input.Group compact>
                                <Select defaultValue="zfb">
                                    <Option value="zfb">支付宝</Option>
                                    <Option value="card">银行账户</Option>
                                </Select>
                                <Input style={{ width: '200px' }} defaultValue={'aa@163.com'} placeholder={'请输入付款账户'} />
                            </Input.Group>
                        </Form.Item>
                        <Form.Item name='getName' label="收款人姓名" rules={[{ required: true }]} >
                            <Input style={{ width: '200px' }} placeholder={'请输入收款人姓名'}></Input>
                        </Form.Item>

                        <Form.Item name='payValue' label="转账金额" rules={[{ required: true }]} >
                            <Input style={{ width: '200px' }} prefix="￥" placeholder={'请输入转账金额'}></Input>
                        </Form.Item>
                    </Form>
                </div>,
            },
            {
                title: '确认转账信息',
                content: 'Second-content',
            },
            {
                title: '完成',
                content: 'Last-content',
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
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => this.next()}>
                                下一步
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={() => this.submitForm()} loading={this.state.loading}>
                                完成
                            </Button>
                        )}
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                                上一步
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

    submitForm = () => {
        console.log('tijiao ')
        this.setState({
            loading: true
        })

        setTimeout(() => {
            this.setState({
                loading: false
            })
            message.success('分布表单提交完成')
        }, 2000);
    }

    
}

