const React = require("react");
const { Module } = require("webpack");
const { Component } = React;

class WordRelay extends Component {
  state = {
    text: "Hello",
  };

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

module.export = WordRelay;
