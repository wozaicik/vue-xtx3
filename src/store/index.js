import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    user,
    category
  },
  plugins: [
    // 默认存储在localStorage
    createPersistedstate({
      // 本地存储名称
      key: 'erabbit-client-pc-store',
      // 指定需要村粗的模块
      paths: ['user', 'cart']
    })
  ]
})
