import React, { Component } from 'react'

export class PracticeLifecycle extends Component {

    constructor(props) {
        super(props)
        this.state = {name:"navya"  
        };
    }
    componentDidMount(){
     setInterval(()=>{this.setState({name:"navya krishna"})},2000)   
     };
     getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML= "the name before update was "+prevState.name
     }
    componentDidUpdate(){
        document.getElementById("div").innerHTML= "the updated name is "+this.state.name;
    }

    render() {
        return (
            <div>
                <h2>my name becomes {this.state.name} in 2 sec</h2>
                <div id="div1"></div>
                <div id="div"></div>
            </div>
        )
    }
}

export default PracticeLifecycle;
