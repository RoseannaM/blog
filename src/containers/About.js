
import React from 'react'
import styled from 'styled-components'
import PageLayout from './PageLayout'
import portraitImg from '../profile-photo.jpg'
import * as feather from 'styled-icons/feather'
import {Github} from 'styled-icons/feather/Github'
import {Linkedin} from 'styled-icons/feather/Linkedin'
import {Twitter} from 'styled-icons/feather/Twitter'


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
  color: #bd9def;
  max-width: 40em;
  font-size: 20px;
  font-family: lato;
  font-weight: 400;
`
const IconsContainer = styled.div`
  margin: 10px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
`

const IconLink = styled.a`
  margin: 0 5px;
`

export default () => (
  <PageLayout>
    <PortraitContainer>
      <PortraitDiv src={portraitImg} alt="profile photo"/>
    </PortraitContainer>
    <IconsContainer>
      <IconLink role="link" target="_blank" href="https://github.com/RoseannaM" tabindex="0" type="button">
        <Github css="color:#ff00ea; margin: 5px; height:40px; width: 40px"/>
      </IconLink>
      <IconLink role="link" target="_blank" href="https://www.linkedin.com/in/roseannamcfarlane/" tabindex="0" type="button">
        <Linkedin css="color:#ff00ea; margin: 5px; height:40px; width: 40px"/>
      </IconLink>
      <IconLink role="link" target="_blank" href="https://twitter.com/mcfarlrose" tabindex="0" type="button">
        <Twitter css="color:#ff00ea; margin: 5px; height:40px; width: 40px"/>
      </IconLink>
    </IconsContainer>
    
    <AboutParagraph >I'm a software developer who is enthusiastic about technology and design with a passion for creating delightful user experiences.</AboutParagraph>
    <br/>
    <AboutParagraph>
    Experienced with front end development and creating modern web applications and developer tools.
    I am looking for new opportunities in San Francisco where I can continue to grow and improve my skill set.
    </AboutParagraph>
  </PageLayout>
)
