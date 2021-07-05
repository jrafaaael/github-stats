import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import './assets/icons'

createApp(App).use(store).mount('#app')
