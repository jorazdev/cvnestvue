import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'material-icons/iconfont/material-icons.css'; // https://www.npmjs.com/package/material-icons
import 'material-symbols'; // https://www.npmjs.com/package/material-symbols
import { MotionPlugin } from '@vueuse/motion' // https://motion.vueuse.org/

const app = createApp(App)

import '../css/index.css'

app.use(router)
   .use(createPinia())
   .use(MotionPlugin)
   .mount('#app')
