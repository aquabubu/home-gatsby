const config = require("./SiteConfig");
const languages = require("./Languages");

const pathPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;

module.exports = {
  title: `AquaBuBu`,
  languages,
  siteUrl: config.siteUrl + pathPrefix,
  rssMetadata: {
    site_url: config.siteUrl + pathPrefix,
    feed_url: config.siteUrl + pathPrefix + config.siteRss,
    title: config.siteTitle,
    description: config.siteDescription,
    image_url: `${config.siteUrl + pathPrefix}/logos/logo-512.png`,
    author: config.userName,
    copyright: config.copyright
  }
};
