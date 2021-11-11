/*
 * @Author: zhuangzhuanglu
 * @Date: 2021-11-11 14:45:26
 * @LastEditors: zhuangzhuanglu
 * @LastEditTime: 2021-11-11 15:44:14
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局样式文件
import '@/assets/scss/index.scss'

createApp(App).use(store).use(router).mount('#app')
