import "./index.less";
import "swiper/css/swiper.min.css";

$(".language-select-active").on("click", function(){
    $(this).next(".language-select").toggle();
})

$(".head-box .menu").on("click", function(){
    $(".m-header .nav-box").slideToggle();
})

$(".nav-item .head .iconfont").on("click", function(){
    $(this).parents(".head").next(".sublist").slideToggle();
})