"use client";

import { addDays, formatDuration, intervalToDuration } from "date-fns";
import { useEffect, useState } from "react";
import { ptBR } from "date-fns/locale";

const nascimentoJoana = new Date(2025, 1, 12, 18, 15, 0);
const fimDoPererio = addDays(nascimentoJoana, 40);
console.log(nascimentoJoana);

export default function VoltaAFelicidade() {
  const [durucaoDoPuerperio, setDurucaoDoPuerperio] = useState("");

  function setDuracao() {
    const duration = intervalToDuration({
      start: new Date(),
      end: fimDoPererio,
    });
    const newDuracao = formatDuration(duration, {
      format: ["months", "days", "hours", "minutes", "seconds"],
      locale: ptBR,
      delimiter: ", ",
    });
    setDurucaoDoPuerperio(newDuracao);
  }

  useEffect(() => {
    const indice = setInterval(setDuracao, 1000);
    return () => clearInterval(indice);
  }, []);
  return (
    <>
      <h2>Joana</h2>
      <p>A Joana nasceu no dia 12 de fevereiro de 2025 as 18:15</p>
      <p>
        O puerpério teve inicio mesmo dia do nascimento e terminara no dia 24 de
        março de 2025 as 18:15
      </p>
      <p>Faltam {durucaoDoPuerperio}</p>
    </>
  );
}
