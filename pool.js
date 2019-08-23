//1:引入mysql库
const mysql = require("mysql");
//2:创建连接池
var pool = mysql.createPool({
    host: "47.95.225.57",
    user: "user",
    password: "user",
    database: "lg",
    port: 3306,
    connectionLimit: 20
});
//3:导出连接池对象
module.exports = pool;