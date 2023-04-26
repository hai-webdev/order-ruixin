// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/banner";
import "../common/footer";
import Swiper from "swiper";

import "./vue.min";



const vm = new Vue({
  el: "#app",
  data() {
    return {
      teamList: window.teamList,
      // index: 2,
      // itemWidth:0,
      // left:0
      teamSwiper:null
    };
  },
  mounted(){
    // this.itemWidth = $(".team-item").outerWidth(true,true);
    this.teamSwiper = new Swiper(".team-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      },
      centeredSlides: true,
      loop: true,
      autoplay:{
        delay:3000
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChangeTransitionStart: function(){
        
        },
      },
    });
    
  },
  methods:{
    changeIndex(index){
      console.log(index);
      if(index < 2 || index > this.teamList.length - 3){
        return;
      }
      this.index = index;
      this.left = -this.itemWidth * (index - 2)
      
    }
  }
});
