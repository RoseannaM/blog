import React from 'react'
import { withRouteData, Link } from 'react-static'
import PageLayout from './PageLayout'
import styled from 'styled-components';

export const ListContainer = styled.div`
  color: white;
  padding: initial;
  list-style: none;
  display: flex;
  flex-direction: column;
  a {
    color: green;
  }
`;
export const ListItem = styled.li`
  height: auto;
  border: solid 1px white;
  margin: 0 0 50px ;
`
export const ListItemHeader = styled.div`
  width: auto;
  overflow: hidden;
  min-width:auto;
  cursor: pointer;
  :hover {
    box-shadow: rgba(44, 178, 225, 0.64) 0px 0px 3px 3px
  }
`
export const ListItemHeaderImg = styled.img` 
  width: 100%; 
`
export const ListItemContent = styled.div`
  line-height: 1.3;
  margin: 20px;
  color: white;
  a {
    color: #108db8;
  }
`

const styles = {
  linkStyle : {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default withRouteData(({ posts }) => (

  <PageLayout>  
  <div>
    <br/>
    <ListContainer>
      {posts.map(post => (
        <ListItem key={post.data.slug}>
          <ListItemHeader>
          <Link style={styles.linkStyle} to={`/blog/post/${post.data.slug}`}>
          <ListItemHeaderImg src={post.data.thumbnail} alt="" />
          </Link>
          </ListItemHeader>
          <ListItemContent>
          <p>{post.content.substring(0,250)  + '...'}</p>
          </ListItemContent>
        </ListItem>
      ))}
    </ListContainer>
  </div>
</PageLayout>

))
// {console.log(post.content.substring(0,100)  + '...')}