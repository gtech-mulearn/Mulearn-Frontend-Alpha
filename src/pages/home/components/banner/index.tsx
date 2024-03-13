import styles from './index.module.css'
type Props = {}

export const Banner = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div>
        <h1>1,900+</h1>
        <p>Colleges</p>
      </div>
      <div>
        {" "}
        <h1>29,000+</h1>
        <p>Discord Members</p>
      </div>
      <div>
        {" "}
        <h1>250+</h1>
        <p>Events</p>
      </div>
    </div>
  );
}