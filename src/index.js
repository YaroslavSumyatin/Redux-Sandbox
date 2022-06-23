import { createRoot } from "react-dom/client";
import { bindActionCreators, createStore } from "redux";
import * as actions from "./actions";
import reducer from "./reducer";
import Counter from "./counter.js";

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const container = document.getElementById("root");
const root = createRoot(container);
const update = () => {
	const counter = (
		<Counter
			counter={store.getState()}
			inc={inc}
			dec={dec}
			rnd={() => {
				const randomNumber = Math.floor(Math.random() * 10 - 5);
				rnd(randomNumber);
			}}
		/>
	);
	root.render(counter);
};

update();
store.subscribe(update);
