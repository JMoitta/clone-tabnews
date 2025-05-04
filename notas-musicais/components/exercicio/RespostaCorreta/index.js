import styles from "./index.module.css";

export function RespostaCorreta() {
  return (
    <div className={`${styles.barraDeStatus} ${styles.barroDeStatusSucesso}`}>
      Muito bom 👏, continue assim 🚀
    </div>
  );
}
