module.exports = {
    base: 'mo',
    theme: 'reco',
    themeConfig: {
       // 博客配置
      type: 'blog',
      subSidebar: 'auto',
      authorAvatar: '/avatar.jpg',
      blogConfig: {
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: '分类' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: 'Tag'      // 默认文案 “标签”
        },
        socialLinks: [     // 信息栏展示社交信息
          { icon: 'reco-github', link: 'https://github.com/Lycorisz/mo' }
          // { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
        ]
      },
      nav: [
        {
          text: 'Home',
          link: '/',
          icon: 'reco-tag'
        },
        {
          text: 'Vue',
          items: [
            {
              text: 'Vue基础使用',
						  link: '/Vue/Vue_base'
            }
          ]
        },
      ]
    }
  }