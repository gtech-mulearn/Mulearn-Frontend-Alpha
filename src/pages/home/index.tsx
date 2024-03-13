import Partners from "../../components/partners";
import { Banner } from "./components/banner";
import { Events } from "./components/events";
import Hero from "./components/hero";
import { MuStory } from "./components/muStory";
import { Testimonials } from "./components/testimonials";


const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Hero />
			<MuStory />
			<Banner />
			<Partners />
			<Events />
			<Testimonials />
		</div>
	);
};

export default Home;
