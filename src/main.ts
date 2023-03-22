import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import router from "@/router";
import Antd from  'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/assets/main.css'
import * as IconVue from "@icon-park/vue-next"
const app = createApp(App);
app.use(createPinia())
app.use(router)
app.use(Antd)
Object.keys(IconVue).forEach(key=>{
    app.component(key, IconVue[key as keyof typeof IconVue])
})
app.mount('#app')
