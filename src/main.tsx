import { createRoot } from "react-dom/client";
import "./index.css";
import { Leva } from "leva";
import App from "./App";

createRoot(document.getElementById("root")!).render(
	<>
		<App />
		<Leva collapsed />
	</>
);
