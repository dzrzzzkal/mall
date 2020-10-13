<template>
<div>
  <swiper>
    <template v-slot>
      <swiper-item v-for="(item, index) in banners" :key='index'>
        <template v-slot>
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </template>
      </swiper-item>
    </template>
  </swiper>
</div>
</template>

<script>
import {
  Swiper,
  SwiperItem
} from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      // default () {
      //   return []
      // }
      default: []
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
</style>
