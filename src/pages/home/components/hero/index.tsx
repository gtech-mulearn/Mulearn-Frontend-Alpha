import styles from "./index.module.css";
import vid from "./3.0.mp4";

const Hero = () => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <h1>
          Micro Learning, Macro Impacts{" "}
          <span>
            <p>with endless</p>&nbsp;<div>collaboration</div>
          </span>
        </h1>
        <p>Your Hero’s Journey starts here!</p>
      </div>
      <video
        autoPlay={true}
        muted={true}
        playsInline={true}
        loop={true}
        className={`${styles.heroAsset} ${styles.deskVideo}`}
        poster="https://ondc.org/assets/theme/images/video_img.jpg"
      >
        <source
          src={vid}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Hero;
