// Xリンク マウスオーバー緑
$("main div.xrelative p.x a img").hover(
  function () {
    // over
    $(this).attr("src", "img/NEWSpage/Xgreen.png");
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
    $(this).attr("src", "img/NEWSpage/Xwhite.png");
    $(this).css("opacity", 0);
    $(this).animate(
      {
        opacity: 1,
      },
      350
    );
  }
);

// まだ設定反映されていない未完成↓1215
// ページアクティブ時のページ数ボタンの色変更
// アクティブページのリンク色変える
href = "../news.html";
var links = jQuery("ul.pagelink li a");
//classを付与したいaタグを含めた階層をカッコ内に記述

console.log(links);
links.each(function (index, value) {
  if (value.href == href) {
    jQuery("ul.pagelink li a").children("a").eq(index).addClass("active");
    //classを付与したいaタグまでの階層をjQueryカッコ内に記述
  }
});
