import React from 'react'
import { CheckCircleFilled } from '@ant-design/icons';

export default class Success extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ textAlign: 'center', padding: '24px', backgroundColor: '#fff' }}>
                <CheckCircleFilled style={{ fontSize: '72px', color: '#52c41a' }} />
                <div style={{
                    fontSize: '24px', color: '#000000d9',
                    lineHeight: 1.8,
                    textAlign: 'center',
                    margin: '30px'
                }}>提交成功</div>
                <div style={{
                    fontSize: '14px', color: '#00000073',
                    lineHeight: 1.6,
                    textAlign: 'center',
                    width: '70%',
                    margin: 'auto'
                }}>
                    提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。
                    </div>
            </div>
        )
    }
}