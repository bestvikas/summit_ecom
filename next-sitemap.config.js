// import { CONSTANTS } from './services/config/app-config';

// const siteUrl = `${CONSTANTS.DOMAIN_NAME}`;
const siteUrl = `http://127.0.0.1:8009`;

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      `${siteUrl}/server-sitemap.xml`,
    ],
  },
};
