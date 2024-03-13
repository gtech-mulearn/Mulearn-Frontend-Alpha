import styles from "./index.module.css";
import bg from "./bg.png";

type Props = {};

export const Landing = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <img src={bg} alt="" />
      <div className={styles.Content}>
        <h1>
          <div>
            <span>One</span>&nbsp;<div>Community,</div>
          </div>{" "}
          <p>countless stories</p>
        </h1>
        <p>Join the fast growing student community</p>
      </div>
    </div>
  );
};
