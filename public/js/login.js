/* 登录 */
var msg = $(".msg");
var register = $(".register");
var unamereg = /^[a-zA-Z]\w{4,9}$/;
var upwdreg = /^[\w]{6,12}$/;
var sexreg = /^(男|女)$/;
var emailreg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
var telreg = /(1[3-9]\d{9}$)/;
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
    });
    if (uName.val() === "" && $(".user-pwd + .msg").html() === "") {
      $(".main-right").css({
        "height": "375px"
      });
    }
    return;
  }
});
uName.blur(function () {
  if (uName.val() !== "" && !unamereg.test(uName.val())) {
    $(".user + .msg").html("用户名格式不正确");
    $(".user + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    return;
  } else if (uName.val() === "") {
    $(".user + .msg").html("用户名不能为空");
    $(".user + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".main-right").css({
      "height": "375px"
    });
    return;
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
    });
    if (uPwd.val() === "" && $(".user + .msg").html() === "") {
      $(".main-right").css({
        "height": "375px"
      });
    }
    return;
  }
});
uPwd.blur(function () {
  if (uPwd.val() !== "" && !upwdreg.test(uPwd.val())) {
    $(".user-pwd + .msg").html("密码格式不正确");
    $(".user-pwd + .msg").css({
      "color": "#f00",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".main-right").css({
      "height": "375px"
    });
    return;
  } else if (uPwd.val() === "") {
    $(".user-pwd + .msg").html("密码不能为空");
    $(".user-pwd + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".main-right").css({
      "height": "375px"
    });
    return;
  } else {
    $(".user-pwd + .msg").html("");
  }
});
$(".main-right>input").blur(function () {
  if (uName.val() === "" && uPwd.val() === "") {
    $(".main-right").css({
      "height": "410px"
    });
    return;
  } else {
    $(".msg").html("");
  }
});
if ($(".user + .msg").html() !== "" && $(".user-pwd + .msg").html() !== "") {
  $(".main-right").css({
    "height": "375px"
  });
} else if (($(".user + .msg").html() === "" &&
    $(".user-pwd + .msg").html() !== "") || ($(".user + .msg").html() !== "" &&
    $(".user-pwd + .msg").html() === "")) {
  $(".main-right").css({
    "height": "375px"
  });
}

$(".slider_box").hide("fast", function () {

});
var user = [{
  "uanme": ""
}];

function Login() {
  if (uName.val() === "" && uPwd.val() === "") {
    $(".user + .msg").html("用户名不能为空");
    $(".user-pwd + .msg").html("密码不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".main-right").css({
      "height": "410px"
    });
    return;
  } else if (uName.val() === "") {
    $(".user + .msg").html("用户名不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".main-right").css({
      "height": "345px"
    });
    return;
  } else if (uPwd.val() === "") {
    $(".user-pwd + .msg").html("密码不能为空");
    $("input + .msg").css({
      "color": "#f00",
      "display": "block",
      "background-color": "#eee",
      "border-radius": "10px"
    });
    $(".main-right").css({
      "height": "345px"
    });
    return;
  } else if ((uName.val() !== "" && upwdreg) && (uPwd.val() !== "" && upwdreg.test(uPwd.val()))) {
    $(".slider_box").show(1000 / 16, function () {
      $(".slider_box").css({
        "width": "84%",
        "height": "100%",
        "position": "absolute",
        "top": "0",
        "left": "8%",
        "background-color": "rgba(170, 170, 170, 0.75)",
        "z-index": "20",
        "padding": "10px 0"
      });
      $(".form-row").css({
        "position": "absolute",
        "top": "35%",
        "left": "40%"
      });
      $(".slidercaptcha").css({
        "height": "260px"
      });
      $("body").css({
        "position": "relative"
      });
    });
    $.ajax({
      type: "get",
      url: "http://127.0.0.1:5050/users/login",
      data: {
        uname: $(".user").val(),
        upwd: $(".user-pwd").val()
      },
      success: function (data) {
        console.log(data);
      }
    }).then(result => {
      console.log(result);
    });
    // alert("登录成功");
    // window.location.href = "http://127.0.0.1:5050/index.html";
  } else {
    alert("用户名或密码错误");
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
}); 

 $(".slider_box").hide("fast", function () {

}); */