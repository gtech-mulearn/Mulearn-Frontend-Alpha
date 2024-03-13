import { PartnersLinear } from "../../components/partners";
import { Happenings } from "./components/happenings";
import { Landing } from "./components/hero";
import { Testimonials } from "./components/testimonials";
import WhyJoin from "./components/whyJoin";

const Community = () => {
  const preventRightClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    event.preventDefault();
  };
  return (
    <div onContextMenu={preventRightClick}>
      <Landing />
      <PartnersLinear />
      <WhyJoin />
      <Happenings />
      <Testimonials />
    </div>
  );
};

export default Community;
