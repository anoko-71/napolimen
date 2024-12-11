// VIDEOスライダー
// breakpointとは画面のサイズが変わり特定の画面幅のときにレイアウトが変わる点
$(".slider").slick({
  centerMode: true,
  centerPadding: "300px",
  // 矢印画像挿入
  prevArrow: '<img src="img/TOPpage/arrow-left.png" class="prev">',
  nextArrow: '<img src="img/TOPpage/arrow-right.png" class="next">',
  slidesToShow: 1,
  // slidesToShow: 1,
  //   ↑がコピペされたが、３つからスライド矢印が表示されるため、消去すればデフォルトの1になる。

  // slidesToShow: 1は上にあるのでブレイクポイント768,480には記述不要（表示する動画の数？）

  responsive: [
    {
      breakpoint: 768,
      settings: {
        // arrows: false,
        // centerMode: true,
        centerPadding: "40px",
        // slidesToShow: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        // ↓480pxブレイクポイントで矢印画像（小）に変更する
        prevArrow: '<img src="img/TOPpage/arrowmin.png" class="prev">',
        nextArrow: '<img src="img/TOPpage/arrowmin2.png" class="next">',
        // arrows: false,
        // centerMode: true,
        centerPadding: "40px",
        // slidesToShow: 1,
      },
    },
  ],
});

// YouTubeリンクマウスオーバー
// まず最初は黒pngを非表示にして、ホバー時にゆっくり表示させる;
// 兄弟要素のグループの中での位置はnth-child(1~3)でセレクト
// まずホバーした時のイベントの書式を設定 下の1行
$("footer aside ul li:nth-child(1) img").hover(
  function () {
    // over
    // thisはイベント発生したときというセレクタ、この場合はhoverしたときを指定する。
    $(this).attr("src", "img/TOPpage/youtubeblack.png");
    // cssの内容をセットしたいときは.cssがメソッド。非表示にしておくためopacity.
    $(this).css("opacity", 0);
    // cssのアニメーション実行時間opacity：1 で表示 発動時間0.35秒
    $(this).animate(
      {
        opacity: 1,
      },
      350
    );
  },
  // ホバー時のマウスアウトしたとき カンマで複数書式設定可能
  // 新たに白pngを追加し表示させる
  function () {
    // out
    //   attrで属性指定→srcの白pngを取得
    $(this).attr("src", "img/TOPpage/youtubewhite.png");
    //   .cssをセットset
    $(this).css("opacity", 0);
    $(this).animate(
      {
        opacity: 1,
      },
      350
    );
  }
);

// ニコニコリンク マウスオーバー
$("footer aside ul li:nth-child(2) img").hover(
  function () {
    // over
    $(this).attr("src", "img/TOPpage/niconicoblack.png");
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
    $(this).attr("src", "img/TOPpage/niconicowhite.png");
    $(this).css("opacity", 0);
    $(this).animate(
      {
        opacity: 1,
      },
      350
    );
  }
);

// Xリンク マウスオーバー
$("footer aside ul li:nth-child(3) img").hover(
  function () {
    // over
    $(this).attr("src", "img/TOPpage/Xblack.png");
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
    $(this).attr("src", "img/TOPpage/Xwhite.png");
    $(this).css("opacity", 0);
    $(this).animate(
      {
        opacity: 1,
      },
      350
    );
  }
);

// モバイル用メニュー

/* Bパターン開始 */
// .hmenuをクリックした時.親であるdiv.containerにも反映される
//  return false;を設定することで.hmenuでアニメーションは停止されるため、.containerまでには伝わらない。
$(".hmenu").click(function () {
  // →$(this)にクラスcloseをトグル
  $(this).toggleClass("close");
  // →処理の停止
  return false;
});

// .containerをクリックした時
$(".container").click(function () {
  // →.hmenuからクラスcloseを除去
  $(".hmenu").removeClass("close");
});
/* Bパターンここまで */
