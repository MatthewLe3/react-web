import React from 'react'
import '../style/content/basic-form.less'

export default class BasicFrom extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='basic-form'>
                <div className='basic-form-title'>
                    <div>基础表单</div>
                    <div className='basic-form-descript'>
                        表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。
                    </div>
                </div>
                <div className='basic-form-content'>
                    content
                </div>
            </div>
        )
    }
}