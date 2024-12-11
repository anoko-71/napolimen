// ヘッダーメニュー
// クラスcloseを自動でセット・除去する
$(".hmenu").click(function () {
  $(this).toggleClass("close");
  return false;
});

$(".container").click(function () {
  $(".hmenu").removeClass("close");
});
