import React from 'react'

export default class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isAuthenticated:window.localStorage.getItem('USER_INFO') ? true : false
          }
    }

    componentWillMount(){
        if(!this.state.isAuthenticated){
          const {history} = this.props
            history.replace('/login')
        }
      }

    render(){
        return(
            <div>
                content
            </div>
        )
    }
}