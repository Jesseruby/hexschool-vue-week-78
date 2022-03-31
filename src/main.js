import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
// fontawesome 套件
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
// vee-validate 主套件
import {
  Form, Field, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// vee-validate 相關規則
import AllRules from '@vee-validate/rules';
// 多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n';
// 繁體中文語系檔案
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import $httpMessageState from '@/methods/pushMessageState';
import App from './App.vue';
import router from './router';

// 定義驗證規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
// 設定 vee-validate 全域規則
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale('zh_TW');// 設定預設語系
library.add(faSpinner);
const app = createApp(App);
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.use(router);
app.use(VueAxios, axios);
app.component('component-loading', Loading);
app.component('component-form', Form);
app.component('component-field', Field);
app.component('error-message', ErrorMessage);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
