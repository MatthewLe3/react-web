import React from 'react'
import '../style/content/basic-form.less'

import { Form, DatePicker, Button, Input, InputNumber, Radio, Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const rangeConfig = {
    rules: [
        {
            type: 'array',
            required: true,
            message: '请输入起始日期!',
        },
    ],
};

const formConfig = {
    'title-value': {
        rules: [
            {
                type: 'string',
                required: true,
                message: '请输入标题!',
            },
        ]
    },
    'describe': {
        rules: [
            {
                type: 'string',
                required: true,
                message: '请输入目标描述!',
            },
        ]
    },
    'standard': {
        rules: [
            {
                type: 'string',
                required: true,
                message: '请输入衡量标准!',
            },
        ]
    },
    'user': {
        rules: [
            {
                type: 'string',
                required: false,
            },
        ]
    },
    'invite': {
        rules: [
            {
                type: 'string',
                required: false,
            },
        ]
    },
    'weight': {
        rules: [
            {
                type: 'number',
                required: false,
            },
        ]
    },
}

export default class BasicFrom extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='basic-form'>
                <div className='basic-form-title'>
                    <div>基础表单</div>
                    <div className='basic-form-descript'>
                        表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。
                    </div>
                </div>
                <div className='basic-form-content'>
                    {TimeRelatedForm()}
                </div>
            </div>
        )
    }
}

let formLayout = 'public'
const TimeRelatedForm = () => {
    const onFinish = fieldsValue => {
        // fieldsValue['is-public'] = 'public'
        const rangeValue = fieldsValue['range-picker'];
        const values = {
            ...fieldsValue,
            'title-value': fieldsValue['title-value'],
            'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
            'describe': fieldsValue['describe'],
            'standard': fieldsValue['standard'],
            'user': fieldsValue['user'],
            'invite': fieldsValue['invite'],
            'weight': fieldsValue['weight'],
            'is-public': fieldsValue['is-public'],
        };
        console.log('Received values of form: ', values);
    };

    return (
        <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish} initialValues={{
            ['is-public']: 'public'
        }}>
            <Form.Item name="title-value" label="标题" {...formConfig['title-value']}>
                <Input placeholder={'请输入标题'} style={{ width: 450 }} />
            </Form.Item>
            <Form.Item name="range-picker" label="起始日期" {...rangeConfig}>
                <RangePicker placeholder={['开始日期', '结束日期']} style={{ width: 450 }} />
            </Form.Item>
            <Form.Item name="describe" label="目标描述" {...formConfig['describe']}>
                <TextArea rows={4} placeholder={'请输入你的阶段性工作目标'} style={{ width: 450 }} />
            </Form.Item>
            <Form.Item name="standard" label="衡量标准" {...formConfig['standard']}>
                <TextArea rows={4} placeholder={'请输入衡量标准'} style={{ width: 450 }} />
            </Form.Item>
            <Form.Item name="user" label={
                <span>
                    客户<span style={{ marginLeft: '10px', color: '#949494', fontWeight: 200 }}>(选填)</span>
                    <Tooltip title="目标的服务对象">
                        <ExclamationCircleOutlined style={{ cursor: 'pointer', marginLeft: '10px', color: '#949494' }} />
                    </Tooltip>
                </span>
            } {...formConfig['user']}>
                <Input placeholder={'请描述里服务的客户，内部客户直接@姓名/工号'} style={{ width: 450 }} />
            </Form.Item>
            <Form.Item name="invite" label={
                <span>
                    邀评人<span style={{ marginLeft: '10px', color: '#949494', fontWeight: 200 }}>(选填)</span>
                </span>
            } {...formConfig['invite']}>
                <Input placeholder={'请直接@姓名/工号，最多可邀评5人'} style={{ width: 450 }} />
            </Form.Item>
            <Form.Item name="weight" label={
                <span>
                    权重<span style={{ marginLeft: '10px', color: '#949494', fontWeight: 200 }}>(选填)</span>
                </span>
            } {...formConfig['weight']}>
                <InputNumber />
            </Form.Item>
            <Form.Item name="is-public" label="目标公开" >
                <Radio.Group>
                    <Radio value={"public"}>公开</Radio>
                    <Radio value={"private"}>不公开</Radio>
                </Radio.Group>
            </Form.Item>


            <Form.Item
                wrapperCol={{
                    xs: {
                        span: 24,
                        offset: 0,
                    },
                    sm: {
                        span: 16,
                        offset: 8,
                    },
                }}
            >
                <Button type="primary" htmlType="submit">
                    提交
          </Button>
            </Form.Item>
        </Form>
    );
};