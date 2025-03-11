"use client";

import { useEffect, useState } from "react";
import { obtemDuracaoAtualPuerperioEmString } from "../../util/PuerperioUtil";

export default function TempoRestante() {
  const [durucaoDoPuerperio, setDurucaoDoPuerperio] = useState("");

  function setDuracao() {
    const newDuracao = obtemDuracaoAtualPuerperioEmString();
    setDurucaoDoPuerperio(newDuracao);
  }

  useEffect(() => {
    setDuracao();
    const indice = setInterval(setDuracao, 1000);
    console.log("cria setInterval");
    return () => clearInterval(indice);
  }, [setDurucaoDoPuerperio, obtemDuracaoAtualPuerperioEmString]);

  return <p>Faltam {durucaoDoPuerperio}</p>;
}
