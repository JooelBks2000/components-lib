import { createApp } from 'vue';
import './style.css';
import xsCom from '@xs-components/index';
import App from './App.vue';
import '@xs-components/theme-default/index.scss';

const app = createApp(App);

app.use(xsCom as any);

app.mount('#app');
