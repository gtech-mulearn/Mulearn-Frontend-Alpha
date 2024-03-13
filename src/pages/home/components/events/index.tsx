import styles from "./index.module.css";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "./styles.css";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

import demo from "./demo.png";
type Props = {};
type IndividualContainerProps = {
  para: string;
  name: string;
  image: string;
};
export const Events = (_props: Props) => {
  const data = [
    {
      image: demo,
      name: "Permute",
      para: "Permute was µLearn’s blockbuster event, showcasing its perpetual evolution. The Big Bang of educational innovation: µLearn 3.0 was unveiled at the event, propelling a new exciting frontier for the future! ",
    },
    {
      image: demo,
      name: "Top 100 Series",
      para: `Held at Huddle Global 2023, The Top 100 series was a dazzling showcase of India's coding elite, flaunting their programming brilliance. Amidst fierce competition, 100 emerged winners, their victory a beacon for aspiring coders. `,
    },
    {
      image: demo,
      name: "Mutate",
      para: `Mutate is where MuLearn's Campus Leads meet up to spark innovation and collaboration, ignite change, and reshape education's future.`,
    },
    {
      image: demo,
      name: "In 50 hours",
      para: `In50Hrs is the unlimited creativity and knowledge sprint, spanning 50 hours packed with ideation, prototyping and presentation.  Not only is it a whirlwind for collaborative prowess, it is a launch for careers into a stratosphere of success! `,
    },
    {
      image: demo,
      name: "Permute",
      para: `Meet Aami, an eager learner hungry for growth! Join her voyage through the captivating µVerse, where she seizes opportunities, builds learning circles, and immerses herself in events, emerging industry-ready with newfound skills and confidence.`,
    },
    {
      image: demo,
      name: "Permute",
      para: `Meet Aami, an eager learner hungry for growth! Join her voyage through the captivating µVerse, where she seizes opportunities, builds learning circles, and immerses herself in events, emerging industry-ready with newfound skills and confidence.`,
    },
  ];
  const swiperRef = useRef<SwiperRef>(null);

  const [set, setset] = useState(5);

  useEffect(() => {
    if (window.innerWidth < 1300) {
      setset(4);
    }
    if (window.innerWidth < 1000) {
      setset(3);
    }
    if (window.innerWidth < 600) {
      setset(2);
    }
  }, []);

  const slideLeft = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  slideLeft();
  return (
    <div className={styles.Wrapper}>
      <h1>
        <span className="colorText">Defining</span> µLearn events
      </h1>
      <div className={styles.Swiperwrapper}>
        <div className={styles.LeftMask}></div>
        <Swiper
          slidesPerView={set}
          className="Stories"
          grabCursor={true}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination-container",
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          ref={swiperRef}
        >
          {data.map(({ para, name, image }) => {
            return (
              <SwiperSlide className={styles.SwiperSlide}>
                <IndividualContainer para={para} name={name} image={image} />
              </SwiperSlide>
            );
          })}
          <div className="custom-pagination-container"></div>
        </Swiper>
        <div className={styles.RightMask}></div>
      </div>
    </div>
  );
};

const IndividualContainer = ({
  para,
  name,
  image,
}: IndividualContainerProps) => {
  return (
    <div className={styles.IndividualContainer}>
      <img src={image} alt={name} />
      <div className={styles.Details}>
        <h2 className="colorText">{name}</h2>
        <p>{para}</p>
      </div>
    </div>
  );
};
