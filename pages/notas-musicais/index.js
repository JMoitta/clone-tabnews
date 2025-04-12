"use client";
import Exercicio from "components/notas-musicais/exercicio";
import {
  cifraViolinoPrimeiraPosicao,
  mapaCifraParaNota,
} from "notas-musicais/notas";
import { useEffect, useState } from "react";
import "../../util/ArrayUtil";

import styles from "./index.module.css";
import listaDeExerciciosRepository from "repositories/listaDeExerciciosRepository";

export default function NotaMusicais() {
  const [contagemRegressiva, setContagemRegressiva] = useState("");
  const [listaDeExercicios, setListaDeExercicios] = useState([]);
  const [indiceLista, setIndiceLista] = useState(0);

  function handleNovaListaDeExercicios() {
    const listaEmbaralhadoDeCrifas = [...cifraViolinoPrimeiraPosicao].shuffle();
    const novaListaDeExercicios = listaEmbaralhadoDeCrifas.map((cifra) => ({
      cifraDoDiagrama: cifra,
      notaInformada: "",
      respostaCorreta: false,
    }));
    setListaDeExercicios(novaListaDeExercicios);
    setIndiceLista(0);
  }

  function handleProximoExercicio() {
    setIndiceLista(indiceLista + 1);
    setContagemRegressiva(0);
  }

  function handleCorresponderNotaComCifra(notaSelecionada) {
    const exercicio = listaDeExercicios[indiceLista];
    exercicio.notaInformada = notaSelecionada;
    const [letraCifra] = exercicio.cifraDoDiagrama.split("/");
    let contagem = 3;

    setContagemRegressiva(contagem);
    let indice = setInterval(() => {
      setContagemRegressiva(--contagem);
      if (contagem == 0) {
        handleProximoExercicio();
        clearInterval(indice);
      }
    }, 1000);

    const notaMusicalDaCifra = mapaCifraParaNota[letraCifra];

    exercicio.respostaCorreta = notaSelecionada == notaMusicalDaCifra;

    console.log(listaDeExercicios.length, indiceLista);
    if (listaDeExercicios.length - 1 === indiceLista)
      listaDeExerciciosRepository.salvar(listaDeExercicios);
    return exercicio.respostaCorreta;
  }

  if (listaDeExercicios.length > 0 && listaDeExercicios.length > indiceLista) {
    return (
      <Exercicio
        numeroDoExercicio={indiceLista + 1}
        cifraDoDiagrama={listaDeExercicios[indiceLista].cifraDoDiagrama}
        notaPrecionada={handleCorresponderNotaComCifra}
        contagemRegressiva={contagemRegressiva}
      />
    );
  }
  return (
    <div className={styles.container}>
      <button
        className={styles.botaoNovaLista}
        onClick={handleNovaListaDeExercicios}
      >
        Iniciar nova lista
      </button>
      {listaDeExerciciosRepository
        .buscarTodos()
        .map((listaDeExercicioAnteriores, index) => (
          <div key={index} className={styles.listaDeExercicios}>
            <span>
              <strong>Total de exercicios: </strong>
              {listaDeExercicioAnteriores.length}
            </span>
            <span>
              <strong>Total de acertos: </strong>
              {listaDeExercicioAnteriores.reduce(
                (acc, exercicio) => (exercicio.respostaCorreta ? ++acc : acc),
                0,
              )}
            </span>
          </div>
        ))}
    </div>
  );
}
