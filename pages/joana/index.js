import { intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";
import { formatDuration, nascimentoJoana } from "util/PuerperioUtil";
import styles from "./index.module.css";

export default function Joana() {
  const [idade, setIdade] = useState("");

  function atualizaIdade() {
    const duration = intervalToDuration({
      start: nascimentoJoana,
      end: new Date(),
    });

    const novaIdade = formatDuration(duration);
    setIdade(novaIdade);
  }

  useEffect(() => {
    atualizaIdade();
    console.log({ defined: true });
    const indice = setInterval(atualizaIdade, 1000);
    return () => clearInterval(indice);
  }, [setIdade, nascimentoJoana]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Joana</h2>
      <p>A Joana nasceu no dia 12 de fevereiro de 2025 as 18:15</p>
      <p>O Hoje ela tem</p>
      <span className={styles.timer}>{idade}</span>
    </div>
  );
}
