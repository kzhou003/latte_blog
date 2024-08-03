module.exports = {
  siteMetadata: {
    title: "Kuan Zhou",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `images`,
          path: `${__dirname}/src/images`, // Adjust this path to where your images are
        }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // Your Google Analytics measurement ID
        trackingIds: ["G-J6S2CPWCYZ"],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }
    type MdxFrontmatter {
      title: String!
      date: Date @dateformat
      hero_image: String
      hero_image_alt: String
      hero_image_credit_link: String
      hero_image_credit_text: String
    }
  `
  createTypes(typeDefs)
}