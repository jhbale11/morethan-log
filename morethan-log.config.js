const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'Hwan Kim',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Data Scientist, ML/DL Researcher',
    bio: 'I develop everything using node.',
    email: 'jhbale11@snu.ac.kr',
    linkedin: 'https://www.linkedin.com/in/%EC%A0%95%ED%99%98-%EA%B9%80-8636a7233/',
    github: 'jhbale11',
    instagram: 'nawhgnuj',
  },
  projects: [
    {
      name: 'Untilled',
      href: 'https://untilled.web.app'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'hwan-log',
    description: 'welcome to hwan-log!',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://hwan-log.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'jhbale11/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
