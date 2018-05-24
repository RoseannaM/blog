
import React from 'react'
import styled from 'styled-components'
import PageLayout from './PageLayout'
import portraitImg from '../profile-photo.jpg'

const PortraitDiv = styled.img`
  border-radius:50%;
  width: 200px;
`
const PortraitContainer = styled.div`
  display: block;
  margin: auto;
  width: 200px;
  height: 200px;
`
const AboutParagraph = styled.p`
  color: #8f018f;
  color: #bd9def;
  max-width: 40em;
  font-size: 20px;
  font-family: lato;
  font-weight: 400;
`
// const styles = {
//   p:{
//     color: '#8f018f',
//     color: '#bd9def',
//     maxWidth: "40em",
//     fontSize: "20px",
//     fontFamily: "lato",
//     fontWeight: "400" 
//   },
//   portraitContainer: {
//     display: "block",
//     margin: "auto",
//     width: "200px",
//     height: "200px"
//   }
// }

export default () => (
  <PageLayout>
    <PortraitContainer>
      <PortraitDiv src={portraitImg} alt="" />
    </PortraitContainer>
    <AboutParagraph >I'm a software developer who is enthusiastic about technology and design with a passion for creating delightful user experiences.</AboutParagraph>
    <br/>
    <AboutParagraph>
    Experienced with front end development and creating modern web applications and developer tools.
    I am looking for new opportunities in San Francisco where I can continue to grow and improve my skill set.
    </AboutParagraph>
  </PageLayout>
)
