"use client";
import { carregarTodosExercicios } from "notas-musicais/repositories/exercises";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

export function ListaDeExercicio() {
  const [listaDeExercicios, setListaDeExercicios] = useState([]);
  useEffect(() => {
    async function tentaCarregarTodosOsExercicios() {
      const novaLista = await carregarTodosExercicios();
      console.log(novaLista);
      setListaDeExercicios(novaLista);
    }
    tentaCarregarTodosOsExercicios();
  }, [setListaDeExercicios, carregarTodosExercicios]);

  return listaDeExercicios.map((exercicio, index) => (
    <div key={index} className={styles.listaDeExercicios}>
      <span>
        <strong>Total de exercicios: </strong>
        {exercicio.listaDeQuestoes.length}
      </span>
      <span>
        <strong>Total de acertos: </strong>
        {exercicio.listaDeQuestoes.reduce(
          (acc, question) => (question.respostaCorreta ? ++acc : acc),
          0,
        )}
      </span>
    </div>
  ));
}
