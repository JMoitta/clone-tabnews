"use client";
import Exercicio from "components/notas-musicais/exercicio";
import { cifraViolinoPrimeiraPosicao } from "notas-musicais/notas";
import { useState } from "react";

const mapaCifraParaNota = {
  c: "DÓ",
  d: "RÉ",
  e: "MI",
  f: "FÁ",
  g: "SOL",
  a: "LÁ",
  b: "SI",
};

export default function NotaMusicais() {
  const [contagemRegressiva, setContagemRegressiva] = useState("");
  const indiceCifra = Math.floor(
    Math.random() * cifraViolinoPrimeiraPosicao.length,
  );

  function handleCorresponderNotaComCifra(notaSelecionada) {
    const [letraCifra] = cifraViolinoPrimeiraPosicao[indiceCifra].split("/");
    setContagemRegressiva(3);
    return notaSelecionada == mapaCifraParaNota[letraCifra];
  }
  return (
    <Exercicio
      notaDiagrama={cifraViolinoPrimeiraPosicao[indiceCifra]}
      notaPrecionada={handleCorresponderNotaComCifra}
      contagemRegressiva={contagemRegressiva}
    />
  );
}
