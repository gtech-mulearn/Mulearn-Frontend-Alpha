import Partners from "../../components/partners";
import { Banner } from "./components/banner";
import { Events } from "./components/events";
import Hero from "./components/hero";
import { MuStory } from "./components/muStory";
import { Testimonials } from "./components/testimonials";
import { WhatHappens } from "./components/whatHappens";

const Home = () => {
  const preventRightClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    event.preventDefault();
  };
  return (
    <div onContextMenu={preventRightClick}>
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
