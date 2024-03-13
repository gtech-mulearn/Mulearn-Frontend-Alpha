import Partners from "../../components/partners";
import { Events } from "./components/events";
import Hero from "./components/hero";
import { Testimonials } from "./components/testimonials";


const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Hero />
			<Partners />
			<Events />
			<Testimonials />
		</div>
	);
};

export default Home;
