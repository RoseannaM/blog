
import React from 'react'
import { Link } from 'react-static'

//children prop is whatever is passed in as children of the element
const styles = {
    nav: {
        textAlign: 'right',
        width: '100%',
        background: '#150a1c',
        padding: '10px 5px 0 0',
        margin: '10px 0'
    },

    navA : {
        color: '#FF00EA',
        padding: '1rem',
        display: 'inlineBlock',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20px',
        fontFamily: 'Lato, sans-serif',
        margin: '5px',
        fontWeight:'300'
      }
}
export default ({ children }) => (
  <div>
    <nav style={styles.nav}>
        <Link style={styles.navA} to="/">Home</Link>
        <Link style={styles.navA} to="/about">About</Link>
        <Link style={styles.navA} to="/blog">Blog</Link>
        <Link style={styles.navA} to="/projects">Projects</Link>
    </nav>
    <div className="content">
        {children}
    </div>
  </div>
)
