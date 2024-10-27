import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Project from "./pages/project/Project";
import {ScrollToTop} from "./hooks/scrollToTop";

export default function App() {

	ScrollToTop()

	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' exact element={<Home />}/>
				<Route path='/projects/:id' element={<Project />} />
				<Route path='/about' element={<ComingSoon />} />
				<Route path='/work' element={<ComingSoon />} />
				<Route path='/resources' element={<ComingSoon />} />
				<Route path='/contact' element={<ComingSoon />} />
				<Route path='*' element={<NotFound />}/>
			</Routes>
			<Footer />
		</>
	)
}

function ComingSoon() {
	return (
		<main className='not-found'>
			<h1>Coming Soon ˙ᵕ˙</h1>
			<p>Stay tuned for updates to this page</p>
		</main>
	)
}

function NotFound() {
	return (
		<main className='not-found'>
			<h1>Page Not Found</h1>
			<p>Try using the links at the top of the page to get around ˙ᵕ˙</p>
		</main>
	)
}