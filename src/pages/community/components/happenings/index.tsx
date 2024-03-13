import styles from './index.module.css'

type Props = {}

export const Happenings = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <h1>
        <span className="colorText">Happenings</span> at µLearn
      </h1>
    </div>
  );
}