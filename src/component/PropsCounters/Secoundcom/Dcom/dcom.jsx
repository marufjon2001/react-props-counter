import React, { Component } from "react";

class Dcom extends Component {
  render() {
    const { dminuse, dpluse } = this.props;
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
        <h2>D com</h2>
        <button style={{ width: "20px" }} onClick={dminuse}>
          -
        </button>
        <button style={{ width: "20px" }} onClick={dpluse}>
          +
        </button>
        <h1>{this.props.dval}</h1>
        <br />
        <br />
      </div>
    );
  }
}

export default Dcom;
