import React from 'react'
import '../style/content/step-form.less'

export default class StepForm extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='step-form'>
                <div className='step-form-title'>
                    <div>分步表单</div>
                    <div className='step-form-descript'>
                    将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。
                    </div>
                </div>
                <div className='step-form-content'>
                    ff
                </div>
            </div>
        )
    }
}