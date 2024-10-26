import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

	const location = useLocation()
	const locationIncludes = (path) => {
		return location.pathname.includes(path) ?
			'active' : ''
	}

	return (
		<nav>
			<Link className='nav-name' to='/'>Hayley Nickels Yancey</Link>
			<div className='nav-links'>
				<Link className={locationIncludes('/about')} to='/about'>About</Link>
				<Link className={locationIncludes('/work')} to='/work'>Work</Link>
				<Link className={locationIncludes('/resources')} to='/resources'>Open Resources</Link>
			</div>
		</nav>
	)
}