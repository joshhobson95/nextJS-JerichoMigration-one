/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.jerichonursery.com/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*', // Apply to all bots
        disallow: ['/'], // Block all access to the site for non-permitted bots
      },
      {
        userAgent: 'Googlebot',
        allow: '/', // Allow Googlebot to crawl the entire site
      },
      {
        userAgent: 'Bingbot',
        allow: '/', // Allow Bingbot
      },
      {
        userAgent: 'Slurp',
        allow: '/', // Allow Yahoo's bot
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/', // Allow DuckDuckGo bot
      },
      {
        userAgent: 'AhrefsBot', // Block AhrefsBot (can be used for scraping)
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot', // Block SemrushBot (can be used for scraping)
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot', // Block MJ12bot (another bot often used for scraping)
        disallow: '/',
      },
      {
        userAgent: 'baidu', // Block Baidu's bot
        disallow: '/',
      },
      {
        userAgent: 'YandexBot', // Block YandexBot (bot from Russia, often used for scraping)
        disallow: '/',
      },
      // You can add more malicious bots here by adding their user-agent and disallowing them
    ],
    additionalSitemaps: [
      'https://www.jerichonursery.com/sitemap.xml', // Ensure your sitemap is included
    ],
  },
};
