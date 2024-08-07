import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  navBar,
  activeNavLink,
  footer,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const [showScrollTop, setShowScrollTop] = React.useState(false)

  React.useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollTop && window.pageYOffset > 400) {
        setShowScrollTop(true)
      } else if (showScrollTop && window.pageYOffset <= 400) {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScrollTop])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={container}>
      <nav className={navBar}>
        <ul className={navLinks} style={{ 
          display: 'flex', 
          flexWrap: 'wrap',
          justifyContent: 'center', 
          padding: '10px 0',
          margin: 0,
          listStyle: 'none'
        }}>
          {['About', 'Blog', 'Photos', 'Sharings', 'Reader', 'Links'].map((item, index) => (
            <li key={index} className={navLinkItem}>
              <Link
                to={item === 'About' ? '/' : `/${item.toLowerCase()}`}
                className={navLinkText}
                activeClassName={activeNavLink}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main style={{ 
        width: '100%', 
        maxWidth: '100%', 
        overflowX: 'hidden', 
        padding: '0 15px', 
        boxSizing: 'border-box',
        marginTop: '60px' // Add space below the fixed navbar
      }}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footer}>
        <div style={{ textAlign: 'center', padding: '20px 15px', color: '#666', fontSize: '0.9rem', wordWrap: 'break-word' }}>
          © {new Date().getFullYear()} Kuan Zhou. Crafted using Gatsby framework.
        </div>
      </footer>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#4d94ff',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            fontSize: '24px',
            cursor: 'pointer',
            boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
            transition: 'opacity 0.3s',
            opacity: 0.7,
          }}
          onMouseEnter={(e) => e.target.style.opacity = 1}
          onMouseLeave={(e) => e.target.style.opacity = 0.7}
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default Layout
