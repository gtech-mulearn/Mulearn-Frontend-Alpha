import styles from './index.module.css'

type Props = {}

export const WhatHappens = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <h1>
        <span className='colorText'>What happens</span> at µLearn?
      </h1>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}