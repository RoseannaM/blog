import React from 'react'
import PageLayout from './PageLayout'
import styled from 'styled-components';

const ProjectsTitle = styled.h2`
    color:#FF00EA;
    background: linear-gradient(135deg, #FF00EA, #8F018F, #07E2FF, #5900FF);
    background: -o-linear-gradient(135deg, #FF00EA, #8F018F, #07E2FF, #5900FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'Raleway', sans-serif;
    font-size: 3em;
    text-align: center;  
    margin: auto;
    margin-bottom: 5%;
    @media (max-width:320px) {
      font-size: 2em;
    }
`
const ProjectsDiv = styled.div`
  width: 100%;
  color: white;
  padding: initial;
  list-style: none;
  display: flex;
  flex-direction: column;
`
const ProjectItem = styled.li`
  height: auto;
  border: solid 1px white;
  margin: 0 0 50px ;
`
const ProjectItemHeader = styled.div`
  width: auto;
  overflow: hidden;
  min-width:auto;
  display: flex;
  flex-direction: column;
`
const ProjectItemHeaderImg = styled.img` 
  width: 100%; 
`
const ProjectItemContent = styled.div `
  line-height: 1.3;
  margin: 20px;
  color: white;
`
const ProjectLink = styled.a `
  border: 10px;
  margin: 5px;
  padding: 5px;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
  cursor: pointer; 
  text-decoration: none;
  min-width: 88px;
  color: #ffffff;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  border-radius: 2px;
  background-color: #bd9def;
`
export default () => (
<PageLayout>
  <div>
    <ProjectsTitle>Projects</ProjectsTitle>
    <br/>
    <ProjectsDiv>
      <ProjectItem className="project-post">
        <ProjectItemHeader>
          <ProjectItemHeaderImg src="/uploads/projects/HTMLCanvas-project.png" alt="HTMLCanvas-project" />
        </ProjectItemHeader>
        <ProjectItemContent>
        <h3>HTML Canvas</h3>
        <h2>March 2016</h2>
        
        <p>As a web developer I think it's important to be able to share your ideas and collaborate on tasks with your team.</p>
        <p>HTML Canvas allows users to create, render and share fully functional HTML, CSS and Javascript code within the Hipchat sidebar.</p> 
        <p>Through real time collaborative editing, it aids agile collaboration and rapid evolution of ideas.</p>
        <ProjectLink role="link" href="https://marketplace.atlassian.com/plugins/html-canvas-add-on/cloud/overview" tabindex="0" type="button">Project URL</ProjectLink>
        </ProjectItemContent>
      </ProjectItem>

      <ProjectItem className="project-post">
        <ProjectItemHeader>
          <ProjectItemHeaderImg src="/uploads/projects/bottle-project.png" alt="Bottle-project" />
        </ProjectItemHeader>
        <ProjectItemContent>
        <h3>Bottle</h3>
        <h2>January 2016</h2>

        <p>Bottle is a messaging application that allows users to send and receive anonymous messages.</p>
        <p>It is styled around the idea of sending a message in a bottle. Each message will be received as a bottle that has arrived at the shoreline.</p> 
        <ProjectLink role="link" href="https://play.google.com/store/apps/details?id=com.techronomicongames.bottle" tabindex="0" type="button">Project URL</ProjectLink>

        </ProjectItemContent>
      </ProjectItem>
     
    </ProjectsDiv>      
  </div>
</PageLayout>
)