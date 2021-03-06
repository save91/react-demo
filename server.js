const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const compiler = webpack(require("./webpack.config.js"));
const express = require("express");
const app = express();

app.use(webpackDevMiddleware(compiler, {
    mode: 'development'
}));
app.use(express.static("dist"));

app.get("/api/hello-world", (req, res) => {
    res.json({text: 'Hello world'});
});

app.listen(3000, () => console.log("Example app listening on port 3000!"))