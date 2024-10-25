import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
	return (
		<nav>
			<Link className='nav-name' to='/'>Hayley Nickels Yancey</Link>
			<div className='nav-links'>
				<Link to='/about'>About</Link>
				<Link to='/work'>Work</Link>
				<Link to='/resources'>Open Resources</Link>
			</div>
		</nav>
	)
}