import React from 'react'
import { withRouteData, Link } from 'react-static'
import PageLayout from './PageLayout'

const styles={
  headerContainer:{
    width: '100%',
    height: '200px',
    overflow: 'hidden',
    minWidth: '100%',
    minHeight: '200px'
  },
  headerImg:{
    width: '100%'
  },
  postContent :{
    height:' 500px',
    border: 'solid 1px white',
    padding: '10px',
    color: '#8f018f'
  }
}
export default withRouteData(({ posts }) => (
  <PageLayout>  
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li style={styles.postContent} key={post.data.slug}>
          <div style={styles.headerContainer}>
            <img style={styles.headerImg} src={post.data.thumbnail} alt="" />
          </div>
          <p>{post.data.title}</p>
          <Link to={`/blog/post/${post.data.slug}`}>{post.data.title}</Link>
        </li>
      ))}
    </ul>
  </div>
</PageLayout>

))
