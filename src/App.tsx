import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Intro from "@/sections/intro";
import Outro from "@/sections/outro";
import Overview from "@/sections/overview";

const App = () => {
	useSmoothScroll();

	return (
		<main>
			<Intro />
			<Overview />
			<Outro />
		</main>
	);
};

export default App;
