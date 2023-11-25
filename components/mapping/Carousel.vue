<template>
    <div class="uiux-carousel mapping-carousel">
        <swiper
            :slides-per-view="2"
            :slides-per-group="2"
            :loop="false"
            :space-between="50"
            :breakpoints="breakpoints"
            :navigation="navigation"
            :modules="modules"
        >
            <!-- Carousel Items  -->
            <swiper-slide v-for="(item, index) in mapping.mapping" :key="index">
                <div class="carousel-img">
                    <img :src="item.img" />
                </div>
            </swiper-slide>

            <!-- Dots Central Carousel Pagination -->
            <!-- <div class="carousel-pagination carousel-dots"></div> -->
        </swiper>
        <div class="carousel-navigation arrow-left">
            <SvgsLeft />
        </div>
        <div class="carousel-navigation arrow-right">
            <SvgsRight />
        </div>
    </div>
</template>

<script setup>
import mapping from '@/assets/image/uiux/carroselMapping/carouselMappingImgs'

import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Autoplay, Navigation, Pagination])

const breakpoints = {
    1: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    744: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
}

const navigation = {
    nextEl: '.carousel-navigation.arrow-right',
    prevEl: '.carousel-navigation.arrow-left',
}
</script>
