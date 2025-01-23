import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.app_name = import.meta.env.VITE_APP_NAME
app.config.globalProperties.app_hero_title = import.meta.env.VITE_APP_HERO_TITLE
app.config.globalProperties.app_slogan = import.meta.env.VITE_APP_SLOGAN
app.config.globalProperties.app_badge = import.meta.env.VITE_APP_BADGE
app.config.globalProperties.app_hero_description = import.meta.env.VITE_APP_HERO_DESCRIPTION

app.mount('#app')