import React from 'react';
import {Link} from 'react-router-dom';

import LeftArrow from '../../assets/left-arrow.png';

class Car extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red',
      year: '2022',
    };
  }

  // The componentDidMount() method is called after the component is rendered.
  componentDidMount() {
    setTimeout(() => {
      this.setState({color: 'orange'});
    }, 3000);
  }

  // This method is used to stop(false) or continue(true) component rendering/updating
  shouldComponentUpdate() {
    return true;
  }

  // In method you have access to the props and state before the update,
  // meaning that even after the update, you can check what the values were before the update.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById('div1').innerHTML =
      'Before the update, the color was ' + prevState.color;
  }

  // This method is called after the component is updated in the DOM.
  componentDidUpdate() {
    document.getElementById('div2').innerHTML =
      'The updated color is ' + this.state.color;
  }

  changeColor = () => {
    this.setState({color: 'blue'});
  };

  render() {
    return (
      <>
        <Link to="/" className="text-left d-flex mt-2">
          <img
            src={LeftArrow}
            alt="go back"
            style={{width: '2%', marginRight: '10px'}}
          />
          Go Back
        </Link>
        <h1 className="display-4 mb-3">Class Components</h1>

        <p className="text-left text-secondary mb-4">
          Components come in two types, <strong>Class components</strong> and{' '}
          <strong>Function components</strong>. <br />
          When creating a React component, the component's name must start with an
          upper case letter. The component has to include the extends React.Component
          statement, this statement creates an inheritance to React.Component, and
          gives your component access to React.Component's functions. <br />
          The component also requires a render() method, this method returns HTML.
          This example is illustration of{' '}
          <strong>lifecycle methods of component</strong>.
        </p>

        <section className="example-section">
          <h1>My {this.state.brand}</h1>
          <p>
            It is a{' '}
            <div style={{color: this.state.color}} className="d-inline">
              {this.state.color}
            </div>{' '}
            {''}
            {this.state.model} {''}
            from {this.state.year}.
          </p>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={this.changeColor}
          >
            Change color
          </button>
          <div id="div1"></div>
          <div id="div2"></div>
        </section>
      </>
    );
  }
}

export default Car;
