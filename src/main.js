import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import applyPrototypes from '@/helpers/applyPrototypes.js';
import App from '@/App.vue'

const app = createApp(App)

// Make NW.js and Node globals available in Vue
applyPrototypes(app.config.globalProperties)

app.use(createPinia())
app.mount('#app')

console.log('nw-flavor', process.versions['nw-flavor'])
