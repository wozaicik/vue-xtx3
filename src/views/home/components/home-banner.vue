<template>
    <div class="home-banner">
        <XtxCarousel :sliders="sliders" auto-play></XtxCarousel>
    </div>
</template>

<script>
import XtxCarousel from '@/components/library/xtx-carousel.vue'
import { ref } from 'vue'
import { findBanner } from '@/api/home'

export default {
  name: 'HomeBanner',
  components: { XtxCarousel },
  setup () {
    const sliders = ref([])
    findBanner().then(data => {
      sliders.value = data.result
    })
    // console.log(sliders.value)
    return { sliders }
  }
}

</script>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98
}

.xtx-carousel {
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }
  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>
