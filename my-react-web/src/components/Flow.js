import React from 'react'
// npm install gg-editor --save
// import GGEditor, { Flow, EditableLabel } from "gg-editor";
import { Icon, Divider, Tooltip } from 'antd';
// import GGEditor, { Flow, Mind, Command, ContextMenu, constants } from 'gg-editor';

import GGEditor, { Flow, Item, ItemPanel } from 'gg-editor';

import '../style/content/flow.less'

// const { EditorCommand } = constants;
// const FLOW_COMMAND_LIST = [
//     EditorCommand.Undo,
//     EditorCommand.Redo,
//     '|',
//     EditorCommand.Copy,
//     EditorCommand.Paste,
//     EditorCommand.Remove,
//     '|',
//     EditorCommand.ZoomIn,
//     EditorCommand.ZoomOut,
// ];
const data = {
    nodes: [],
    edges: [],
  };
export default class FlowPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 500,
            width: 0,
            data: {
                nodes: [
                    {
                        id: '0',
                        label: 'Node',
                        x: 55,
                        y: 55,
                    },
                    {
                        id: '1',
                        label: 'Node',
                        x: 55,
                        y: 255,
                    },
                    {
                        id: '2',
                        label: 'Node',
                        x: 55,
                        y: 355,
                    },
                ],
                edges: [
                    {
                        label: 'Label',
                        source: '0',
                        target: '1',
                    },
                ],
            }
        }
    }

    render() {
        console.log()

        return (
            <div className='flow'>
                <div className='flow-left'>
                    <div>
                        <img src={require('../assets/img/start.svg')}></img>
                    </div>

                    <div>
                        <img src={require('../assets/img/normal.svg')}></img>
                    </div>

                    <div>
                        <img src={require('../assets/img/decision.svg')}></img>
                    </div>

                    <div>
                        <img src={require('../assets/img/model.svg')}></img>
                    </div>
                </div>
                <div className='flow-center'>
                    {this.drawFlow()}

                </div>
                <div className='flow-right'>右侧</div>
            </div>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                height: document.querySelector('.flow-center').offsetHeight,
                width: document.querySelector('.flow-center').offsetWidth
            })
        }, 10);
    }

    drawFlow = () => {
        if (this.state.width > 0) {
            // console.log('sty',styles)
            return (
                <GGEditor style={{display:'flex'}}>
                    <ItemPanel className='itemPanel'>
                        <Item
                            className='item'
                            model={{
                                type: 'circle',
                                size: 50,
                                label: 'ddd',
                            }}
                        >
                            <img
                                src="https://gw.alicdn.com/tfs/TB1IRuSnRr0gK0jSZFnXXbRRXXa-110-112.png"
                                width="55"
                                height="56"
                                draggable={false}
                            />
                        </Item>
                        <Item
                            className='item'
                            model={{
                                type: 'rect',
                                size: [80, 24],
                                label: 'rect',
                            }}
                        >
                            <img
                                src="https://gw.alicdn.com/tfs/TB1reKOnUT1gK0jSZFrXXcNCXXa-178-76.png"
                                width="89"
                                height="38"
                                draggable={false}
                            />
                        </Item>
                        <Item
                            className='item'
                            model={{
                                type: 'ellipse',
                                size: [100, 50],
                                label: 'ellipse',
                            }}
                        >
                            <img
                                src="https://gw.alicdn.com/tfs/TB1AvmVnUH1gK0jSZSyXXXtlpXa-216-126.png"
                                width="108"
                                height="63"
                                draggable={false}
                            />
                        </Item>
                        <Item
                            className='item'
                            model={{
                                type: 'diamond',
                                size: [80, 80],
                                label: 'diamond',
                            }}
                        >
                            <img
                                src="https://gw.alicdn.com/tfs/TB1EB9VnNz1gK0jSZSgXXavwpXa-178-184.png"
                                width="89"
                                height="92"
                                draggable={false}
                            />
                        </Item>
                        <Item
                            className='item'
                            model={{
                                type: 'triangle',
                                size: [30, 30],
                                label: 'triangle',
                            }}
                        >
                            <img
                                src="https://gw.alicdn.com/tfs/TB12sC2nKH2gK0jSZJnXXaT1FXa-126-156.png"
                                width="63"
                                height="78"
                                draggable={false}
                            />
                        </Item>
                    </ItemPanel>
                    <Flow className='graph' style={{width:this.state.width,height:this.state.height}} data={data} />
                </GGEditor>
            )
        } else {
            return (
                <div></div>
            )
        }

    }
}