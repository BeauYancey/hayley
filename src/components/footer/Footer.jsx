import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
	return (
		<footer>
			<p>Thanks for being here! Let’s get in touch ˙ᵕ˙</p>
			<div className='contact-buttons'>
				<a href='https://www.linkedin.com/in/hayleyyancey/' className='btn'>LinkedIn</a>
				<Link to='/contact' className='btn'>Send me a message</Link>
			</div>
			<small>This website was designed by Hayley and programmed by Beau</small>
		</footer>
	)
}