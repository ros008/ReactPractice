const path = require("path");

module.exports = {
  name: "word-relay-setting",
  mode: "development", // 실서비스에서는 production으로 변경해야한다.
  devtool: "eval", // 빠르게 하겠다.
  resolve: {
    extensions: [".js", ".jsx"],
  },

  // 중요
  entry: {
    app: ["./client"],
    // 이미 다른 파일이 불러오는 파일은 적을 필요 없다.
    // client에서 wordrelay 불러오니까 wordrelay는 적을 필요 없음.
    // resolve에 적으면 확장자 적을 필요 없음.
  }, // 입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, "dist"), // 현재폴더의 dist 폴더 경로
    filename: "app.js",
  }, //출력
};
