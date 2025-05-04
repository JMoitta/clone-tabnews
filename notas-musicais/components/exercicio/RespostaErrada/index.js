import styles from "./index.module.css";

export function RespostaErrada() {
  return (
    <div className={`${styles.barraDeStatus} ${styles.barroDeStatusFalhou}`}>
      Poxa 😢, nao fique triste faz parte do processo 🤓
    </div>
  );
}
