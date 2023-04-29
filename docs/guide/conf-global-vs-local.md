# Global vs. Local Configuration

You can configure your `VueColoris` components globally and/or locally.

:::tip
If you use both **global** and **local** configurations, the **local** configuration will extends the **global** one.
:::

## Global Configuration

To make all `VueColoris` components behave the same, pass an option object to the `createColoris` method:

```js
import { createApp } from 'vue'
import { createColoris } from 'vue-coloris'
import 'vue-coloris/style.css'
import App from './App.vue'

const coloris = createColoris({...options}) // [!code focus]
const app = createApp(App)

app.use(coloris)
app.mount('#app')
```

Consult the [Option Reference](../reference/plugin-options) for full details on all config options.

## Local Configuration

You can also set options of your `VueColoris` components individually by using the `options` props:

```vue
<template>
  <VueColoris
    :options="{...options}" // [!code focus]
  />
</template>
```