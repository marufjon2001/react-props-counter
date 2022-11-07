import React, { Component } from "react";
import First from "./FirstCom/First";
import Secound from "./Secoundcom/Secound";

export default class Index extends Component {
  state = {
    aval: 0,
    bval: 0,
    sval: 0,
    dval: 0,
  };
  allpluseBtn = () => {
    let { aval, bval, sval, dval } = this.state;
    aval++;
    bval++;
    sval++;
    dval++;

    this.setState({
      aval,
      bval,
      sval,
      dval,
    });
  };
  allminuseBtn = () => {
    let { aval, bval, sval, dval } = this.state;
    aval--;
    bval--;
    sval--;
    dval--;

    this.setState({
      aval,
      bval,
      sval,
      dval,
    });
  };
  // A component
  apluse = () => {
    let { aval } = this.state;
    aval++;
    this.setState({
      aval,
    });
  };
  aminuse = () => {
    let { aval } = this.state;
    aval--;
    this.setState({
      aval,
    });
  };
  // B component
  bpluse = () => {
    let { bval } = this.state;
    bval++;
    this.setState({
      bval,
    });
  };
  bminuse = () => {
    let { bval } = this.state;
    bval--;
    this.setState({
      bval,
    });
  };
  // S component
  spluse = () => {
    let { sval } = this.state;
    sval++;
    this.setState({
      sval,
    });
  };
  sminuse = () => {
    let { sval } = this.state;
    sval--;
    this.setState({
      sval,
    });
  };
  // D component
  dpluse = () => {
    let { dval } = this.state;
    dval++;
    this.setState({
      dval,
    });
  };
  dminuse = () => {
    let { dval } = this.state;
    dval--;
    this.setState({
      dval,
    });
  };
  render() {
    return (
      <div className="father" style={{ border: "1px", width: "100%" }}>
        <div className="top" style={{ marginLeft: "45%" }}>
          <button onClick={this.allminuseBtn}>-</button>
          <button onClick={this.allpluseBtn}>+</button>
        </div>
        <div
          className="bottom"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <First
            apluse={this.apluse}
            aminuse={this.aminuse}
            bpluse={this.bpluse}
            bminuse={this.bminuse}
            aval={this.state.aval}
            bval={this.state.bval}
          />
          <Secound
            sval={this.state.sval}
            dval={this.state.dval}
            spluse={this.spluse}
            sminuse={this.sminuse}
            dpluse={this.dpluse}
            dminuse={this.dminuse}
          />
        </div>
      </div>
    );
  }
}
