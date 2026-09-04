import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createRouter, createWebHistory } from 'vue-router'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

import './style.css'
import App from './App.vue'
import routes from './routes/routes.js'

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

app.use(Quasar)
app.use(router)

app.mount('#app')