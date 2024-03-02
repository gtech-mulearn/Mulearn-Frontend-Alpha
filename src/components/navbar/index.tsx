import { Link } from "react-router-dom";
import styles from "./index.module.css";

const Navbar = () => {
	return (
		<div className={styles.navbarWrapper}>
			<div>MuLearn</div>
			<div>
				<Link to="/community">Community</Link>
				<Link to="/get-involved">Get Involved</Link>
				<Link to="/careers">Careers</Link>
				<Link to="/projects">Projects</Link>
			</div>
			<div>Discord</div>
			<div>
				<button>Join Us</button>
			</div>
		</div>
	);
};

export default Navbar;
