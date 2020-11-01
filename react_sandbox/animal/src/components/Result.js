import { React, Component } from "react";

class Result extends Component {
  render() {
    const { isEven, likes, color } = this.props;
    return (
      <div
        style={{
          backgroundColor: color,
        }}
        className={isEven ? "even" : "odd"}
      >
        <h1>Total likes: {likes}</h1>
      </div>
    );
  }
}

export default Result;
