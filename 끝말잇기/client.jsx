const React = require("react");
const ReactDom = require("react-dom");
// script로 불러오던 것 대신에 node식으로

const WordRelay = require("./WordRelay");

ReactDom.render(<WordRelay />, document.querySelector("#root"));
