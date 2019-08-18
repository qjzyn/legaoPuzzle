// 使用express构建web服务器
const express = require('express');
const mysql = require("mysql");
const cors = require('cors');
const http = require('http');
const url = require('url');
const bodyParser = require('body-parser');
const session = require('express-session');
/*引入路由模块*/
// 配置数据库连接池: 提高数据效率
var pool = mysql.createPool({
  host: "127.0.0.1", //数据库地址
  user: "root", //数据库用户名
  password: "", //数据库密码
  port: 3306, //数据库端口
  database: "lg", //数据库名称
  connectionLimit: 15 //连接数量
});
http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json;charset=utf-8"
  });
  if (req.url !== "/index.html") {
    console.log(url.parse(req.url, true).query);
  }
  res.write(res);
  res.end();
}).listen(5050);
var app = express();
console.log("正在监听端口5050 " + "http://127.0.0.1:5050");
// 配置跨域请求
app.use(cors({
  // 允许跨域访问程序地址列表
  origin: ["http://127.0.0.1:8080",
    "http://localhost:8080"
  ],
  credentials: true //请求验证
}));
// 配置session模块
app.use(session({
  secret: "128位字符串", //安全字符串
  resave: true, //请求时更新数据
  saveUninitialized: true //保存初始数据
}));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended: false
}));
//托管静态资源到public目录下
app.use(express.static('public'));
/* app.get("/", (req, res) => {
  var url = "http://127.0.0.1:5050/index.html";
  pool.query(url, (err, result) => {
    if (err) throw err;
  })
}); */
app.get("/login", (req, res) => {
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //2:sql:查询sql语句
  //数据库 库名 表名 列名 小写字母
  var sql = "SELECT id FROM lg_user";
  sql += " WHERE uname = ? AND upwd=md5(?)";
  // 3:json:{code:1,msg:"登录成功"}
  pool.query(sql, [uname, upwd], (err, result) => {
    //执行sql语句回调函数
    if (err) throw err;
    if (result.length == 0) {
      res.send({
        code: -1,
        msg: "用户名或密码有误"
      });
    } else {
      //1:将登录成功凭据保存session
      req.session.uid = result[0].id;
      //2:将成功消息发送脚手架  
      res.send({
        code: 1,
        msg: "登录成功"
      })
    }
  })
});