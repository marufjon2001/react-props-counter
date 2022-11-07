import React, { Component } from "react";

class Acom extends Component {
  render() {
    const { apluse, aminuse } = this.props;
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
        <h2>A com</h2>
        <button style={{ width: "20px" }} onClick={aminuse}>
          -
        </button>
        <button style={{ width: "20px" }} onClick={apluse}>
          +
        </button>
        <h1>{this.props.aval}</h1>
        <br />
        <br />
      </div>
    );
  }
}

export default Acom;
