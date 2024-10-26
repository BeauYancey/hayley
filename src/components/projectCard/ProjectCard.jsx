import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({id, icon, title, description, img, btnText, bannerColor, shadowColor}) {
	return (
		<div className='project-card' style={{boxShadow: `16px 16px ${shadowColor}`}}>
			<div className='card-banner' style={{backgroundColor: bannerColor}}>
				<img className='banner-icon' src={icon}/>
			</div>
			<div className='card-content'>
				<div className='card-text'>
					<h2>{title}</h2>
					<p>{description}</p>
					<Link style={{backgroundColor: bannerColor}} className='btn' to={`/projects/${id}`}>{btnText} →</Link>
				</div>
				<img className='card-image' src={img} />
			</div>
		</div>
	)
}