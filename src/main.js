import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import applyPrototypes from '@/helpers/applyPrototypes.js'
import App from '@/App.vue'

const app = createApp(App)

// Make NW.js and Node globals available in Vue
applyPrototypes(app.config.globalProperties)

app.use(createPinia())
app.mount('#app')

console.log('nw-flavor', process.versions['nw-flavor'])

// Create a tray icon
/* eslint-disable */
var tray = new nw.Tray({ title: 'Tray', icon: 'img/icon.png' })
var menu = new nw.Menu()
menu.append(new nw.MenuItem({ type: 'checkbox', label: 'box1' }))
tray.menu = menu
/* eslint-enable */