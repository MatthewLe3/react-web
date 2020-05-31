import React from 'react'
import { Card } from 'antd';
import '../style/content/card-list.less'
// const { Meta } = Card;

export default class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardList: [
                { name: 'Alipay', pic: require('../assets/img/Alipay.png'), descript: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。' },
                { name: 'Angular', pic: require('../assets/img/Angular.png'), descript: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。' },
                { name: 'Antd Design', pic: require('../assets/img/Antd.png'), descript: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。' },
                { name: 'Antd Design Pro', pic: require('../assets/img/AntdPro.png'), descript: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。' },
                { name: 'Bootstrap', pic: require('../assets/img/Bootstrap.png'), descript: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。' },
                { name: 'React', pic: require('../assets/img/React.png'), descript: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。' },
                { name: 'Vue', pic: require('../assets/img/vue_.png'), descript: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。' },
                { name: 'Webpack', pic: require('../assets/img/Webpack.png'), descript: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。' },
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.cardList.map((val, index) => {
                    return <Card
                        className='card-list'
                        key={index}
                        hoverable
                        style={{ width: '100%', padding: '24px', marginBottom: '20px' }}
                        cover={<div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '50px' }}>
                                    <img src={val.pic} style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '48px'
                                    }} />
                                </div>
                                <div style={{ paddingLeft: '20px' }}>
                                    <div style={{
                                        marginBottom: '4px',
                                        color: '#000000a6',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        lineHeight: 1.5715
                                    }}>{val.name}</div>
                                    <div style={{
                                        fontSize: '14px',
                                        color: '#00000073',
                                        lineHeight: 1.5715
                                    }}>{val.descript}</div>
                                </div>
                            </div>
                            
                        </div>}
                    >
                    </Card>
                })}
            </div>
        )
    }
}