import { createApp } from 'vue'

import App from './App.vue';
import router from './router';

import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
import 'virtual:windi-utilities.css';
import 'virtual:windi-devtools';
import svg from './resources/svg';

const app = createApp(App)



app.use(router)
app.use(svg, 'resources/assets/icons')
app.mount('#app')