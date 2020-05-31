import React from 'react'
import { CloseCircleFilled } from '@ant-design/icons';

export default class Fail extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ textAlign: 'center', padding: '24px', backgroundColor: '#fff' }}>
                <CloseCircleFilled style={{ fontSize: '72px', color: '#ff4d4f' }} />
                <div style={{
                    fontSize: '24px', color: '#000000d9',
                    lineHeight: 1.8,
                    textAlign: 'center',
                    margin: '30px'
                }}>提交失败</div>
                <div style={{
                    fontSize: '14px', color: '#00000073',
                    lineHeight: 1.6,
                    textAlign: 'center',
                    width: '70%',
                    margin: 'auto'
                }}>
                    请核对并修改以下信息后，再重新提交。
                    </div>
            </div>
        )
    }
}