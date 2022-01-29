import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/normalize.css'
import './styles/var.css'

const app = createApp(App)
app.use(router)

import { Button, Tabbar, TabbarItem, Swipe, SwipeItem } from 'vant'
app.use(Button)
   .use(Tabbar)
   .use(TabbarItem)
   .use(Swipe)
   .use(SwipeItem)

app.mount('#app')
