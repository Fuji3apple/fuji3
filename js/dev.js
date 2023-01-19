
/* ==========================================
*
* Random Character
*
========================================== */
$(function(){
    // 表示カテゴリ
    var footerCharaTarget = $("body");
  
    switch ("") {
      case "21": // ココア
        var charaInt = 1;
        break;
      case "22": // チノ
        var charaInt = 2;
        break;
      case "23": // リゼ
        var charaInt = 3;
        break;
      case "25": // 千夜
        var charaInt = 4;
        break;
      case "24": // シャロ
        var charaInt = 5;
        break;
      case "26": // マヤ
        var charaInt = 6;
        break;
      case "35": // メグ
        var charaInt = 7;
        break;
      case "27": // 青山さん
        var charaInt = 8;
        break;
      case "67": // モカ
        var charaInt = 9;
        break;
      case "66": // タカヒロ
        var charaInt = 2;
        break;
      case "486": // ティッピー
        var charaInt = 2;
        break;
      default:
        var charaInt = MAVJS.getRandomInt(1,9);
    }
  
    if ( FOOTER_CHARA_INT ) {
      var charaInt = FOOTER_CHARA_INT ;
    }
  
    footerCharaTarget.attr("data-chara", charaInt);
  
    MAVJS.addClassWhenVisible(".footerChara", "is-visible", 100, true);
  
    $(".charaChangeButton").on("click", function(){
      $(".footerChara").fadeOut(500).queue(function(){
        footerCharaTarget.attr("data-chara", MAVJS.getRandomInt(1,9));
        $(this).dequeue();
      }).fadeIn(500);
    });
  
  });