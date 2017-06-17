// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


<script>
var $window = $(window), //ウィンドウを指定
$content = $("#content"), //#content部分
$chenge = $("#change"), //#change部分
topContent = $content.offset().top; //#contentの位置を取得

var sticky = false;

 $window.on("scroll", function () {
      if ($window.scrollTop() > topContent) {　//scroll位置が#contentの上にある場合
           if ( sticky === false ){
                $chenge.hide();　//#change部分が上がる。
                $('#header').addClass('hide');
                sticky = true;
           }
      } else {
           if ( sticky === true ){　//scroll位置が下にある場合
                $chenge.hide();//#change部分が降りてくる。
                $('#header').removeClass('hide');
                sticky = false;

           }
      }
 });
 $window.trigger("scroll");
</script>
