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
      }
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