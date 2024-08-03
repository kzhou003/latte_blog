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
  return (
    <div className={container}>
      <nav className={navBar}>
        <ul className={navLinks}>
          {['About', 'Blog', 'Photos', 'Sharings', 'Links'].map((item, index) => (
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
      <main style={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footer}>
        <div style={{ textAlign: 'center', padding: '20px 0', color: '#666', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Kuan Zhou. Crafted using Gatsby framework.
        </div>
      </footer>
    </div>
  )
}

export default Layout
