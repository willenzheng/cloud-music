import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/normalize.css'
// 引入css变量
import './styles/variable/index.css'

import mHeader from './components/header/index.vue'

const app = createApp(App)
app.use(router)

import { Button, Tabbar, TabbarItem, Swipe, SwipeItem, Popup, Icon } from 'vant'
app.use(Button)
   .use(Tabbar)
   .use(TabbarItem)
   .use(Swipe)
   .use(SwipeItem)
   .use(Popup)
   .use(Icon)

app.component('m-header', mHeader)

app.mount('#app')
