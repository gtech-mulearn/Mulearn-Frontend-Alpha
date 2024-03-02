import { Outlet } from "react-router-dom";

import Footer from "../footer";
import { Navbars } from "../navbar";
import styles from './index.module.css'

const Layout = () => {
	return (
		<div className={styles.Wrapper}>
			<Navbars />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;