module.exports = {
  siteMetadata: {
    title: 'Fake Blog',
    description: 'Demo site',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        preset: '@theme-ui/preset-roboto',
      },
    },
  ],
}
