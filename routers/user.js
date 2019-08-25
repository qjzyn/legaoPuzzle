const express = require("express");
var router = express.Router();
const mysql = require("mysql");
var pool = mysql.createPool({
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "",
  database: "lg",
  connectionLimit: 20
});
// 用户注册
router.post("/reg", (req, res) => {
  var obj = req.body;
  console.log(req.body);
  var $uname = obj.uname;
  var $upwd = obj.upwd;
  var $sex = obj.sex;
  var $email = obj.email;
  var $tel = obj.tel;
  var sql = "INSERT INTO lg_user SET uname=?,upwd=?,sex=?,email=?,phone=?";
  if (!obj.uname) {
    res.send({
      code: -1,
      msg: "用户名不能为空"
    });
    return;
  }
  if (!obj.upwd) {
    res.send({
      code: -1,
      msg: "密码不能为空"
    });
    return;
  }
  if (!obj.sex) {
    res.send({
      code: -1,
      msg: "性别不能为空"
    });
    return;
  }
  if (!obj.email) {
    res.send({
      code: -1,
      msg: "电子邮箱不能为空"
    });
    return;
  }
  if (!obj.tel) {
    res.send({
      code: -1,
      msg: "手机号码不能为空"
    });
    return;
  }
  pool.query(sql, [$uname, $upwd, $sex, $email, $tel], (err, result) => {
    if (err) throw err;
    console.log(result);
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
});

// 用户登录
router.post("/login", (req, res) => {
  var uname = req.body.uname;
  var upwd = req.body.upwd;
  var sql = 'SELECT * FROM lg_user WHERE uname=? AND upwd=?';
  pool.query(sql, [uname, upwd], (err, result) => {
    if (err) throw err;
    console.log(result);
    // 判断长度是否大于0
    if (result.length > 0) {
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
// 导出路由器
module.exports = router;
// 导出连接池对象
// module.exports = pool;