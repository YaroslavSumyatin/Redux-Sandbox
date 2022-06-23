import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";
import App from "./components/app";

const store = createStore(reducer);

const container = document.getElementById("root");
const root = createRoot(container);
const app = (
	<Provider store={store}>
		<App />
	</Provider>
);
root.render(app);
