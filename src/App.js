import React, { Component } from "react";
import "./App.css";
// import Counter from "./Components/Counter";
import Counter1 from "./Components/Counter1";

export default class App extends Component {
  constructor(props) {
    console.log("App.js Constructor");
    super(props);
    this.state = {
      mount: true,
      c:2
    };
  }

  componentDidMount() {
    console.log("App.js componentDidMount");
  }
  // switch = () => {
  //   this.setState({
  //     mount: !this.state.mount,
  //   });
  // };

  render() {
    console.log("App.js render");
    return (
      <div className="App">
        <h1>React LifeCycle methods</h1>
        {/* <button onClick={this.switch}>switch</button>
        {this.state.mount ? <Counter /> : null} */}
        {/* <Counter /> */}
        <Counter1 c={this.state.c} />
      </div>
    );
  }
}
