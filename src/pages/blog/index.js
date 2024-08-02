import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id} style={{ 
            marginBottom: '2rem', 
            padding: '1.5rem', 
            borderBottom: '1px solid #eaeaea',
            transition: 'background-color 0.3s ease'
          }}>
            <h2 style={{ marginBottom: '0.5rem' }}>
              <Link to={`/blog/${node.frontmatter.slug}`} style={{ 
                color: '#0056b3', 
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p style={{ 
              fontSize: '0.9rem', 
              color: '#666', 
              marginBottom: '1rem' 
            }}>
              Posted: {node.frontmatter.date}
            </p>
            <p style={{ lineHeight: '1.6' }}>{node.excerpt}</p>
            <Link to={`/blog/${node.frontmatter.slug}`} style={{
              display: 'inline-block',
              marginTop: '1rem',
              padding: '0.5rem 1rem',
              backgroundColor: '#4d94ff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              transition: 'background-color 0.3s ease'
            }}>
              Read More
            </Link>
          </article>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="LatteBytes" />

export default BlogPage