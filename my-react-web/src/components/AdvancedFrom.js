import React from 'react'
import '../style/content/advanced-form.less'

export default class AdvancedFrom extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='advanced-form'>
                <div className='advanced-form-title'>
                    <div>高级表单</div>
                    <div className='advanced-form-descript'>
                    高级表单常见于一次性输入和提交大批量数据的场景。
                    </div>
                </div>
                <div className='advanced-form-content'>
                    jj
                </div>
            </div>
        )
    }
}