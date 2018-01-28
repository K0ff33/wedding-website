module.exports = {
  siteMetadata: {
    title: 'Bogusia & Kamil - wedding'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        useLangKeyLayout: false
      }
    },
    'gatsby-plugin-offline'
  ]
}
