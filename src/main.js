import { createApp } from "vue";
import App from "./App.vue";
// Maz-ui
import 'maz-ui/styles'
import './assets/style.css'
import router from "./router";

const app = createApp(App)
app.provide('mazIconPath', './icons')
app.use(router)
app.mount("#app");
