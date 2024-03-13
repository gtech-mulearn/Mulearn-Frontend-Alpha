import styles from "./index.module.css";

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
          src="https://ondc.org/assets/theme/video/video-desktop1.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Hero;
