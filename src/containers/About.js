
import React from 'react'
//
import PageLayout from './PageLayout'
import portraitImg from '../profile-photo.jpg'

const styles = {
  p:{
    color: '#8f018f',
    color: '#bd9def',
    maxWidth: "40em",
    fontSize: "20px",
    fontFamily: "lato",
    fontWeight: "400" 
  },
  portraitContainer: {
    display: "block",
    margin: "auto",
    width: "200px",
    height: "200px"
  },
}
export default () => (
  <PageLayout>
    <div style={styles.portraitContainer}>
      <img src={portraitImg} style={{borderRadius:'50%'}}alt="" />
    </div>
    <p style={styles.p}>I'm a software developer who is enthusiastic about technology and design with a passion for creating delightful user experiences.</p>
    <br/>
    <p style={styles.p}>
    Experienced with front end development and creating modern web applications and developer tools.
    I am looking for new opportunities in San Francisco where I can continue to grow and improve my skill set.
    </p>
  </PageLayout>
)
