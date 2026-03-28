import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <h1> I am class component </h1>
        <button onClick={this.increment}>PLUS</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>MINUS</button>
      </>
    );
  }
}

export default App;
