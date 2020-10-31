import "./App.css";
import React from "react";

class App extends React.Component {
  state = {
    likes: 0,
  };

  increase = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  decrease = () => {
    this.setState({
      likes: this.state.likes - 1,
    });
  };

  reset = () => {
    this.setState({
      likes: 0,
    });
  };

  render() {
    const isEven = this.state.likes % 2 === 0;
    return (
      <div
        style={{
          backgroundColor: isEven ? "red" : "yellow",
        }}
        className={isEven ? "even" : "odd"}
      >
        <h1>Total likes: {this.state.likes}</h1>
        <button id="increase-btn" onClick={this.increase}>
          Increase
        </button>
        <button id="decrease-btn" onClick={this.decrease}>
          Decrease
        </button>
        <button id="rest-btn" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
