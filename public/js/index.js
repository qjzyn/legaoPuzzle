/* 注册 */
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
/* if ($(".name").attr("display", "inline-block")) {
  $(".msg").css({
    "display": "block",
    "border-radius": "5px",
  })
} */
uname.focus(function () {
  if (uname.val() === "") {
    $(".name + .msg").html("只能是字母数字下划线,并且以字母开头(5-10位)");
    $(".name + .msg").css({
      "color": "#aaa",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  }
});
uname.blur(function () {
  if (uname.val() !== "" && !unamereg.test(uname.val())) {
    $(".name + .msg").html("用户名格式不正确");
    $(".name + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  } else if (uname.val() === "") {
    $(".name + .msg").html("用户名不能为空");
    $(".name + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    })
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
    })
  }
});
upwd.blur(function () {
  if (upwd.val() !== "" && !upwdreg.test(upwd.val())) {
    $(".pwd + .msg").html("密码格式不正确");
    $(".pwd + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  } else if (upwd.val() === "") {
    $(".pwd + .msg").html("密码不能为空");
    $(".pwd + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    })
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
    })
  }
});
rupwd.blur(function () {
  if (rupwd.val() !== "" && (rupwd.val() !== upwd.val())) {
    $(".rpwd + .msg").html("两次输入密码不一致");
    $(".rpwd + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  } else if (rupwd.val() === "") {
    $(".rpwd + .msg").html("重复密码不能为空");
    $(".rpwd + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    })
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
    })
  }
});
sex.blur(function () {
  if (sex.val() !== "" && sex.val() !== "人妖" && !sexreg.test(sex.val())) {
    $(".sex + .msg").html("性别非男即女,难不成你是人妖?");
    $(".sex + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  } else if (sex.val() === "人妖") {
    $(".sex + .msg").html("哼╭(╯^╰)╮人妖哪里跑");
    $(".sex + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  } else if (sex.val() === "") {
    $(".sex + .msg").html("性别不能为空");
    $(".sex + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    })
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
    })
  }
});
email.blur(function () {
  if (email.val() !== "" && !emailreg.test(email.val())) {
    $(".email + .msg").html("邮箱格式不正确");
    $(".email + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  } else if (email.val() === "") {
    $(".email + .msg").html("邮箱不能为空");
    $(".email + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    })
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
    })
  }
});
tel.blur(function () {
  if (tel.val() !== "" && !telreg.test(tel.val())) {
    $(".phone + .msg").html("手机号码格式不正确");
    $(".phone + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  } else if (tel.val() === "") {
    $(".phone + .msg").html("手机号码不能为空");
    $(".phone + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    })
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
  }
});
register.click(function () {
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
  } else {

  }
});
// 登录
var uName = $(".user");
var uPwd = $(".user-pwd");
var login = $(".login");
uName.focus(function () {
  if (uName.val() === "") {
    $(".user + .msg").html("只能是字母数字下划线,并且以字母开头(5-10位)");
    $(".user + .msg").css({
      "color": "#aaa",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  }
});
uName.blur(function () {
  if (uName.val() !== "" && !unamereg.test(uName.val())) {
    $(".user + .msg").html("用户名格式不正确");
    $(".user + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  } else if (uName.val() === "") {
    $(".user + .msg").html("用户名不能为空");
    $(".user + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  } else {
    $(".user + .msg").html("");
  }
});
uPwd.focus(function () {
  if (uPwd.val() === "") {
    $(".user-pwd + .msg").html("只能是字母数字下划线(5-10位)");
    $(".user-pwd + .msg").css({
      "color": "#aaa",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  }
});
uPwd.blur(function () {
  if (uPwd.val() !== "" && !upwdreg.test(uPwd.val())) {
    $(".user-pwd + .msg").html("密码格式不正确");
    $(".user-pwd + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  } else if (uPwd.val() === "") {
    $(".user-pwd + .msg").html("密码不能为空");
    $(".user-pwd + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    })
  } else {
    $(".user-pwd + .msg").html("");
  }
});
login.click(function () {
  if (uName.val() === "" && uPwd.val() === "") {
    $(".user + .msg").html("用户名不能为空");
    $(".user-pwd + .msg").html("密码不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
  } else {

  }
});



$(".slider_box").show(4000, function () {
  $(".slider_box").css({
    "width": "80%",
    "height": "28%",
    "position": "absolute",
    "top": "66.67%",
    "left": "10%",
    "background-color": "rgba(221, 221, 221, 0.75)",
    "z-index": "20",
  });
  $(".slidercaptcha").css({
    "height": "260px"
  });
  $("body").css({
    "position": "relative"
  });
});
/* $(".slider_box").hide("fast", function () {

}); */