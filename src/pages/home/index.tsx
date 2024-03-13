import Partners from "../../components/partners";
import Hero from "./components/hero";
import { Testimonials } from "./components/testimonials";


const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Hero />
			<Partners />
			<Testimonials />
		</div>
	);
};

export default Home;
