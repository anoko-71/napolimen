// スクロールしたときにカードが広がる設定
// レスポンスのときにもスクロール200pxかかるのはよくないらしいので↓ボツ
// $(window).scroll(function () {
//   var sc = $(window).scrollTop();
//   if (sc > 200) {
//     $("a.rantan").animate({
//       marginRight: "100px",
//     });
//     $("a.sugiru").animate({
//       marginRight: "50px",
//     });
//     $("a.hacchi").animate({
//       marginLeft: "50px",
//     });
//     $("a.shu3").animate({
//       marginLeft: "100px",
//     });
//   }
// });

//参考サイト：haniwaman.com/inview/
// スクロールして出現したタイミングで発火させるjQueryプラグイン「inview」
// 1.ソースコードをダウンロードしてjquery.inview.min.jsファイルをエクスプローラーにいれる
// 2.ライブラリを読み込む・・・ < head > に < script src = "jquery.inview.min.js" ></ script > をコピペ
// 3.</body>の上に<script src="JS/member.js"></script>にしてページが表示されたときにプログラムが反映されるようにする

// .cardboxが表示されたときにクラスhyoujiが表示されるようにしする
// 「addClass()」は、任意の要素にclass属性を追加することができる
// isInView・・・ブラウザ上で見えたときに処理を実行する
$(".cardbox").on("inview", function (event, isInView) {
  if (isInView) {
    $(this).addClass("hyouji");
  }
});

// Xリンク マウスオーバー
$("main section.profile ul li:nth-child(1) img").hover(
  function () {
    // over
    $(this).attr("src", "img/MEMBERpage/Xbeige.png");
    $(this).css("opacity", 0);
    $(this).animate(
      {
        opacity: 1,
      },
      350
    );
  },
  function () {
    // out
    $(this).attr("src", "img/MEMBERpage/Xblack.png");
    $(this).css("opacity", 0);
    $(this).animate(
      {
        opacity: 1,
      },
      350
    );
  }
);

// youtubeリンク
$("main section.profile ul li:nth-child(2) img").hover(
  function () {
    // over
    $(this).attr("src", "img/MEMBERpage/youtubebeige.png");
    $(this).css("opacity", 0);
    $(this).animate(
      {
        opacity: 1,
      },
      350
    );
  },
  function () {
    // out
    $(this).attr("src", "img/MEMBERpage/youtubeblack.png");
    $(this).css("opacity", 0);
    $(this).animate(
      {
        opacity: 1,
      },
      350
    );
  }
);
