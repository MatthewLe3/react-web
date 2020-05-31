import React from 'react'
import { Button } from 'antd'

export default class NotFound extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div style={{ textAlign: 'center', padding: '24px', backgroundColor: '#fff' }}>
                <img src={require('../assets/img/404.jpeg')} />
                <div style={{
                    fontSize: '24px', color: '#000000d9',
                    lineHeight: 1.8,
                    textAlign: 'center',
                    margin: '30px'
                }}>
                    <Button type='primary' onClick={() => this.returnHome()}>返回主页</Button>
                </div>
            </div>
        )
    }

    returnHome = () => {
        window.location.href = '/content/home'
    }
}