"use client";
import {
  carregarTodosExercicios,
  removerExercicio,
} from "notas-musicais/repositories/exercises";
import styles from "./index.module.css";
import { useCallback, useEffect, useState } from "react";

export function ListaDeExercicio() {
  const [listaDeExercicios, setListaDeExercicios] = useState([]);

  const atualizaListaDeExercicios = useCallback(
    async function atualizaListaDeExercicios() {
      const novaLista = await carregarTodosExercicios();

      setListaDeExercicios(novaLista);
    },
    [setListaDeExercicios, carregarTodosExercicios],
  );

  useEffect(() => {
    atualizaListaDeExercicios();
  }, [atualizaListaDeExercicios]);

  async function acaoRemoverItem(exercicio) {
    if (confirm("Deseja mesmo remover o item?")) {
      const result = await removerExercicio(exercicio.id);
      console.log(result);
      atualizaListaDeExercicios();
    }
  }

  return listaDeExercicios.map((exercicio, index) => (
    <div key={index} className={styles.listaDeExercicios}>
      <span>
        Foram <strong>{exercicio.listaDeQuestoes.length}</strong> questões com{" "}
        <strong>
          {exercicio.listaDeQuestoes.reduce(
            (acc, question) => (question.respostaCorreta ? ++acc : acc),
            0,
          )}
        </strong>{" "}
        acertos
      </span>
      <span
        className={styles.action}
        onClick={() => acaoRemoverItem(exercicio)}
      >
        🗑️
      </span>
    </div>
  ));
}
