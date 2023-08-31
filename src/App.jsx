import "./App.css";
import About from "./components/About/About";
import GithubLink from "./components/GithubLink/GithubLink";
import Imgblock from "./components/Imgblock/Imgblock";

function App() {
	return (
		<div className="flex">
			<h1>Циановая рамка - кликни</h1>
			<div className="grid">
				<Imgblock />
				<About />
				<GithubLink />
			</div>
		</div>
	);
}

export default App;
