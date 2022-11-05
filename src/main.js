import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router) // use - добавляет в приложение список всех компонетов и опшинов
app.use(store)

app.mount('#app')
