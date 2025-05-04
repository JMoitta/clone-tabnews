"use client";

import { useRouter } from "next/router";
import { exercicio } from "notas-musicais/repositories/exercises";
import { AnswerExercise } from "notas-musicais/components/answerExercise";

import styles from "./index.module.css";

export default function ExercicioPagina() {
  const router = useRouter();

  if (!exercicio) {
    return (
      <main className={styles.container}>
        <p>Antes de responder a um exercicio</p>
        <button
          className={styles.botaoNovaLista}
          onClick={() => router.push("/notas-musicais/escolher-exercicio")}
        >
          Escolha um exercicio
        </button>
      </main>
    );
  }
  return (
    <main className={styles.container}>
      <AnswerExercise />
    </main>
  );
}
