// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "../common/header";
import "../common/footer";
import "./index.less";
import "@/assets/global.less";

import Swiper from "swiper";
new Swiper(".banner-swiper", {
  pagination: {
    el: ".banner-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".banner-button-prev",
    nextEl: ".banner-button-next",
  },
});

const awardImgSwiper = new Swiper(".award-img-swiper", {
  autoplay: {
    delay: 5000,
  },
  noSwiping: true,
});

new Swiper(".news-swiper", {
  navigation: {
    prevEl: ".news-button-prev",
    nextEl: ".news-button-next",
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 70,
    },
  },
});

new Swiper(".partner-swiper", {
  navigation: {
    prevEl: ".partner-button-prev",
    nextEl: ".partner-button-next",
  },
  autoplay: {
    delay: 3000,
  },
  loop:true,
  slidesPerView: 2,
  // slidesPerGroup: 2,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 3,
      // slidesPerGroup: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 5,
      // slidesPerGroup: 5,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 6,
      // slidesPerGroup: 6,
      spaceBetween: 30,
    },
  },
});

$(".award-cont .news-item").hover(function () {
  const index = $(this).index();
  awardImgSwiper.slideTo(index, 1000, false);
  $(this).addClass("hide").siblings().removeClass("hide");
});
