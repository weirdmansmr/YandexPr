import React, { useState } from "react";
import st from "./index.module.scss";

const About = () => {
	const [active, setActive] = useState(false);

	return (
		<div
			className={active ? `${st.about_cont} ${st.active}` : `${st.about_cont}`}
			onClick={() => setActive(!active)}
		>
			{!active && <h2>Как я оказался в IT?</h2>}
			{active && (
				<p>
					При поступлении в ВУЗ я решил выбрать ту профессию, в которой я смогу
					совместить приятное с полезным. Так как я очень любил 2 вещи
					(компьютеры и авто), выбора было у меня немного. А учитывая мой
					"математический" склад ума, выбор в итоге пал на программирование, где
					у меня были: взлёты, падения, паузы; но в итоге - я стал всё больше
					времени уделять программированию и саморазвитию.
				</p>
			)}
		</div>
	);
};

export default About;
