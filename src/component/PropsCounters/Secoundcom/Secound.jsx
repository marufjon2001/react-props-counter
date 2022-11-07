import React, { Component } from "react";
import Scom from "./Scom/scom";
import Dcom from "./Dcom/dcom";

class Secound extends Component {
  render() {
    const { sval, dval, spluse, sminuse, dpluse, dminuse } = this.props;
    return (
      <div>
        <h2>2-Component</h2>
        <br />
        <Scom sval={sval} spluse={spluse} sminuse={sminuse} />
        <Dcom dval={dval} dpluse={dpluse} dminuse={dminuse} />
      </div>
    );
  }
}

export default Secound;
