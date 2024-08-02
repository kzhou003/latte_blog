import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faUsers, faVideo, faBook, faCode, faPodcast } from '@fortawesome/free-solid-svg-icons'

const LinksPage = () => {
  const linkCategories = [
    {
      title: "Daily News",
      icon: faNewspaper,
      links: [
        { name: "Hacker News", url: "https://news.ycombinator.com/" },
        { name: "Substack", url: "https://substack.com/notes" },
        { name: "Bloomberg", url: "https://www.bloomberg.com/" },
        { name: "TeamBlind", url: "https://www.teamblind.com/" },
        { name: "Yahoo Finance", url: "https://finance.yahoo.com/" },
        { name: "TechCrunch", url: "https://techcrunch.com/" },
        { name: "The Verge", url: "https://www.theverge.com/" }
      ]
    },
    {
      title: "Social Media",
      icon: faUsers,
      links: [
        { name: "Twitter", url: "https://twitter.com/" },
        { name: "LinkedIn", url: "https://www.linkedin.com/feed/" },
        { name: "Zhihu", url: "https://www.zhihu.com/follow" },
        { name: "Reddit", url: "https://www.reddit.com/" },
        { name: "Mastodon", url: "https://mastodon.social/" }
      ]
    },
    {
      title: "Online Video",
      icon: faVideo,
      links: [
        { name: "YouTube", url: "https://www.youtube.com/feed/subscriptions" },
        { name: "Bilibili", url: "https://www.bilibili.com/" },
        { name: "TED", url: "https://www.ted.com/" },
        { name: "Vimeo", url: "https://vimeo.com/" }
      ]
    },
    {
      title: "Learning Resources",
      icon: faBook,
      links: [
        { name: "Coursera", url: "https://www.coursera.org/" },
        { name: "edX", url: "https://www.edx.org/" },
        { name: "Khan Academy", url: "https://www.khanacademy.org/" },
        { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/" }
      ]
    },
    {
      title: "Developer Tools",
      icon: faCode,
      links: [
        { name: "GitHub", url: "https://github.com/" },
        { name: "Stack Overflow", url: "https://stackoverflow.com/" },
        { name: "CodePen", url: "https://codepen.io/" },
        { name: "DevDocs", url: "https://devdocs.io/" }
      ]
    },
    {
      title: "Podcasts",
      icon: faPodcast,
      links: [
        { name: "Lex Fridman Podcast", url: "https://lexfridman.com/podcast/" },
        { name: "Software Engineering Daily", url: "https://softwareengineeringdaily.com/" },
        { name: "Changelog", url: "https://changelog.com/podcast" },
        { name: "Syntax", url: "https://syntax.fm/" }
      ]
    }
  ]

  const [hoveredCategory, setHoveredCategory] = React.useState(null)
  const [hoveredLink, setHoveredLink] = React.useState(null)

  return (
    <Layout pageTitle="">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {linkCategories.map((category, index) => (
          <div 
            key={index} 
            style={{ 
              border: '1px solid #003366', 
              borderRadius: '8px', 
              padding: '20px',
              backgroundColor: hoveredCategory === index ? '#cce0ff' : '#f0f8ff',
              transition: 'background-color 0.3s ease',
              boxShadow: hoveredCategory === index ? '0 0 10px rgba(0,51,102,0.2)' : 'none'
            }}
            onMouseEnter={() => setHoveredCategory(index)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <h3 style={{ 
              borderBottom: '2px solid #003366', 
              paddingBottom: '10px', 
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <FontAwesomeIcon icon={category.icon} style={{ marginRight: '10px', color: '#003366' }} />
              {category.title}
            </h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {category.links.map((link, linkIndex) => (
                <li 
                  key={linkIndex} 
                  style={{ 
                    margin: '10px 0',
                  }}
                >
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      display: 'block',
                      padding: '10px',
                      border: '1px solid #003366',
                      borderRadius: '4px',
                      color: '#003366', 
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: hoveredLink === `${index}-${linkIndex}` ? '#99c2ff' : '#e6e6e6',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                    onMouseEnter={() => setHoveredLink(`${index}-${linkIndex}`)}
                    onMouseLeave={() => setHoveredLink(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        window.open(link.url, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    tabIndex={0}
                    role="button"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Helpful Links" />

export default LinksPage