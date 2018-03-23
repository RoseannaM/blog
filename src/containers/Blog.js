import React from 'react'
import { withRouteData, Link } from 'react-static'
import PageLayout from './PageLayout'
import styled from 'styled-components';

export const ListContainer = styled.div`
  padding: initial;
  list-style: none;
`;
export const ListItem = styled.li `
  height: auto;
  border: solid 1px white;
  margin: 0 0 50px ;
`
export const ListItemHeader = styled.div`
  width: auto;
  height: 180px;
  overflow: hidden;
  min-width:auto;
  min-height: 180px;
  cursor: pointer;
  :hover {
    box-shadow: rgba(44, 178, 225, 0.64) 0px 0px 3px 3px
  }
`
export const ListItemHeaderImg = styled.img` 
  width: 100%;
`
export const ListItemContent = styled.div`
  margin: 20px;
  color: #ffffff;
`

export default withRouteData(({ posts }) => (
  <PageLayout>  
  <div>
    <h1>It's blog time.</h1>
    <br/>
    <ListContainer>
      {posts.map(post => (
        <ListItem key={post.data.slug}>
          <ListItemHeader>
          <Link to={`/blog/post/${post.data.slug}`}>
          <ListItemHeaderImg src={post.data.thumbnail} alt="" />
          </Link>
          </ListItemHeader>
          <ListItemContent>
          {console.log(post.content.substring(0,100)  + '...')}
          <p>{post.content.substring(0,250)  + '...'}</p>
          </ListItemContent>
        </ListItem>
      ))}
    </ListContainer>
  </div>
</PageLayout>

))
