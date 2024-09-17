import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComponent from './MemoComponent'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Divin"
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "Divin"
            })
        }, 2000)
    }

  render() {
    console.log('************************Parent Comp renfer*************')
    return (
      <div>
        ParentComp
        <MemoComponent name={this.state.name} />
        {/* <RegComp name={this.state.name}> </RegComp>
        <PureComp name={this.state.name}></PureComp> */}
        </div>
    )
  }
}

export default ParentComp