import { createApp } from 'vue';
import 'element-plus/packages/theme-chalk/src/base.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import './style/normalize.css';

createApp(App).use(store).use(router).mount('#app');
