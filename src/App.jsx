import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />}/>
			</Routes>
		</>
	)
}