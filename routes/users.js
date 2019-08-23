const express = require('express');
const router = express.Router();
const pool = require("../pool");
// 登录
router.get("/login", (req, res) => {
  console.log(req.query)
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  var sql = "SELECT * FROM lg_user WHERE uname=? AND upwd=?";
  pool.query(sql, [uname, upwd], (err, result) => {
    // console.log(result);
    if (err) {
      throw err
    };
    if (result.length > 0) {
      res.send({
        code: 200,
        msg: "登录成功"
      });
    } else {
      res.send({
        code: 500,
        msg: "登录失败"
      });
    }
  })
})
// 注册
router.get("/reg", (req, res) => {
  var obj = req.query;
  console.log(req.query);
  var sql = "INSERT INTO lg_user SET ?";
  pool.query(sql, [obj], (err, result) => {
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
});
router.get("/user", (req, res) => {
  var sql = "SELECT * FROM lg_user"
  pool.query(sql, (req, result) => {
    res.send(result);
  });
})
module.exports = router;