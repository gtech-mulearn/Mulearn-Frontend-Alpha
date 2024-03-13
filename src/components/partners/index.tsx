import styles from "./index.module.css";
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";
import Marquee from "react-fast-marquee";

const data = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img1,
  img2,
  img3,
  img4,
  img5,
  img1,
  img2,
  img3,
  img4,
  img5,
];

const Partners = () => {
  return (
    <div className={styles.partners}>
      <h1>
        Powered by <span className="colorText">our partners</span>
      </h1>
      <div className={styles.Wrapper}>
        {data.map((item, index) => (
          <div key={index}>
            {" "}
            <img src={item} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;

export const PartnersLinear = () => {
  const marqParams = {
    autoFill: true,
    pauseOnHover: true,
    gradient: false,
    speed: 80,
    drag: true,
  };
  return (
    <div className={styles.PartnerWrapper}>
      <h1>
        Powered by <span className="colorText">our partners</span>
      </h1>
      <Marquee
        {...marqParams}
        style={{ width: "100vw" }}
        className={styles.container}
      >
        {data.map((item, index) => (
          <div key={index} className={styles.inner}>
            {" "}
            <img src={item} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export const PartnersCarrers = () => {
  const marqParams = {
    autoFill: true,
    pauseOnHover: true,
    gradient: false,
    speed: 80,
    drag: true,
  };
  return (
    <div className={styles.PartnerWrapper}>
      <h1>
        Presenting our <span className="colorText">talent hunters</span>
      </h1>
      <Marquee
        {...marqParams}
        style={{ width: "100vw" }}
        className={styles.container}
      >
        {data.map((item, index) => (
          <div key={index} className={styles.inner}>
            {" "}
            <img src={item} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
