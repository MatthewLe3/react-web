import React from 'react'
import { Card } from 'antd';
import GGEditor, { Flow, Item, ItemPanel, } from 'gg-editor';
import styles from '../style/content/koni.less'


const data = {
    nodes: [],
    edges: [],
};

export default class Koni extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            height: 500,
            width: 0
        }
    }

    render(){
        return (
            <div className='koni'>
                <div className='koni-center'>
                    {this.drawKoni()}
                </div>
                <div className='koni-right'>
                    koni
                </div>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            
            this.setState({
                height: document.querySelector('.koni-center').offsetHeight,
                width: document.querySelector('.koni-center').offsetWidth-250
            })
        }, 10);
    }

    drawKoni = () => {
        if (this.state.width > 0) {
            return (
                <GGEditor style={{ display: 'flex' }}>
                    a
                </GGEditor>
            )
        } else {
            return (
                <div></div>
            )
        }

    }
}