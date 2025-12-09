import { useProgress } from "@react-three/drei";
import { Suspense } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import Intro from "@/sections/intro";
import Outro from "@/sections/outro";
import Overview from "@/sections/overview";

const App = () => {
	useSmoothScroll();

	return (
		<Suspense fallback={<Loader />}>
			<main>
				<Intro />
				<Overview />
				<Outro />
			</main>
		</Suspense>
	);
};

const Loader = () => {
	const { progress } = useProgress();
	return (
		<div className="fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500">
			<div className="text-center">
				<div className="mb-4">
					<div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
						<div
							className="h-full bg-amber-600 transition-all duration-300 ease-out"
							style={{ width: `${progress}%` }}
						/>
					</div>
				</div>
				<p className="text-amber-600 text-lg font-medium">Loading... {progress}%</p>
			</div>
		</div>
	);
};

export default App;
