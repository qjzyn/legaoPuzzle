const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const session = require("express-session");
// 引入用户路由器
const userRouter = require("./routers/user.js");
var app = express();
app.listen(5050);
app.use(express.static("public"));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended: false //不是第三方的qs模块,而是使用querystring模块
}));
// 使用路由器
app.use("/user", userRouter);


/* app.use(cors({
  orgin: [
    "http://127.0.0.1:5050",
    "http://localhost:5050"
  ],
  credentials: true
}));
app.use(session({
  secret: "128位字符串",
  resave: true,
  saveUninitialized: true
})); 
app.get("/login", (req, res) => {
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  var sql = 'SELECT * FROM lg_user WHERE uname=? AND upwd=?';
  pool.query(sql, [uname, upwd], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({
        code: 1,
        msg: "登录成功"
      });
    } else {
      res.send({
        code: -1,
        msg: "用户名或密码错误"
      });
    }
  });
});
app.get("/reg", (req, res) => {
  var obj = req.query;
  console.log(req.query);
  var sql = "INSERT INTO lg_user SET?"
  pool.query(sql, [], (req, res) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({
        code: 1,
        msg: "注册成功"
      });
    } else {
      res.send({
        code: -1,
        msg: "注册失败"
      });
    }
  });
}); */