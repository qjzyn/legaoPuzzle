#创建数据库lg
SET NAMES UTF8;
DROP DATABASE IF EXISTS lg;
CREATE DATABASE lg CHARSET=UTF8;
USE lg;

#创建用户表lg_user
CREATE TABLE lg_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32) NOT NULL,
  upwd VARCHAR(32) NOT NULL,
  email VARCHAR(64) NOT NULL,
  phone VARCHAR(11) NOT NULL,
  age INT(2) NOT NULL
);
#插入用户数据
INSERT INTO lg_user(uid,uname,upwd,email,phone,age)
VALUES
(1,'Tom',123,'Tom@163.com',15687062346,20),
(2,'Mary',123,'Mary@163.com',15687062341,20),
(3,'Mar',123,'Mar@163.com',15687062371,20);