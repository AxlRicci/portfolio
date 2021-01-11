const siteMetadata = {
  title: `Alex Ricci | Portfolio`,
  description: `Alex Ricci's web developer portfolio.`,
  image: `./src/static/mockup-portfolio.png`,
  siteUrl: `https://alexricci.ca`,
  siteLanguage: `en-US`,
  siteLocale: `en-US`,
  authorName: `Alex Ricci`,
  favicon: `./src/images/bear.svg`,
  background_color: `#fff`,
  theme_color: `#e7e7e7`,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alex Ricci | Portfolio`,
        short_name: `Alex Ricci`,
        start_url: `/`,
        background_color: siteMetadata.background_color,
        theme_color: siteMetadata.theme_color,
        display: `standalone`,
        icon: siteMetadata.favicon,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: '1000'
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: .1, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
          
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {}
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `u0sxziy6`,
        dataset: `production`,
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
  ],
};
