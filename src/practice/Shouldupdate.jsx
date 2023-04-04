import React, { Component } from 'react'

export class Shouldupdate extends Component {

    constructor(props) {
        super(props)
        this.state = {
             name:"navya"
        }
    }
    changeHandler= ()=>{
        this.setState({name:"navya krishna"})
    }
    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div>
                <h2>name should update as {this.state.name} after onClick</h2>
                <button  type='button' onClick={this.changeHandler}>Click</button>
            </div>
        )
    }
}

export default Shouldupdate;
