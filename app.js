const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//指定静态目录  public 
app.use(express.static("public"));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended: false //不是第三方的qs模块,而是使用querystring模块
}));
//配置跨域模块那个域名跨域
//origin允许跨域域名列表
//credentials跨域允许保存session
app.use(cors({
  origin: ["http://localhost:5050"],
  credentials: true
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);

//监听 5050
app.listen(5050, function () {
  console.log("http://127.0.0.1:5050");
});
module.exports = app;