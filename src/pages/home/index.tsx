import Partners from "../../components/partners";
import { Banner } from "./components/banner";
import { Events } from "./components/events";
import Hero from "./components/hero";
import { MuStory } from "./components/muStory";
import { Testimonials } from "./components/testimonials";
import { WhatHappens } from "./components/whatHappens";


const Home = () => {
	return (
		<div>		
			<Hero />
			<WhatHappens />
			<MuStory />
			<Banner />
			<Partners />
			<Events />
			<Testimonials />
		</div>
	);
};

export default Home;
