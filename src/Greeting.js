import { Component } from "react";

class Greeting extends Component{

render() {
     return<p onClick={this.alert}> {this.props.name}</p>
}
 alert() {
    console.log('navya');
}
} export default Greeting;

