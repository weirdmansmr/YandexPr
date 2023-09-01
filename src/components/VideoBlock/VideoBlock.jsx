import React, { useState } from "react";
import video from "../../assets/Tutor.mp4";
import st from "./index.module.scss";

const VideoBlock = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<div className={st.cont}>
			{!toggle && (
				<button className={st.btn} onClick={() => setToggle(true)}>
					Открыть видео
				</button>
			)}
			{toggle && (
				<div className={st.videoCont}>
					<video controls>
						<source src={video} type="video/mp4" />
					</video>
					<button className={st.btn} onClick={() => setToggle(false)}>
						X
					</button>
				</div>
			)}
		</div>
	);
};

export default VideoBlock;
