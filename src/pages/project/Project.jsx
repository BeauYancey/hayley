import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectCard from "../../components/projectCard/ProjectCard";
import './Project.css'
import SimpleCard from "../../components/simpleCard/SimpleCard";

export default function Project() {

	const { id } = useParams()
	const [data, setData] = useState({})

	useEffect(() => {
		fetch(`/data/projects/${id}.json`)
		.then(res => res.json())
		.then(obj => setData(prev => ({...prev, ...obj})))
		fetch('/data/projects/all.json')
		.then(res => res.json())
		.then(obj => setData(prev => ({...prev, ...obj[id]})))
	}, [id])

	function splitFirstSentence(paragraph) {
		let sentences = paragraph.split('.')
		sentences = sentences.filter(s => s)
		sentences = sentences.map(s => s.trim() + '.')
		const [first, ...rest] = sentences
		return [first, rest.join(' ')]
	}

	return (
		<main className="project">
			<ProjectCard {...data} btnText='' bannerColor='' cardColor={data.lightColor} icon='' shadowColor={data.darkColor}/>

			<section id='overview'>
				<section id='problem'>
					<h4>Problem</h4>
					<h3>{data.problem && splitFirstSentence(data.problem)[0]}</h3>
					<p>{data.problem && splitFirstSentence(data.problem)[1]}</p>
				</section>

				<section id='solution'>
					<h4>Solution</h4>
					<h3>{data.solution && splitFirstSentence(data.solution)[0]}</h3>
					<p>{data.solution && splitFirstSentence(data.solution)[1]}</p>
				</section>

				<section id='card-list'>
					{data.info && Object.entries(data.info).map(([key, val]) => 
						<SimpleCard key={key} title={key} body={val} shadowColor={data.lightColor}/>
					)}
				</section>
			</section>

			<div className='process-banner'>
				<p>The Design Process ↓ ↓ ↓</p>
			</div>

			<section id='design-process'>
				<h1>DESIGN PROCESS COMING SOON</h1>
			</section>

		</main>
	);
}