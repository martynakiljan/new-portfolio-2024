/** @format */
import React from 'react'
import Title from './Title'
import '../styles/projects.scss'
import project1 from '../assets/images/project1.png'
import project2 from '../assets/images/project2.png'
import project4 from '../assets/images/project4.png'
import project5 from '../assets/images/project5.png'
import project6 from '../assets/images/project6.png'
import project7 from '../assets/images/project7.png'
import project8 from '../assets/images/project8.png'
import project9 from '../assets/images/project9.png'
import project10 from '../assets/images/project10.png'
import project11 from '../assets/images/project11.png'
import Project from './Project'
import MoreProjectsInfo from './MoreProjectsInfo'

const Projects = () => {
	return (
		<>
			<Title title='Projects' id='projects' />
			<div className='projects__wrapper'>
				<Project
					title='Website'
					subtitle='Yadera GmbH'
					description='Die Webseite wurde für das Bauunternehmen Yadera GmbH erstellt. Die Seite wurde in Absprache mit dem Firmeninhaber realisiert – alle Anforderungen und Wünsche wurden erfüllt.'
					technologies='REACT, REACT ROUTER DOM & SCSS '
					hrefLive='https://www.yadera.ch/'
					hrefCode='https://github.com/martynakiljan/yadera-gmbh'
					projectUrl={project11}
				/>
				<Project
					title='App'
					subtitle='Food App'
					description="An application enabling food ordering. It's built using React, TypeScript & MUI. Ensuring data persistence even after browser refresh! You can add and remove food items from the cart, search and sort food items, and a form to collect and verify your details. Total price will always be updated."
					technologies='REACT, TYPESCRIPT, REACT ROUTER DOM, MUI & SCSS '
					hrefLive='https://eat-app-ts.vercel.app/all-food'
					hrefCode='https://github.com/martynakiljan/eat-app-ts'
					projectUrl={project5}
				/>
				<Project
					title='Website'
					subtitle='for Bogdan Gipser  GmbH Company'
					description='Website for a company specializing in dry construction. The company wanted a simple and minimalist website. A Website with built-in customer communication :)'
					technologies='REACT & SCSS'
					hrefLive='https://www.bogdan-gipser.ch/'
					hrefCode='https://github.com/martynakiljan/website-bogdan-gipser'
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
					subtitle='for Blimka Phototography'
					description='Website for a photographer from Poland :)'
					technologies='REACT & SCSS'
					hrefLive='https://martynakiljan.github.io/website-blimka-photography/'
					hrefCode='https://github.com/martynakiljan/website-blimka-photography'
					projectUrl={project7}
				/>
				<Project
					title='Website'
					subtitle='For Sky Investment'
					description='Website for a company investing in skyscrapers.'
					technologies='REACT, REACT ROUTER DOM  & SCSS'
					hrefCode='https://github.com/martynakiljan/sky-inwestment-website'
					hrefLive='https://sky-investment.vercel.app/'
					projectUrl={project9}
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
					title='Website'
					subtitle='For a mountain guide'
					description='A modern website for mountain enthusiasts.'
					technologies='REACT & SCSS'
					hrefCode='https://github.com/martynakiljan/your-mountain-guide-website'
					hrefLive='https://martynakiljan.github.io/your-mountain-guide-website/'
					projectUrl={project10}
				/>
				<Project
					title='App'
					subtitle='Book Hotel App'
					description='This is an application resembling Booking.com, but much smaller, built with React, TS and Tailwind CSS. It has greater potential and will be expanded :)'
					technologies='REACT, TYPESCRIPT, REACT ROUTER DOM & TAILWIND CSS'
					hrefLive='https://martynakiljan.github.io/book-hotel-app'
					hrefCode='https://github.com/martynakiljan/book-hotel-app'
					projectUrl={project6}
				/>
				<Project
					title='Website'
					subtitle='For H.J Architecture'
					description='Single page for an architect from Zurich'
					technologies='REACT & SCSS'
					hrefCode='https://github.com/martynakiljan/architecture-website'
					hrefLive='https://martynakiljan.github.io/architecture-website/'
					projectUrl={project8}
				/>

				<MoreProjectsInfo />
			</div>
		</>
	)
}

export default Projects
