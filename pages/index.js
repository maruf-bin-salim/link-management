import styles from '@/styles/landing.module.css';

export default function Home() {
  return (

    <div className={styles.main}>
      <div className={styles.inner}>
        <h2 className={styles.header}>
          Unicap
        </h2>
        <h1 className={styles.prompt}>
          Pioneering BPO Solutions
        </h1>
        <p className={styles.goal}>
          Unleashing Potential in New Markets with Business Process Outsourcing Innovation
        </p>
        <div className={styles.handshake}></div>


      </div>

      <div className={styles.footer}>

        <p id={styles.text23} className={styles.style6}>
          ©2023 Uncap. All Rights reserved.
        </p>

      </div>

    </div>

  );
}
