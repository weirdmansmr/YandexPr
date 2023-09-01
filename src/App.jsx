import "./App.css";
import About from "./components/About/About";
import GithubLink from "./components/GithubLink/GithubLink";
import Imgblock from "./components/Imgblock/Imgblock";
import VideoBlock from "./components/VideoBlock/VideoBlock";

function App() {
	return (
		<div className="flex">
			<h1>Циановый цвет - кликни</h1>
			<div className="grid">
				<Imgblock />
				<About />
				<GithubLink />
				<VideoBlock />
			</div>
		</div>
	);
}

export default App;
