# Getting Started

:::warning
This plugin only support Vue 3 since [Vue 2 will reach End of Life (EOL) on December 31st, 2023](https://v2.vuejs.org/lts/).
:::

## Installation

Install `vue-coloris` with your favorite package manager:

::: code-group
```sh [npm]
$ npm install vue-coloris
```
```sh [yarn]
$ yarn add vue-coloris
```
:::

Initialize the plugin and pass it to your app instance:

```js{2,3,6,9}
import { createApp } from 'vue'
import { createColoris } from 'vue-coloris'
import 'vue-coloris/style.css' // Coloris styles
import App from './App.vue'

const coloris = createColoris()
const app = createApp(App)

app.use(coloris)
app.mount('#app')
```

:::tip
Don't forget to import plugin styles.
:::
:::tip
Once the plugin is loaded, the `VueColoris` component will be globally registered.
:::

## Usage

Use the `VueColoris` component:

```vue
<template>
  <VueColoris :value="'gold'" />
</template>
```

:::raw
<ClientOnly>
  <VueColoris :value="'gold'" />
</ClientOnly>
:::
