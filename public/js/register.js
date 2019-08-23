var uname = $(".name");
var upwd = $(".pwd");
var rupwd = $(".rpwd");
var sex = $(".sex");
var email = $(".email");
var tel = $(".phone");
var msg = $(".msg");
var register = $(".register");
var unamereg = /^[a-zA-Z]\w{4,9}$/;
var upwdreg = /^[\w]{6,12}$/;
var sexreg = /^(男|女)$/;
var emailreg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
var telreg = /(1[3-9]\d{9}$)/;
uname.focus(function () {
  if (uname.val() === "") {
    $(".name + .msg").html("只能是字母数字下划线,并且以字母开头(5-10位)");
    $(".name + .msg").css({
      "color": "#aaa",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  }
});
uname.blur(function () {
  if (uname.val() !== "" && !unamereg.test(uname.val())) {
    $(".name + .msg").html("用户名格式不正确");
    $(".name + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (uname.val() === "") {
    $(".name + .msg").html("用户名不能为空");
    $(".name + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else {
    $(".name + .msg").html("");
  }
});
upwd.focus(function () {
  if (upwd.val() === "") {
    $(".pwd + .msg").html("只能是字母数字下划线(5-10位)");
    $(".pwd + .msg").css({
      "color": "#aaa",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  }
});
upwd.blur(function () {
  if (upwd.val() !== "" && !upwdreg.test(upwd.val())) {
    $(".pwd + .msg").html("密码格式不正确");
    $(".pwd + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (upwd.val() === "") {
    $(".pwd + .msg").html("密码不能为空");
    $(".pwd + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else {
    $(".pwd + .msg").html("");
  }
});
rupwd.focus(function () {
  if (rupwd.val() === "") {
    $(".rpwd + .msg").html("请重复输入密码");
    $(".rpwd + .msg").css({
      "color": "#aaa",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  }
});
rupwd.blur(function () {
  if (rupwd.val() !== "" && (rupwd.val() !== upwd.val())) {
    $(".rpwd + .msg").html("两次输入密码不一致");
    $(".rpwd + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (rupwd.val() === "") {
    $(".rpwd + .msg").html("重复密码不能为空");
    $(".rpwd + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else {
    $(".rpwd + .msg").html("");
  }
});
sex.focus(function () {
  if (sex.val() === "") {
    $(".sex + .msg").html("请输入性别男或女");
    $(".sex + .msg").css({
      "color": "#aaa",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  }
});
sex.blur(function () {
  if (sex.val() !== "" && sex.val() !== "人妖" && !sexreg.test(sex.val())) {
    $(".sex + .msg").html("性别只能是男或女哦!");
    $(".sex + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (sex.val() === "人妖") {
    $(".sex + .msg").html("╭(╯^╰)╮");
    $(".sex + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (sex.val() === "") {
    $(".sex + .msg").html("性别不能为空");
    $(".sex + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else {
    $(".sex + .msg").html("");
  }
});
email.focus(function () {
  if (email.val() === "") {
    $(".email + .msg").html("请输入邮箱");
    $(".email + .msg").css({
      "color": "#aaa",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  }
});
email.blur(function () {
  if (email.val() !== "" && !emailreg.test(email.val())) {
    $(".email + .msg").html("邮箱格式不正确");
    $(".email + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (email.val() === "") {
    $(".email + .msg").html("邮箱不能为空");
    $(".email + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else {
    $(".email + .msg").html("");
  }
});
tel.focus(function () {
  if (tel.val() === "") {
    $(".phone + .msg").html("请输入手机号码");
    $(".phone + .msg").css({
      "color": "#aaa",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  }
});
tel.blur(function () {
  if (tel.val() !== "" && !telreg.test(tel.val())) {
    $(".phone + .msg").html("手机号码格式不正确");
    $(".phone + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (tel.val() === "") {
    $(".phone + .msg").html("手机号码不能为空");
    $(".phone + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else {
    $(".phone + .msg").html("");
  }
});
$("div>input").blur(function () {
  if (msg.html() !== "") {
    $(".zyn-right-registration").css({
      "height": "730px",
      "top": "30px"
    });
    $(".wai").css({
      "height": "770px"
    })
  } else if ($(".rpwd + .msg").html() !== "" && $(".sex + .msg").html() !== "") {
    $(".zyn-right-registration").css({
      "height": "730px",
      "top": "30px"
    });
    $(".wai").css({
      "height": "770px"
    })
  }
});

function reg() {
  if (uname.val() === "" && upwd.val() === "" && rupwd.val() === "" && sex.val() === "" && email.val() === "" && tel.val() === "") {
    // $("input + .msg").html("用户名,密码,重复密码,性别,电子邮箱,手机号码不能为空");
    $(".name + .msg").html("用户名不能为空");
    $(".pwd + .msg").html("密码不能为空");
    $(".rpwd + .msg").html("重复密码不能为空");
    $(".sex + .msg").html("性别不能为空");
    $(".email + .msg").html("邮箱不能为空");
    $(".phone + .msg").html("手机号码不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".zyn-right-registration").css({
      "height": "730px",
      "top": "30px"
    });
    $(".wai").css({
      "height": "770px"
    });
    return;
  } else if (upwd.val() === "" && rupwd.val() === "" && sex.val() === "" && email.val() === "" && tel.val() === "") {
    $(".pwd + .msg").html("密码不能为空");
    $(".rpwd + .msg").html("重复密码不能为空");
    $(".sex + .msg").html("性别不能为空");
    $(".email + .msg").html("邮箱不能为空");
    $(".phone + .msg").html("手机号码不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".zyn-right-registration").css({
      "height": "730px",
      "top": "30px"
    });
    $(".wai").css({
      "height": "770px"
    });
    return;
  } else if (rupwd.val() === "" && sex.val() === "" && email.val() === "" && tel.val() === "") {
    $(".rpwd + .msg").html("重复密码不能为空");
    $(".sex + .msg").html("性别不能为空");
    $(".email + .msg").html("邮箱不能为空");
    $(".phone + .msg").html("手机号码不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".zyn-right-registration").css({
      "height": "730px",
      "top": "30px"
    });
    $(".wai").css({
      "height": "770px"
    });
    return;
  } else if (sex.val() === "" && email.val() === "" && tel.val() === "") {
    $(".sex + .msg").html("性别不能为空");
    $(".email + .msg").html("邮箱不能为空");
    $(".phone + .msg").html("手机号码不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (email.val() === "" && tel.val() === "") {
    $(".email + .msg").html("邮箱不能为空");
    $(".phone + .msg").html("手机号码不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (tel.val() === "") {
    $(".phone + .msg").html("手机号码不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (email.val() === "") {
    $(".email + .msg").html("邮箱不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (sex.val() === "") {
    $(".sex + .msg").html("性别不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (rupwd.val() === "") {
    $(".rpwd + .msg").html("重复密码不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (upwd.val() === "") {
    $(".pwd + .msg").html("密码不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (uname.val() === "") {
    $(".name + .msg").html("用户名不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if ((uname.val() !== "" && unamereg.test(uname.val())) && (upwd.val() !== "" && upwdreg.test(upwd.val())) && (rupwd.val() !== "" && (rupwd.val() === upwd.val())) && (sex.val() !== "" && sexreg.test(sex.val())) && (email.val() !== "" && emailreg.test(email.val())) && (tel.val() !== "" && telreg.test(tel.val()))) {
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:5050/users/reg",
      data: {
        uname: $(".name").val(),
        upwd: $(".pwd").val(),
        sex: $(".sex").val(),
        email: $(".email").val(),
        phone: $(".phone").val()
      },
      success: function (data) {
        console.log(data);
      }
    }).then(result => {
      console.log(result);
    });
    // console.log("注册成功");
    window.location.href = "http://127.0.0.1:5050/html/login.html";
  }
}