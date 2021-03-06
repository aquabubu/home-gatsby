module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "AquaBuBu", // Site title.
  siteTitleAlt: "Aqua BuBu", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://aquabubu.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Be Hypnotic and Paranoid", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-109856440-1", // Tracking code ID for google analytics.
  disqusShortname: "aquabubu", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "AquaBuBu", // Username to display in the author segment.
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Earth", // User location to display in the author segment.
  userAvatar: "/images/about.png", // User avatar to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "Facebook",
      url: "https://facebook.com/aquabubupage",
      iconClassName: "fa fa-facebook"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/aquabubu1731",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "GitHub",
      url: "https://github.com/aquabubu",
      iconClassName: "fa fa-github"
    },
    {
      label: "Email",
      url: "mailto:aquabubu1731@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. AquaBuBu" // Copyright string for the footer of the website and RSS feed.
};
