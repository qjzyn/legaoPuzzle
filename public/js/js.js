/**
 * Created by Administrator on 2015/12/31.
 */
var width = $(".bannerbox").width();
var i = -1;
var timer = 0;
$(document).ready(function () {
    move();
    timer = setInterval("move()", 3000);
    $(".bannerbox ul li").hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval("move()", 3000);
    })
    $('.nav dl dd').click(function () {
        var ddIndex = $(this).index() - 1;
        i = ddIndex;
        move();
    })
})

function move() {
    i++;
    $('.baner-01-a').css({
        "top": "100px",
        opacity: 0
    });
    $('.baner-01-b').css({
        "top": "400px",
        opacity: 0
    });
    $('.banner2-02,.banner2-03').css({
        opacity: 0
    });
    $('.banner2-01').css({
        opacity: 0,
        "left": "-100px"
    });
    $('.banner3-04').css({
        opacity: 0,
        "bottom": "100px"
    });
    $('.banner3-01').css({
        opacity: 0
    });
    $('.banner3-02').css({
        opacity: 0
    });
    $('.banner3-03').css({
        opacity: 0
    });
    if (i >= 3) {
        i = 0;
    }
    if (i < 3) {
        if (i == 0) {
            //$('.fst-li').fadeIn(100).siblings().fadeOut(100);
            $('.nav dl dd').eq(i).addClass('bg').siblings().removeClass('bg');
            $('.bannerbox ul li').eq(i).fadeIn(100).siblings().fadeOut();
            $('.baner-01-a').animate({
                "top": "174px",
                opacity: 1
            }, 450, function () {
                $('.baner-01-b').animate({
                    "top": "400px",
                    opacity: 1
                }, 450)
            });
        }
        if (i == 1) {
            //$(".sec-li").fadeIn(100).siblings().fadeOut(100);
            $('.nav dl dd').eq(i).addClass('bg').siblings().removeClass('bg');
            $('.bannerbox ul li').eq(i).fadeIn(100).siblings().fadeOut();
            $('.banner2-02').animate({
                opacity: 1
            }, 300, function () {
                $('.banner2-03').animate({
                    opacity: 1
                }, 300, function () {
                    $('.banner2-01').animate({
                        opacity: 1,
                        "left": 0
                    }, 300);
                });
            });
        }
        if (i == 2) {
            $('.nav dl dd').eq(i).addClass('bg').siblings().removeClass('bg');
            $('.bannerbox ul li').eq(i).fadeIn(100).siblings().fadeOut();
            $('.banner3-04').animate({
                opacity: 1,
                "bottom": "0"
            }, 225, function () {
                $('.banner3-01').animate({
                    opacity: 1,
                    "margin-left": "-360px"
                }, 225, function () {
                    $('.banner3-02').animate({
                        opacity: 1,
                        "margin-left": "-305px"
                    }, 225, function () {
                        $('.banner3-03').animate({
                            opacity: 1,
                            "margin-left": "-107px"
                        }, 225);
                    });
                });
            });
        }
    }
}
/// 拼图游戏第一张图片
$(function () {
    $.ajax({
        url: "http://127.0.0.1:5050/users/game",
        type: "get",
        dataType: "json",
        success: function (data) {
            // console.log(data);
        }

    }).then(result => {
        var p = result[0];
        var {
            lid,
            img,
            game_id
        } = p;
        // console.log(p);
        var html = `<img src="${img}" />
						<div class="box-content">
							<h3 class="title">家庭2</h3>
							<span class="post"><a href="../lib/Puzzle_game/index.html" style="text-decoration: none;">
									<div class="post_btn" style="margin-top: 15px;font-size: 20px;color: #fff;">
										开始拼图
									</div>
								</a></span>
                        </div>`;
        document.getElementById("img01").innerHTML = html;

    })
}());
// 拼图游戏第二张图片
$(function () {
    $.ajax({
        url: "http://127.0.0.1:5050/users/game",
        type: "get",
        dataType: "json",
        success: function (data) {
            // console.log(data);
        }

    }).then(result => {
        var p = result[1];
        var {
            lid,
            img,
            game_id
        } = p;
        // console.log(p);
        var html = `<img src="${img}" />
						<div class="box-content">
							<h3 class="title">乐高玩具总动员4</h3>
							<span class="post"><a href="../lib/Puzzle_game/index.html" style="text-decoration: none;">
									<div class="post_btn" style="margin-top: 15px; font-size: 20px;color: #fff;">
										开始拼图
									</div>
								</a></span>
						</div>`;
        document.getElementById("img02").innerHTML = html;

    })
}());
// 拼图游戏第三张图片
$(function () {
    $.ajax({
        url: "http://127.0.0.1:5050/users/game",
        type: "get",
        dataType: "json",
        success: function (data) {
            // console.log(data);
        }

    }).then(result => {
        var p = result[2];
        var {
            lid,
            img,
            game_id
        } = p;
        // console.log(p);
        var html = `<img src="${img}" />
						<div class="box-content">
							<h3 class="title">乐高电影</h3>
							<span class="post"><a href="../lib/Puzzle_game/index.html" style="text-decoration: none;">
									<div class="post_btn" style="margin-top: 15px; font-size: 20px;color: #fff;">
										开始拼图
									</div>
								</a></span>
						</div>`;
        document.getElementById("img03").innerHTML = html;

    })
}());
// 拼图游戏第四张图片
$(function () {
    $.ajax({
        url: "http://127.0.0.1:5050/users/game",
        type: "get",
        dataType: "json",
        success: function (data) {
            // console.log(data);
        }

    }).then(result => {
        var p = result[3];
        var {
            lid,
            img,
            game_id
        } = p;
        // console.log(p);
        var html = `<img src="${img}" />
						<div class="box-content">
							<h3 class="title">星球大战</h3>
							<span class="post"><a href="../lib/Puzzle_game/index.html" style="text-decoration: none;">
									<div class="post_btn" style="margin-top: 15px; font-size: 20px;color: #fff;">
										开始拼图
									</div>
								</a></span>
						</div>`;
        document.getElementById("img04").innerHTML = html;

    })
}());
// 拼图游戏第五张图片
$(function () {
    $.ajax({
        url: "http://127.0.0.1:5050/users/game",
        type: "get",
        dataType: "json",
        success: function (data) {
            // console.log(data);
        }

    }).then(result => {
        var p = result[4];
        var {
            lid,
            img,
            game_id
        } = p;
        // console.log(p);
        var html = `<img src="${img}" />
						<div class="box-content">
							<h3 class="title">忍者</h3>
							<span class="post"><a href="../lib/Puzzle_game/index.html" style="text-decoration: none;">
									<div class="post_btn" style="margin-top: 15px; font-size: 20px;color: #fff;">
										开始拼图
									</div>
								</a></span>
						</div>`;
        document.getElementById("img05").innerHTML = html;

    })
}());
// 拼图游戏第六张图片
$(function () {
    $.ajax({
        url: "http://127.0.0.1:5050/users/game",
        type: "get",
        dataType: "json",
        success: function (data) {
            // console.log(data);
        }

    }).then(result => {
        var p = result[5];
        var {
            lid,
            img,
            game_id
        } = p;
        // console.log(p);
        var html = `<img src="${img}" />
						<div class="box-content">
							<h3 class="title">城市</h3>
							<span class="post"><a href="../lib/Puzzle_game/index.html" style="text-decoration: none;">
									<div class="post_btn" style="margin-top: 15px; font-size: 20px;color: #fff;">
										开始拼图
									</div>
								</a></span>
						</div>`;
        document.getElementById("img06").innerHTML = html;

    })
}());