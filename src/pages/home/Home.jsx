import { useEffect, useState } from 'react'
import ProjectCard from '../../components/projectCard/ProjectCard'
import './Home.css'

export default function Home() {

	const [projects, setProjects] = useState([])
	useEffect(() => {
		fetch('/data/projects/all.json')
		.then(res => res.json())
		.then(data => setProjects(data))
	})

	return (
		<main className='home'>
			<h1>Hi! I'm Hayley.</h1>
			<img className='headshot' alt='Hayley Nickels Yancey' src='https://media.licdn.com/dms/image/v2/D5603AQGgsyolLS5XIQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728870866806?e=1735171200&v=beta&t=KfEzlB8PgkDHl_uBptvMYLAr9Kqh0LNDKHrnytprZE0'/>
			<div className='bio'>
				<p>I'm glad you're here ˙ᵕ˙</p>
				<p>I’m an instructional designer who loves utilizing technology to make learning engaging and accessible.</p>
			</div>

			<div className='projects-banner'>
				<p>Projects ↓ ↓ ↓</p>
			</div>

			<section id='projects'>
				{Object.entries(projects).map(([id, prj]) => 
					<ProjectCard key={id} id={id} {...prj} bannerColor={prj.lightColor} shadowColor={prj.darkColor}/>
				)}
			</section>
		</main>
	)
}