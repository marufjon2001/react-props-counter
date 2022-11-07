import React, { Component } from "react";

class Bcom extends Component {
  render() {
    const { bpluse, bminuse } = this.props;
    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "aqua",
          cursor: "pointer",
          marginTop: "20px",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <h2>B com</h2>
        <button style={{ width: "20px" }} onClick={bminuse}>
          -
        </button>
        <button style={{ width: "20px" }} onClick={bpluse}>
          +
        </button>
        <h1>{this.props.bval}</h1>
        <br />
        <br />
      </div>
    );
  }
}

export default Bcom;
