import { type EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { createColoris } from '../../../src/colorisPlugin'

export default {
  extends: DefaultTheme,
  enhanceApp(ctx: EnhanceAppContext) {
    ctx.app.use(createColoris())
  }
}
