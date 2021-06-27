const { description } = require('../../package')

module.exports = {
  title: 'DND《边界国度》系列拓展',

  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [],
    sidebar: [
        {
            title: '世设相关',
            path: '/introduction/',
            collapsable: false,
            children: [ "/ "]
        },
        {
            title: '专长',
            path: "/fate/",
            collapsable: false,
            children: [
                {
                    path: '/fate/',
                    title: '普通专长'
                },
                {
                    path: '/fate/tatic',
                    title: '战术专长'
                },
                {
                    path: '/fate/matemagic',
                    title: '超魔专长'
                },
                {
                    path: '/fate/immersion_belife',
                    title: '入信者专长'
                },
                {
                    path: '/fate/serise',
                    title: '系列专长'
                }
            ]
        },
        {
            path: '/firearm',
            title: '火器'
        },
        {
            path: '/defect',
            title: '缺陷'
        }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
