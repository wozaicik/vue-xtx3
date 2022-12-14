// 扩展vue原有的功能：全局组件，自定义指令，挂载原型方法，注意：没有全局过滤器
// 这就是插件
// vue2.0插件写法要素：导出一个对象，有install函数，默认传入了vue构造函数，vue基础之上扩展
// vue3.0插件写法要素：导出一个对象，有install函数，默认传入app应用实例，在app基础之上扩展

import XtxSkeletion from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'
import XtxBread from './xtx-bread.vue'
import defaultImg from '@/assets/images/200.png'

export default {
  install (app) {
    // 在app上进行扩展，app提供component directive
    // 如果要挂载原型 app.config.globalProperties方式
    app.component(XtxSkeletion.name, XtxSkeletion)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
    app.component(XtxBread.name, XtxBread)
    // 定义指令
    defineDirective(app)
  }
}

// 定义指令
const defineDirective = (app) => {
  // 1. 图片懒加载指令
  // 原理：先存储图片地址不能在src上，当图片进入可视区，将你存储的图片地址设置给图片元素即可
  app.directive('lazy', {
    // vue2.0 监听使用指令的dom是否创建好，钩子函数：inserted
    // vue3.0 的指令拥有的钩子函数和组件的一样，使用指令的dom是否创建好，钩子函数，mounted
    mounted (el, binding) {
      // 创建一个观察对象，来观察当前使用指令的元素
      const observe = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 停止观察
          observe.unobserve(el)
          // 3.把指令的值设置给el的src属性,binding.value就是指令的值
          // 4.处理图片加载失败  error 图片加载失败的事件 load图片加载成功
          el.onerror = () => {
            el.src = defaultImg
          }
          el.src = binding.value
        }
      }, {
        threshold: 0
      })
      // 开启观察
      observe.observe(el)
    }
  })
}
