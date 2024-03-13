import styles from './index.module.css'
import bg from './bg.png'
type Props = {}

export const Landing = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        <h1>
          <div>
            <span>Endless</span>&nbsp;<div>opportunities,</div>
          </div>{" "}
          <p>constant growth</p>
        </h1>
        <p>Join the fast growing student community</p>
      </div>
      <img src={bg} alt="" />
    </div>
  );
}