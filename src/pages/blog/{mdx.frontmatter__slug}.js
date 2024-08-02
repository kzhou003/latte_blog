import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import Seo from '../../components/seo'

const BlogPost = ({ data, children }) => {
  const { frontmatter } = data.mdx
  return (
    <Layout pageTitle="">
      <article style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#333' }}>{frontmatter.title}</h1>
        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '2rem' }}>{frontmatter.date}</p>
        {frontmatter.hero_image && (
          <div style={{ marginBottom: '2rem' }}>
            <img
              src={frontmatter.hero_image}
              alt={frontmatter.hero_image_alt || ''}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
            {frontmatter.hero_image_credit_text && (
              <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>
                Photo Credit:{" "}
                <a href={frontmatter.hero_image_credit_link} style={{ color: '#0056b3', textDecoration: 'none' }}>
                  {frontmatter.hero_image_credit_text}
                </a>
              </p>
            )}
          </div>
        )}
        <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
          {children}
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost