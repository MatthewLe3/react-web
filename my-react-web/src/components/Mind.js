import React from 'react'
// npm install gg-editor@2.0.4 --save
import { Card } from 'antd';
import GGEditor, {Mind } from 'gg-editor';
import styles from '../style/content/mind.less'
import data from './worldCup2018.json';

export default class MindPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 500,
            width: 0
        }
    }

    render() {
        return (
            <div className='mind'>
                <div className='mind-center'>
                    {this.drawMind()}
                </div>
                <div className='mind-right'>
                    detail
                </div>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            
            this.setState({
                height: document.querySelector('.mind-center').offsetHeight,
                width: document.querySelector('.mind-center').offsetWidth
            })
        }, 10);
    }

    drawMind = () => {
        if (this.state.width > 0) {
            return (
                <GGEditor style={{ display: 'flex' }}>
                    <Mind data={data} className={styles.mind} style={{ width: this.state.width, height: this.state.height }}/>
                </GGEditor>
            )
        } else {
            return (
                <div></div>
            )
        }

    }
}