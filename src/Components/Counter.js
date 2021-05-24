import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    console.log("Counter.js Constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("Counter.js componentDidMount");
  }

  componentDidUpdate() {
    console.log("Counter.js componentDidUpdate");
  }

shouldComponentUpdate(nextProps, nextState){
    // console.log('nextState', nextState)
    // return true
    // console.log(this.state.counter===nextState.count)
    if(this.state.counter===nextState.count){
        return false
    }
    
        return true
}


  //   componentWillUnmount() {
  //     console.log("Counter.js componentWillUnmount");
  //   }

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    console.log("Counter.js render");
    return (
      <div>
        <h2>Counter</h2>
        <h3>{this.state.count}</h3>

        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}
