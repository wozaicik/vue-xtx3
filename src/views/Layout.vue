<template>
    <!-- 顶部通栏 -->
    <AppTopnav></AppTopnav>
    <!-- 头部组件 -->
    <AppHeader></AppHeader>
    <!-- 吸顶头部 -->
    <AppHeaderSticky></AppHeaderSticky>
    <!-- 内容组件 -->
    <div class="app-body">
        <RouterView></RouterView>
    </div>
    <!-- 底部组件 -->
    <AppFooter></AppFooter>
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'

export default {
  name: 'Layout',
  components: { AppTopnav, AppHeader, AppFooter, AppHeaderSticky },
  // 获取分类数据
  setup () {
    const store = useStore()
    store.dispatch('category/getList')
  }
}
</script>

<style scoped lang="less">
.app-body{
  min-height: 600px;
}
</style>
