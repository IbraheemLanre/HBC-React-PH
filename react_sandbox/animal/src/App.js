import "./App.css";
import React from "react";
import Result from "./components/Result";

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
    const bgColor = isEven ? "red" : "yellow";
    return (
      <div>
        <Result isEven={isEven} likes={this.state.likes} color={bgColor} />

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
