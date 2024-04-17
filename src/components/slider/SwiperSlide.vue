<template>
  <swiper :scrollbar="{
    hide: true,
  }" :breakpoints="breakpoints" :navigation="nav" :slidesPerView="2" :spaceBetween="2" :grabCursor="true" :pagination="{
    clickable: true,
  }" :autoplay="{
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    }" :modules="modules" class="mySwiper">
    <swiper-slide v-for="(nm, i) in 10" :key="i">
      <div class="">
        <img src="https://i.ibb.co/p4jrHdh/Group-20016.png" alt="">
      </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "../../assets/css/style.css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import { Scrollbar, Pagination, Autoplay, Navigation } from "swiper";


export default {
  props: {
    dataArray: {
      type: Array,
      default: [],
    },
    slideType: {
      type: String,
      default: "",
    },
    sideNav: {
      type: Boolean,
      default: true,
    },
    breakpoints: {
      type: Object,
      default: {
        "@0.00": {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2.4,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 2.3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    },
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup(props) {
    const dataArray = ref(props.dataArray);
    const slide_type = ref(props.slideType);
    const nav = ref(props.sideNav);
    const breakpoints = ref(props.breakpoints);
    return {
      modules: [Autoplay, Pagination, Navigation, Scrollbar],
      dataArray,
      breakpoints,
      slide_type,
      nav
    };
  },
};
</script>
