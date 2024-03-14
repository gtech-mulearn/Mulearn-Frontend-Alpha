import styles from "./index.module.css";
import { CampusSvg, InterestSvg, PaidSvg } from "./svg";

type Props = {};

export const Landing = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        {" "}
        <h1>
          <div>
            Get&nbsp;<div>Involved,</div>
          </div>
          &nbsp;
          <div> Get Evolved!</div>
        </h1>
        <p>
          Immerse yourself in a wide range of tasks to go beyond your potential!
        </p>
      </div>
      <div className={styles.Detailing}>
        <div>
          <InterestSvg />
          <div>
            <h2>INTEREST</h2>
            <p>GROUPS</p>
          </div>
        </div>
        <div>
          <PaidSvg />
          <div>
            <h2>PAID</h2>
            <p>GIGS</p>
          </div>
        </div>
        <div>
          <CampusSvg />
          <div>
            <h2>CAMPUS</h2>
            <p>CHAPTERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
