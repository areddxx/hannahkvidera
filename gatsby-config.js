require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Hannah Kvidera`,
    // Default title of the page
    siteTitleAlt: `Hannah Kvidera`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Hannah Kvidera`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://HannahKvidera.com`,
    // Used for SEO
    siteDescription: `Portfolio for Hannah Kvidera`,
    // Will be set on the html tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@hanahkvidera`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `Bakes`, slug: `/projects` },
          { name: `Instagram`, slug: `/instagram` },
          { name: `About`, slug: `/about` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-4P9G1C82YS',
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `42635565431`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hannah Kvidera Portfolio`,
        short_name: `hannahkvidera`,
        description: `Portfolio for Hannah Kvidera`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
  ],
}
