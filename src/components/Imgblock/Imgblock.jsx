import React, { useState } from "react";
import profile from "../../assets/profile-picture.jpeg";
import st from "./index.module.scss";

const Imgblock = () => {
	const [active, setActive] = useState(false);

	return (
		<div className={st.cont}>
		<h3>Фотография</h3>
			<img
				className={active ? st.active : st.profilePhoto}
				onClick={() => setActive(!active)}
				src={profile}
				alt="profile photo"
			/>
		</div>
	);
};

export default Imgblock;
