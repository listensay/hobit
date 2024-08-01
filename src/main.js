import { createApp } from "vue";
import App from "./App.vue";
// Maz-ui
import 'maz-ui/styles'
import './assets/style.css'
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App)
const pinia = createPinia()

app.provide('mazIconPath', './icons')
app.use(router)
app.use(pinia)
app.mount("#app");
