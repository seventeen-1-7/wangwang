import './styles/common.scss'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useIntersectionObserver } from '@vueuse/core'
import { lazyPlugin } from './directives'
// 引入全局组件插件
import { componentPlugin } from '@/components'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
/* 需要替换否则会覆盖 */
/* app.use(createPinia()); */

app.use(router);
app.use(componentPlugin);
app.use(lazyPlugin);
app.mount('#app');
