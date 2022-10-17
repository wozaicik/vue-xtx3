// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了vue构造函数，vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入app应用实例，在app基础之上扩展

import XtxSkeletion from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'

export default {
  install (app) {
    // 在app上进行扩展，app提供component directive
    // 如果要挂载原型 app.config.globalProperties方式
    app.component(XtxSkeletion.name, XtxSkeletion)
    app.component(XtxCarousel.name, XtxCarousel)
  }
}
