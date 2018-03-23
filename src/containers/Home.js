import React from 'react'
import { withSiteData } from 'react-static'
import { Link } from 'react-static'
import styled from 'styled-components';


import logoImg from '../logo.png'


const CenterContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
`;

const CenterContent = styled.div`
  width: auto;
  height: auto;
  margin: auto;
  text-align: center;
  margin-top: 30vh;
`

const styles = {
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  links: {
    fontSize: "1.5em"
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
  <CenterContainer>
    <CenterContent>
      <h1 id="home-title" className="aligner-item" style={styles.h1}>ROSEANNA MCFARLANE</h1>
      <br />
      <p id="home-sub-title" className="aligner-item">web developer</p>
      <div style={styles.links}>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/blog">Blog</Link>
        <Link style={styles.link} to="/projects">Projects</Link>
      </div>
    </CenterContent>
  </CenterContainer>
))
