import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'


const PageContent = styled.div`
  margin: auto;
  width: 80%;
  margin-top: 10%;
  background-color: #150a1c;
  height: auto;  
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Nav = styled.nav`
    text-align: right;
    width: 100%;
    background-color: #150a1c;
    padding: 10px 5px 0 0;
    margin: 10px 0;
    @media (max-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
        text-align: center;
        width: 100%;
        padding: 10px 5px 0px 0px;
        margin: 10px 0px;
      }
`;

const NavLink = styled.div`
    color: #FF00EA;
    display: inline-block;
    text-decoration: none;
    font-size: 20px;
    font-family: Lato, sans-serif;
    font-weight:'300';
`;

const styles = {
    navA : {
        color: '#FF00EA',
        padding: '1rem',
        display: 'inlineBlock',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20px',
        fontFamily: 'Lato, sans-serif',
        margin: '5px',
        fontWeight:'300'
      }
}

const ActiveStyle = {
    fontWeight: 'bold',
    color: '#108db8'
}
export default ({ children }) => (
  <div>
    <Nav>
        <NavLink>
            <Link style={styles.navA} to="/" >Home</Link>
        </NavLink>
        <NavLink>
            <Link style={styles.navA} to="/about" activeStyle={ActiveStyle}>About</Link>
        </NavLink>
        <NavLink>
            <Link style={styles.navA} to="/blog" activeStyle={ActiveStyle}>Blog</Link>
        </NavLink>
        <NavLink>
            <Link style={styles.navA} to="/projects" activeStyle={ActiveStyle}>Projects</Link>
        </NavLink>
    </Nav>
    <PageContent className="">
        {children}
    </PageContent>
  </div>
)
