USE xz;
CREATE TABLE chat(
  id INT PRIMARY KEY AUTO_INCREMENT,
  q VARCHAR(255),
  a VARCHAR(255)
);
INSERT INTO  chat VALUES(null,"你好","你好");
INSERT INTO  chat VALUES(null,"你是谁","机器人");
INSERT INTO  chat VALUES(null,"再见","不送");