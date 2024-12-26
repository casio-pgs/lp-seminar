// $(document).ready(function() {
//   // ボタンをクリックするとアコーディオンの内容を表示/非表示
//   $("#toggleButton").click(function() {
//     $("#accordionContent").slideToggle();
//     // var buttonText = $("#accordionContent").is(":visible") ? "参加した先生の声を閉じる &gt;" : "参加した先生の声を読む &gt;";
//     // $(this).html(buttonText);  // ボタンのテキスト変更
//         // ボタンにactiveクラスを追加して色を変更
//         $(this).toggleClass("active");
//   });

//   // アコーディオンのクリックで質問と回答を開閉
//   $(".accordion").click(function() {
//     var panel = $(this).next(".panel");
//     $(".panel").not(panel).slideUp(); // 他のパネルを閉じる
//     panel.stop().slideToggle(); // クリックされたパネルを開閉
//   });
// });

$(document).ready(function() {
  // 初期状態を確認してボタンにクラスを付与
  if ($("#accordionContent").is(":visible")) {
    $("#toggleButton").addClass("active");
  }

  // ボタンをクリックするとアコーディオンの内容を表示/非表示
  $("#toggleButton").click(function() {
    // 現在の表示状態を確認
    if ($("#accordionContent").is(":hidden")) {
      // アコーディオンが閉じている場合、開く
      $("#accordionContent").stop().slideDown();
      $(this).addClass("active"); // ボタンにactiveクラスを追加
    } else {
      // アコーディオンが開いている場合、閉じる
      $("#accordionContent").stop().slideUp();
      $(this).removeClass("active"); // ボタンからactiveクラスを削除
    }
  });

  // アコーディオンのクリックで質問と回答を開閉
  // $(".accordion").click(function() {
  //   var panel = $(this).next(".panel");
  //   $(".panel").not(panel).slideUp(); // 他のパネルを閉じる
  //   panel.stop().slideToggle(); // クリックされたパネルを開閉
  // });
});
