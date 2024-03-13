import styles from './index.module.css'

type Props = {}

export const MuStory = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <h1>
          <span className="colorText">What is</span> µLearn? - The{" "}
          <span className="colorText">Mu</span>Story
        </h1>
        <p>
          Meet Aami, an eager learner hungry for growth! Join her voyage through
          the captivating µVerse, where she seizes opportunities, builds
          learning circles, and immerses herself in events, emerging
          industry-ready with newfound skills and confidence.
        </p>
      </div>
      <div className={styles.VideoSet}>
        <iframe
        
          src="https://www.youtube.com/embed/M9serw-CLU0?si=tZSHXzZnVXZKuSwg&amp;controls=0"
          title="YouTube video player"
         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}