import React from 'react'
import { withSiteData } from 'react-static'
//
import logoImg from '../logo.png'
import portraitImg from '../profile-photo.jpg'

const styles = {
  container: {
    flexWrap: 'wrap'
},
  portraitContainer: {
    display: "block",
    margin: "auto",
    width: "200px",
    height: "200px"
  } 
}
export default withSiteData(() => (
  <div style={styles.container}>
    <h1 style={{ textAlign: 'center' }}>Welcome to Puppies</h1>
    <div style={styles.portraitContainer}>
      <img src={portraitImg} style={{borderRadius:'50%'}}alt="" />
    </div>
  </div>
))
