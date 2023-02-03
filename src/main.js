import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
//import PrimeVue from 'primevue/config';
import Vue3Transitions from 'vue3-transitions'


loadFonts()

createApp(App).use(router)
  .use(router)
  .use(vuetify)
  //.use(PrimeVue)
  .use(Vue3Transitions)
  .mount('#app')
