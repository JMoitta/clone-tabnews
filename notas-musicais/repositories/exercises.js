import { load, save } from "web-tools/indexedDB";

export let exercicio = null;

export function defineNovoExercicio(clef, listaCifra) {
  const listaDeQuestoes = listaCifra.map((cifra) => ({
    cifra,
    respostaCorreta: false,
  }));
  exercicio = { clef, listaDeQuestoes };
}

export function limparExercicic() {
  exercicio = null;
}

export function persistirExercicio(exercicioRequest) {
  const exercicio = {
    dataRealizacao: new Date(),
    ...exercicioRequest,
  };

  save(exercicio);
}

export async function carregarTodosExercicios() {
  return await load();
}
