/** @format */
<<<<<<< HEAD
import React from 'react'
import Title from './Title'
import '../styles/projects.scss'
import project1 from '../assets/images/project-1.png'
import project2 from '../assets/images/project2.png'
import project4 from '../assets/images/project4.png'
import project3 from '../assets/images/project3.png'
import project5 from '../assets/images/project5.png'
import project6 from '../assets/images/project6.png'
import Project from './Project'
import MoreProjectsInfo from './MoreProjectsInfo'

const Projects = () => {
	return (
		<>
			<Title title='Projects' id='projects' />
			<div className='projects__wrapper'>
				<Project
					title='App'
					subtitle='Eat App'
					description="An application enabling food ordering. It's built using React, TypeScript, MUI, and localStorage, ensuring data persistence even after browser refresh! You can add and remove food items from the cart, search and sort food items, and a form to collect and verify your details. Total price will always be updated."
					hrefLive='https://eat-app-ts.vercel.app/all-food'
					hrefCode='https://github.com/martynakiljan/eat-app-ts'
					projectUrl={project5}
				/>
				<Project
					title='Website'
					subtitle='for ZweiM Bau GmbH Company'
					description='Website for a company specializing in dry construction. The company wanted a simple and minimalist website. A website built with client communication in mind :)'
					technologies='REACT & SCSS'
					hrefLive='https://www.zweimbau.ch/'
					hrefCode='https://github.com/martynakiljan/website-zweiMBau'
					projectUrl={project1}
				/>
				<Project
					title='App'
					subtitle='Todo List'
					description='An application that helps you create tasks. You can add a task, remove it, mark it as important, move it up or down, or you can drag and drop it, you can also mark it as finished!'
					technologies='REACT, MUI & CSS'
					hrefLive='https://todo-react2-wheat.vercel.app'
					hrefCode='https://github.com/martynakiljan/todo-react'
					projectUrl={project2}
				/>
				<Project
					title='Website'
					subtitle='For Foos Event Company'
					description='A website for cool people who are champions in table football :) They wanted a colorful website - and they got it!'
					technologies='REACT, MUI & SCSS'
					hrefLive='https://www.foos-events.com/'
					hrefCode='https://github.com/martynakiljan/foos-football-website'
					projectUrl={project3}
				/>
				<Project
					title='App'
					subtitle='The New York Times App'
					description='An application that shows news from around the world. You can also search for articles. The articles, fetched from an API, are displayed with pagination.'
					technologies='REACT, SCSS, STYLED COMPONENTS & FETCH API'
					hrefCode='https://github.com/martynakiljan/the-new-york-times-app/tree/main'
					projectUrl={project4}
				/>
				<Project
					title='App'
					subtitle='Book Hotel App (IN PROGRESS)'
					description='This is an application resembling Booking.com, but much smaller, built with React, TS and Tailwind CSS. It has greater potential and will be expanded :)'
					technologies='REACT, TYPESCRIPT & TAILWIND CSS'
					hrefCode='https://github.com/martynakiljan/book-hotel-app'
					projectUrl={project6}
				/>
				<MoreProjectsInfo />
			</div>
		</>
	)
}
=======
import Title from "./Title";
import "../styles/projects.scss";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project4 from "../assets/images/project4.png";
import project3 from "../assets/images/project3.png";
import Project from "./Project";
import MoreProjectsInfo from "./MoreProjectsInfo";

const Projects = () => {
  return (
    <>
      <Title title="Projects" id="projects" />
      <div className="projects__wrapper">
        <Project
          title="Website"
          subtitle="for ZweiM Bau GmbH Company"
          description="Website for a company specializing in dry construction. The
              company wanted a simple and minimalist website."
          technologies="REACT, CSS, NPM"
          hrefLive="https://www.zweimbau.ch/"
          hrefCode="https://github.com/martynakiljan/website-zweiMBau"
          projectUrl={project1}
        />
        <Project
          title="App"
          subtitle="Todo List"
          description="An application that helps you create tasks. You can add a task,
          remove it, mark it as important, move it up or down, or you can
          drag and drop it, you can also mark it as finished!"
          technologies="REACT, MUI, NPM, CSS"
          hrefLive="https://todo-react-indol-psi.vercel.app/"
          hrefCode="https://github.com/martynakiljan/todo-react"
          projectUrl={project2}
        />
        <Project
          title="Website"
          subtitle="For Foos Event Company"
          description="A website for cool people who are champions in table football :)"
          technologies="REACT, MUI, NPM, CSS"
          hrefLive="https://www.foos-events.com/"
          hrefCode="https://github.com/martynakiljan/foos-football-website"
          projectUrl={project3}
        />
        <Project
          title="App"
          subtitle="The New York Times App"
          description="An application that shows news from around the world"
          technologies="REACT, NPM, CSS, STYLED COMPONENTS, FETCH API"
          hrefCode="https://github.com/martynakiljan/the-new-york-times-app/tree/main"
          projectUrl={project4}
        />
        <MoreProjectsInfo />
      </div>
    </>
  );
};
>>>>>>> cbcf44c7b515515e09b211eba324bc1dadc18252

export default Projects
