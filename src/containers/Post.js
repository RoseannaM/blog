import React from 'react'
import { withRouteData, Link } from 'react-static'
import Moment from 'react-moment'
import Markdown from 'react-markdown'
import PageLayout from './PageLayout'
import {ListContainer, ListItem, ListItemHeader, ListItemContent, ListItemHeaderImg} from './Blog'
//

export default withRouteData((args) => {
  const { post } = args;
  return <PageLayout>
    <div>
    <ListContainer className="blog-post">
    <Link to="/blog/">{'<'} Back</Link>
    <br />
    <h3>{post.data.title}</h3>
    <ListItem key={post.data.slug}>
        <ListItemHeader>
          <ListItemHeaderImg src={post.data.thumbnail} alt="" />
        </ListItemHeader>
          <ListItemContent>
          <Moment format="MMMM Do, YYYY">{post.data.date}</Moment>
          <Markdown source={post.content} escapeHtml={false} /> 
        </ListItemContent>
    </ListItem>
  </ListContainer>
  </div>
  </PageLayout> 
})
