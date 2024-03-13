import styles from "./index.module.css";
import demo from "./demo.png";
import { ClickSvg, Clock, FileSvg, Location } from "./assets/svg";

type Props = {};

export const Hiring = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Content}>
        {" "}
        <h1>
          <span className="colorText">Live</span> Hiring Calls
        </h1>
        <div>
          <Individual />
          <Individual /> <Individual /> <Individual />
        </div>
      </div>
      <div className={styles.Content}>
        <h1>
          <span className="colorText">Previous</span> Hiring
        </h1>
        <div>
          <Individual />
          <Individual />
          <Individual /> <Individual />
        </div>
      </div>
    </div>
  );
};

const Individual = () => {
  return (
    <div className={styles.Individuals}>
      <img src={demo} alt="" />
      <div>
        <h3>Fun Designs</h3>
        <div>
          <p>
            <Clock />6 months
          </p>
          <p>
            <Location /> Trivandrum
          </p>
        </div>
        <div>
          <h1>Strategy and Execution Intern</h1>
          <p>
            We are looking for passionate designers with an experience of same
            field, should have thorough understanding of Adobe Suite.
          </p>
        </div>
        <div>
          <button>
            <FileSvg />
            &nbsp;View JD
          </button>
          <button>
            Apply&nbsp;
            <ClickSvg />
          </button>
        </div>
      </div>
    </div>
  );
};
