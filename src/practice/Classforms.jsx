import React, { Component } from 'react'

export default class Classforms extends Component {
    constructor(props){
        super(props)
        this.state={textArea:""};
    }
    textChange = e=> {this.setState({textArea:e.target.value})}
    submitHandler=(e)=>{e.preventDefault()
      alert("comments: "+ this.state.textArea)
    }
  render() {
    return (
      <div>
        <label>add comments</label>
        <textArea onChange={this.state.textChange}></textArea>
      </div>
    )
  }
}
