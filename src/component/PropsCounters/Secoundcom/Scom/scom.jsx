import React, { Component } from "react";

class Scom extends Component {
  render() {
    const { spluse, sminuse } = this.props;
    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "aqua",
          cursor: "pointer",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <h2>S com</h2>
        <button style={{ width: "20px" }} onClick={sminuse}>
          -
        </button>
        <button style={{ width: "20px" }} onClick={spluse}>
          +
        </button>
        <h1>{this.props.sval}</h1>
        <br />
        <br />
      </div>
    );
  }
}

export default Scom;
