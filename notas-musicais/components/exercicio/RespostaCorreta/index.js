import styles from "./index.module.css";

export function RespostaCorreta() {
  return (
    <div className={styles.container}>
      <span>😎</span>
      <div className={`${styles.barraDeStatus} ${styles.barroDeStatusSucesso}`}>
        Muito bom 👏, continue assim 🚀
      </div>
    </div>
  );
}
