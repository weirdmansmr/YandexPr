import React, { useState } from "react";
import st from "./index.module.scss";

const About = () => {
	const [active, setActive] = useState(false);

	return (
		<div
			className={active ? st.active : st.about_cont}
			onClick={() => setActive(!active)}
		>
			<h2>Как я оказался в IT?</h2>
			{active ? (
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
					delectus cumque iusto quas fugit! Deserunt officiis reiciendis, magni
					consequatur reprehenderit a necessitatibus et totam doloremque
					repudiandae. Consequatur voluptates accusantium dolorem?
				</p>
			) : (
				``
			)}
		</div>
	);
};

export default About;
