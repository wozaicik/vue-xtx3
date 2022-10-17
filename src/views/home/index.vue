<template>
    <!-- 首页入口（分类和广告区） -->
    <div class="home-entry">
        <div class="container">
            <!-- 左侧分类 -->
            <HomeCategory></HomeCategory>
            <!-- 轮播图 -->
            <HomeBanner></HomeBanner>
        </div>
    </div>
    <!-- 新鲜好物 -->

</template>

<script>
import HomeCategory from './components/homecategory.vue'
import HomeBanner from './components/home-banner.vue'

export default {
  name: 'HomePage',
  components: { HomeCategory, HomeBanner }
}
</script>

<style scoped lang="less">
</style>
