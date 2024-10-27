import { useState, useEffect } from 'react'
import './SimpleCard.css'

export default function SimpleCard({title, body, shadowColor}) {

	return (
		<div className='simple-card' style={{boxShadow: `12px 12px ${shadowColor}`}}>
			<h3 className='simple-card-title'>{title}</h3>
			<div className='simple-card-body'>
				{typeof(body) === 'string' ? 
					<p className='simple-card-body-item'>{body}</p> : 
					body.map(item => <p key={item} className='simple-card-body-item'>{item}</p>)
				}
			</div>
		</div>
	)
}