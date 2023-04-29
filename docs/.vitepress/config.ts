import { DefaultTheme, defineConfig } from 'vitepress'
import pkg from '../../package.json'

export default defineConfig({
  lang: 'en-US',
  title: "Vue Coloris",
  description: "A Vue 3 wrapper for Coloris",
  cleanUrls: true,
  base: '/vue-coloris/',
  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/reference/': sidebarReference()
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bastien-j/vue-coloris' }
    ],
  },

})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
    { text: 'Reference', link: '/reference/plugin-options', activeMatch: '/reference/' },
    { text: pkg.version, link: 'https://www.npmjs.com/package/vue-coloris/v/' + pkg.version }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'Getting Started', link: '/guide/getting-started' }
      ]
    },
    {
      text: 'Configuration',
      items: [
        { text: 'Global vs. Local', link: '/guide/conf-global-vs-local' }
      ]
    },
    {
      text: 'Customization',
      items: [
        { text: 'Preview only', link: '/guide/custom-preview-only' }
      ]
    }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Reference',
      items: [
        {
          text: 'Plugin Options',
          link: '/reference/plugin-options'
        }
      ]
    }
  ]
}