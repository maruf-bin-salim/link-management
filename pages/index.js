import styles from '@/styles/landing.module.css';

export default function Home() {
  return (
    <html lang="en">
      <body className={styles["is-loading"]}>
        <div id={styles.wrapper}>
          <div id={styles.main}>
            <div className={styles.inner}>
              <div id={styles.container03} className={`${styles.container} ${styles.default}`}>
                <div className={styles.wrapper}>
                  <div className={styles.inner}>
                    <h2 id={styles.text06} className={styles.style2}>
                      Athos
                    </h2>
                    <h1 id={styles.text28} className={styles.style3}>
                      Private AI technology
                    </h1>
                    <p id={styles.text03} className={styles.style1}>
                      Shaping the future of artificial intelligence and natural
                      language processing of b2c technology.
                    </p>
                  </div>
                </div>
              </div>
              <div id={styles.container07} className={`${styles.container} ${styles.default}`}>
                <div className={styles.wrapper}>
                  <div className={styles.inner}>
                    <p id={styles.text23} className={styles.style6}>
                      ©2023 Athos. All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="assets/main.js"></script>
      </body>
    </html>
  );
}
