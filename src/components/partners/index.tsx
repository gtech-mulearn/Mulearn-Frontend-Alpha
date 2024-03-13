import styles from './index.module.css'
import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";
import img5 from "./assets/img5.png";

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
    <div className={styles.Wrapper}>
      {data.map((item, index) => (
        <div key={index}>
          {" "}
          {/* Ensure each child in a list has a unique "key" prop. */}
          <img src={item} alt={`Partner ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Partners;
