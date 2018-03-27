import React from 'react'
import { withSiteData } from 'react-static'
import { Link } from 'react-static'
import styled from 'styled-components';


import logoImg from '../logo.png'

const HomeTitle = styled.h1`
    color:#FF00EA;
    background: linear-gradient(135deg, #FF00EA, #8F018F, #07E2FF, #5900FF);
    background: -o-linear-gradient(135deg, #FF00EA, #8F018F, #07E2FF, #5900FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Raleway', sans-serif;
    font-size: 3em;
    text-align: center;  
    margin: auto;
    @media (max-width:320px) {
      font-size: 2em;
    }
`

const HomeSubTitle = styled.h2`
  font-family: 'Lato', sans-serif;  
  color: #FF00EA;
  font-size: 3em;
  font-weight: 300;
  @media (max-width:320px) {
      font-size: 1em;
    }
`

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
    textDecoration: 'none',
    color:' #108db8',
    fontWeight: 'bold',
    margin: '5px'
  }
}
export default withSiteData(() => (
  <CenterContainer>
    <CenterContent>
      <HomeTitle  className="aligner-item" style={styles.h1}>ROSEANNA MCFARLANE</HomeTitle>
      <br/>
      <HomeSubTitle  className="aligner-item">web developer</HomeSubTitle>
      <div style={styles.links}>
        <Link style={styles.link} to="/about">About</Link>
        <Link style={styles.link} to="/blog">Blog</Link>
        <Link style={styles.link} to="/projects">Projects</Link>
      </div>
    </CenterContent>
  </CenterContainer>
))
