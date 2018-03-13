import React from 'react'
import { withSiteData } from 'react-static'
import { Link } from 'react-static'

import logoImg from '../logo.png'

const styles = {
  aligner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  container: {
    textAlign: 'center',
    backgroundColor: '#150a1c'
},
  h1: {
  },
  link: {
    margin: '5px'
  }
}
export default withSiteData(() => (
  <div className="content" style={styles.aligner}>
    <div className="aligner-item aligner-item-top">…</div>
    <h1 id="home-title" className="aligner-item" style={styles.h1}>ROSEANNA MCFARLANE</h1>
    <br/>
    <p id="home-sub-title" className="aligner-item">web developer</p>
      <div>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/blog">Blog</Link>
        <Link style={styles.link} to="/projects">Projects</Link>
      </div>
    <div className="aligner-item aligner-item-bottom">…</div>
      
    
  </div>
))
