module.exports = {
  siteMetadata: {
    title: `Brooke & Kyle Wedding`,
    description: `Brooke & Kyle`,
    author: `Rich Matney`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Thomas-Wedding`,
        short_name: `Thomas Wedding`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#F1817E`,
        display: `minimal-ui`,
        icon: `src/images/bk-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css"] // Purge only tailwind
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
