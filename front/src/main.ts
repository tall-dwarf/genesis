import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const pinia = createPinia()
createApp(App).use(pinia).use(Toast).mount('#app')
