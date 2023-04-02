import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Helpful links">
      {
        <p2>1. Youtube</p2>
      }
    </Layout>
  )
}

export const Head = () => <Seo title="Helpful links" />

export default BlogPage