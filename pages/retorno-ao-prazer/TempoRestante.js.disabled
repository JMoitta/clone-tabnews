"use client";

import { useEffect, useState } from "react";
import { obtemDuracaoAtualPuerperioEmString } from "../../util/PuerperioUtil";
import styles from "./TempoRestante.module.css";

export default function TempoRestante() {
  const [durucaoDoPuerperio, setDurucaoDoPuerperio] = useState("");

  function setDuracao() {
    const newDuracao = obtemDuracaoAtualPuerperioEmString();
    setDurucaoDoPuerperio(newDuracao);
  }

  useEffect(() => {
    setDuracao();
    const indice = setInterval(setDuracao, 1000);
    return () => clearInterval(indice);
  }, [setDurucaoDoPuerperio, obtemDuracaoAtualPuerperioEmString]);

  return (
    <div>
      <p>Faltam </p>
      <span className={styles.timer}>{durucaoDoPuerperio}</span>
    </div>
  );
}
