import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Helpful links">
      <ul>
      <li>
      <h3> Daily news </h3>
      <ul>
        <li><a href="https://news.ycombinator.com/">Hacker News</a></li>
        <li><a href="https://substack.com/notes">Substack</a></li>
        <li><a href="https://www.bloomberg.com/">Bloomberg</a></li>
        <li><a href="https://www.teamblind.com/">TeamBlind</a></li>
        <li><a href="https://finance.yahoo.com/">Yahoo Finance</a></li>
      
      </ul>
      
      </li>
      <li>
      <h3> Social media </h3>
      <ul>
        <li> <a href="https://twitter.com/">Twitter</a></li>
        <li> <a href="https://www.linkedin.com/feed/">Linkedin</a> </li>
        <li><a href="https://www.zhihu.com/follow">Zhihu</a></li>
        
      </ul>
      </li>
      
      <li>
      <h3> Online video </h3>
      <ul>
        <li> <a href="https://www.youtube.com/feed/subscriptions">Youtube</a></li>
        <li> <a href="https://www.bilibili.com/">Bilibili</a> </li>
      </ul>
      </li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Helpful links" />

export default BlogPage