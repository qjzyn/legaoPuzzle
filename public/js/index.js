/* 注册 */
var arr = ["dream", "123456", "123456", "男", "3749874@qq.com", "15689986356"];
var obj = [{
  "uname": "dream",
  "upwd": "123456",
  "rupwd": "123456",
  "email": "3749874@qq.com",
  "tel": "15689986356"
}, {
  "uname": "black",
  "upwd": "123456",
  "rupwd": "123456",
  "email": "3749874@qq.com",
  "tel": "15689986356"
}];
// 定义空数组arr存放每次input输入的值
var arr = [];
// 定义一个本地存储storage
var storage = localStorage.getItem("input-data");
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
/* register.click(function () {
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
}); */


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
    // 定义是否添加到数组的变量
    var flag = true;
    //判断数组是否存在输入框的值，如果存在则不添加
    if ($("input") != "") {

    }
    // arr.push(uname.val(), upwd.val(), rupwd.val(), sex.val(), email.val(), tel.val());
    alert("注册成功");
    console.log(arr);
    // window.location.href = "http://127.0.0.1:5050/html/login.html";
  } else {
    alert("注册失败")
  }
}

/* 登录 */
var uName = $(".user");
var uPwd = $(".user-pwd");
var login = $(".login");
uName.focus(function () {
  if (uName.val() === "") {
    $(".user + .msg").html("只能是字母数字下划线,并且以字母开头(5-10位)");
    /*$(".user + .msg").css({
      "color": "#aaa",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    if (uName.val() === "" && $(".user-pwd + .msg").html() === "") {
      $(".main-right").css({
        "height": "375px"
      });
    }*/
    return;
  }
});
uName.blur(function () {
  if (uName.val() !== "" && !unamereg.test(uName.val())) {
    $(".user + .msg").html("用户名格式不正确");
    /*$(".user + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    });*/
    return;
  } else if (uName.val() === "") {
    $(".user + .msg").html("用户名不能为空");
    /*$(".user + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".main-right").css({
      "height": "375px"
    });*/
    return;
  } /*else {
    $(".user + .msg").html("&nbsp;");
  }*/
});
uPwd.focus(function () {
  if (uPwd.val() === "") {
    $(".user-pwd + .msg").html("只能是字母数字下划线(5-10位)");
    /*$(".user-pwd + .msg").css({
      "color": "#aaa",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });*/
    if (uPwd.val() === "" && $(".user + .msg").html() === "") {
      /*$(".main-right").css({
        "height": "375px"
      });*/
    }
    return;
  }
});
uPwd.blur(function () {
  if (uPwd.val() !== "" && !upwdreg.test(uPwd.val())) {
    $(".user-pwd + .msg").html("密码格式不正确");
    /*$(".user-pwd + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".main-right").css({
      "height": "375px"
    });*/
    return;
  } else if (uPwd.val() === "") {
    $(".user-pwd + .msg").html("密码不能为空");
    /*$(".user-pwd + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".main-right").css({
      "height": "375px"
    });*/
    return;
  } /*else {
    $(".user-pwd + .msg").html("&nbsp;");
  }*/
});
$(".main-right>input").blur(function () {
  if (uName.val() === "" && uPwd.val() === "") {
    /* $(".user + .msg").html("用户名不能为空");
    $(".user-pwd + .msg").html("密码不能为空");
    $("input .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    }); */
//  $(".main-right").css({
//    "height": "410px"
//  });
    return;
  } /*else {
    $(".msg").html("&nbsp;");
  }*/
});
if ($(".user + .msg").html() !== "" && $(".user-pwd + .msg").html() !== "") {
  /*$(".main-right").css({
    "height": "375px"
  });*/
} else if (($(".user + .msg").html() === "" &&
    $(".user-pwd + .msg").html() !== "") || ($(".user + .msg").html() !== "" &&
    $(".user-pwd + .msg").html() === "")) {
  /*$(".main-right").css({
    "height": "375px"
  });*/
}

/* login.click(function () {
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
}); */

$(".slider_box").hide("fast", function () {

});


function Login() {
  if (uName.val() === "" && uPwd.val() === "") {
    $(".user + .msg").html("用户名不能为空");
    $(".user-pwd + .msg").html("密码不能为空");
    /*$("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".main-right").css({
      "height": "410px"
    });*/
    return;
  } else if (uName.val() === "") {
    $(".user + .msg").html("用户名不能为空");
    /*$("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".main-right").css({
      "height": "345px"
    });*/
    return;
  } else if (uPwd.val() === "") {
    $(".user-pwd + .msg").html("密码不能为空");
    /*$("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".main-right").css({
      "height": "345px"
    });*/
    return;
  } else if ((uName.val() !== "" && uName.val() === arr[0]) && (uPwd.val() !== "" && uPwd.val() === arr[1])) {
    $(".slider_box").show(1000 / 16, function () {
      /*$(".slider_box").css({
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
      });*/
    });
    // alert("登录成功");
    // window.location.href = "http://127.0.0.1:5050/index.html";
  } else {
    alert("用户名或密码错误");
    console.log(arr);
  }
}

// 滑块拼图验证的显示与隐藏
/* $(".slider_box").show(4000, function () {
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
}); */

/* $(".slider_box").hide("fast", function () {

}); */