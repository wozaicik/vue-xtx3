# vue-xtx3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



```vue
不是响应式
const { profile } = store.state.user
```

直接从vuex中解构数据，不是响应式

需要计算属性

```vue
  const profile = computed(() => {
   return store.state.user.profile
  })
```

