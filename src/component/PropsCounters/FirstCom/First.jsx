import React, { Component } from "react";
import Bcom from "./Bcom/bcom";
import Acom from "./Acom/acom";

export default class First extends Component {
  render() {
    const { aval, bval, apluse, aminuse, bpluse, bminuse } = this.props;
    return (
      <div>
        <h2>1-Component</h2>
        <br />
        <Acom aval={aval} apluse={apluse} aminuse={aminuse} />
        <Bcom bval={bval} bpluse={bpluse} bminuse={bminuse} />
      </div>
    );
  }
}
