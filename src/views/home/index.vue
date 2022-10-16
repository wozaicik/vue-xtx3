<template>
    <div class="container">
        <!-- 首页入口（分类和广告区） -->
        <div class="home-entry">
            <!-- 左侧分类 -->
            <HomeCategory></HomeCategory>
            <!-- 轮播图 -->
        </div>
    </div>
</template>

<script>
import HomeCategory from './components/homecategory.vue'

export default {
  name: 'HomePage',
  components: { HomeCategory }
}
</script>

<style scoped lang="less">
</style>
