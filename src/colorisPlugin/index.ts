import '@melloware/coloris/dist/coloris.css'

import Coloris from '@melloware/coloris'
import type { InjectionKey } from 'vue'
import { type App, defineAsyncComponent } from 'vue'

import type { PluginOptions } from './types'

export const injectionKey = Symbol() as InjectionKey<PluginOptions>

export function createColoris(options: PluginOptions = {}) {
  return (app: App) => {
    Coloris.init()
    app.provide(injectionKey, options)
    app.component(
      'VueColoris',
      defineAsyncComponent(() => import('./components/VueColoris.vue'))
    )
  }
}
