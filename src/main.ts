import { createApp } from 'vue'

import App from './App.vue'
import { createColoris } from './colorisPlugin'

const coloris = createColoris({})

createApp(App).use(coloris).mount('#app')
