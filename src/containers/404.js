import React from 'react'
//
import PageLayout from './PageLayout'
import styled from 'styled-components'

const MessageText = styled.h1`
  color: #FF00EA;
`
export default () => (
  <PageLayout>  
  <div>
    <MessageText>404 - We couldn't find that page :(</MessageText>
  </div>
  </PageLayout>  

)
