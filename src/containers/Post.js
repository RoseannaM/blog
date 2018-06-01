import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import PageLayout from './PageLayout'
import {ListContainer, ListItem, ListItemHeader, ListItemContent, ListItemHeaderImg} from './Blog'
import styled from 'styled-components';

const BlogDiv = styled.div`
  width: 100%;
`

const styles = {
  linkStyle : {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default withRouteData((args) => {
  const { post } = args;
  return (
  <PageLayout>
    <BlogDiv>
    <ListContainer className="blog-post">
    <ListItem key={post.data.slug}>
        <ListItemHeader>
        <Link style={styles.linkStyle} to={`/blog/post/${post.data.slug}`}>
          <ListItemHeaderImg src={post.data.thumbnail} alt="" />
          </Link>
        </ListItemHeader>
          <ListItemContent>
          <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
          <Markdown source={post.content} escapeHtml={false} /> 
        </ListItemContent>
    </ListItem>
  </ListContainer>
  </BlogDiv>
  </PageLayout> 
  )
})
