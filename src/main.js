import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style/normalize.css'
import './style/var.css'

const app = createApp(App)
app.use(router)

import { Tabbar, TabbarItem } from 'vant'
app.use(Tabbar)
   .use(TabbarItem)

app.mount('#app')
