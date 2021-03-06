import { connect } from "react-redux/es/exports";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, rnd }) => {
	return (
		<div className="jumbotron text-center">
			<h2>
				<span className="badge badge-primary">{counter}</span>
			</h2>
			<button onClick={dec} className="btn btn-primary btn-large">
				DEC
			</button>
			<button onClick={inc} className="btn btn-primary btn-large">
				INC
			</button>
			<button onClick={rnd} className="btn btn-primary btn-large">
				RND
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({ counter: state });

export default connect(mapStateToProps, actions)(Counter);
