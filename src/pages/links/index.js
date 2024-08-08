import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faUsers, faVideo, faBook, faCode, faPodcast, faSearch, faStar } from '@fortawesome/free-solid-svg-icons'

const LinksPage = () => {
  const linkCategories = [
    {
      title: "Favorites",
      icon: faStar,
      links: [
        { name: "Hacker News", url: "https://news.ycombinator.com/" },
        { name: "Twitter", url: "https://twitter.com/" },
        { name: "LinkedIn", url: "https://www.linkedin.com/" },
        { name: "Zhihu(知乎)", url: "https://www.zhihu.com/" },
        { name: "Nvidia blogs", url: "https://blogs.nvidia.com/" },
        { name: "alphaXiv", url: "https://alphaxiv.org/" },
        { name: "Work Chronicles", url: "https://workchronicles.substack.com/"},
        { name: "Daily articles(每日一文)", url: "https://www.qhsou.com/one/"},
      ]
    },
    {
      title: "Daily News",
      icon: faNewspaper,
      links: [
        { name: "Hacker News", url: "https://news.ycombinator.com/" },
        { name: "ByteByteGo Newsletter", url: "https://blog.bytebytego.com/" },
        { name: "Nvidia blogs", url: "https://blogs.nvidia.com/" },
        { name: "Bloomberg", url: "https://www.bloomberg.com/" },
        { name: "Daily articles(每日一文)", url: "https://www.qhsou.com/one/"},
        { name: "Work Chronicles", url: "https://workchronicles.substack.com/"},
      ]
    },
    {
      title: "Social Media",
      icon: faUsers,
      links: [
        { name: "Twitter", url: "https://twitter.com/" },
        { name: "LinkedIn", url: "https://www.linkedin.com/" },
        { name: "Zhihu(知乎)", url: "https://www.zhihu.com/" },
        { name: "Daily dev", url: "https://app.daily.dev/" },
        { name: "Blind", url: "https://www.teamblind.com/" },
      ]
    },
    {
      title: "Research Tools",
      icon: faSearch,
      links: [
        { name: "alphaXiv", url: "https://alphaxiv.org/" },
        { name: "Papers with code", url: "https://paperswithcode.com/"},
        { name: "Connected papers", url: "https://www.connectedpapers.com/"},
        { name: "Elicit", url: "https://elicit.com/"},
        { name: "Otio", url:"https://app.otio.ai"}
      ]
    },
    {
      title: "Developer Tools",
      icon: faCode,
      links: [
        { name: "GitHub", url: "https://github.com/" },
        { name: "HuggingFace", url: "https://huggingface.co/" },
        { name: "Kaggle", url: "https://www.kaggle.com/" },
        { name: "Leetcode", url: "https://leetcode.com/" },
        { name: "Deep ML", url: "https://www.deep-ml.com/"}

      ]
    },
    {
      title: "Podcasts",
      icon: faPodcast,
      links: [
        { name: "Lex Fridman Podcast", url: "https://lexfridman.com/podcast/" },
        { name: "Silicon Valley 101(硅谷101)", url: "https://sv101.fireside.fm/" },
        { name: "Yixi(一席)", url: "https://yixi.tv/#/home" },
      ]
    },
    {
      title: "Video Platforms",
      icon: faVideo,
      links: [
        { name: "YouTube", url: "https://www.youtube.com/" },
        { name: "Bilibili", url: "https://www.bilibili.com/" },
      ]
    },
    {
      title: "Learning Resources",
      icon: faBook,
      links: [
        { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/" },
        { name: "Stanford Online", url: "https://online.stanford.edu/free-courses" }
      ]
    }
  ]

  const [hoveredCategory, setHoveredCategory] = React.useState(null)
  const [hoveredLink, setHoveredLink] = React.useState(null)

  return (
    <Layout pageTitle="">
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '2rem', 
        fontStyle: 'italic', 
        color: '#555',
        maxWidth: '800px',
        margin: '0 auto 2rem'
      }}>
        <p>"A nudge, as we will use the term, is any aspect of the choice architecture that alters people's behavior in a predictable way without forbidding any options or significantly changing their economic incentives." – Richard H. Thaler and Cass R. Sunstein</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {linkCategories.map((category, index) => (
          <div 
            key={index} 
            style={{ 
              border: '1px solid #003366', 
              borderRadius: '8px', 
              padding: '20px',
              backgroundColor: hoveredCategory === index ? '#e6f2ff' : '#ffffff',
              transition: 'all 0.3s ease',
              boxShadow: hoveredCategory === index ? '0 0 15px rgba(0,51,102,0.3)' : '0 2px 5px rgba(0,0,0,0.1)',
              transform: hoveredCategory === index ? 'translateY(-5px)' : 'translateY(0)'
            }}
            onMouseEnter={() => setHoveredCategory(index)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <h3 style={{ 
              borderBottom: '2px solid #003366', 
              paddingBottom: '10px', 
              marginBottom: '15px',
              display: 'flex',
              alignItems: 'center',
              color: '#003366',
              fontSize: '1.2rem'
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
                      padding: '12px',
                      border: '1px solid #003366',
                      borderRadius: '4px',
                      color: hoveredLink === `${index}-${linkIndex}` ? '#ffffff' : '#003366', 
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      backgroundColor: hoveredLink === `${index}-${linkIndex}` ? '#003366' : '#f0f8ff',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                      fontWeight: '500',
                      textAlign: 'center',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontSize: '0.9rem',
                      transform: hoveredLink === `${index}-${linkIndex}` ? 'scale(1.03)' : 'scale(1)'
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
                    aria-label={`Visit ${link.name}`}
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

export const Head = () => <Seo title="Links" />

export default LinksPage