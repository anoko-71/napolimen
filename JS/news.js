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
