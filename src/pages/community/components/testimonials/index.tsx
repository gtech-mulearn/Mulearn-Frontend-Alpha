import demo from "./demo.png";
import Marquee from "react-fast-marquee";
import styles from "./index.module.css";

type Props = {};

export const Testimonials = (_props: Props) => {
  const data = [
    {
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Michael Lacefield",
      desig: "Co-founder, XYZ",
      image: demo,
    },
  ];

  const marqParams = {
    autoFill: true,
    pauseOnHover: true,
    gradient: false,
    speed: 30,
    drag: true,
  };
  return (
    <div className={styles.MainWrap}>
      <h1>
        µLearn <span className="colorText">success stories</span>
      </h1>
      <Marquee
        {...marqParams}
        style={{ width: "100vw" }}
        className={styles.Wrapper}
      >
        {data.map((item, index) => (
          <div key={index} className={styles.Individual}>
            <p>"{item.para}"</p>
            <div>
              <img src={item.image} alt="textimonials" loading="lazy" />
              <div>
                <h4 className="colorText">{item.name}</h4>
                <span>{item.desig}</span>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
