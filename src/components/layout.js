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
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav className={navBar}>
        <ul className={navLinks}>
          {['About', 'Blog',  'Photos', 'Sharings', 'Links'].map((item, index) => (
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
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
