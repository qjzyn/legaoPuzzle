function login() {
  // 1.获取xhr异步对象
  var xhr = new XMLHttpRequest();
  // 4.绑定监听,获取响应
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status200) {
      var result = xhr.responseText;
      if (result == 1) {
        alert("登录成功");
      } else if (result == 0) {
        alert("用户名或密码错误")
      } else {
        alert(result);
      }
    }
  }
  if (uname.value.length == 0) {
    alert("用户名不能为空");
    return;
  }
  if (upwd.value.length == 0) {
    alert("密码不能为空");
    return;
  }
  // 2.打开连接
  xhr.open("get", "/login", true);
  // 3.发送请求
  xhr.send();
}