"use client";
import "util/ArrayUtil";

import styles from "./index.module.css";
import { ListaDeExercicio } from "notas-musicais/components/ListaDeExercicio";
import { useRouter } from "next/router";

export default function NotaMusicais() {
  const router = useRouter();

  return (
    <main className={styles.container}>
      <button
        className={styles.botaoNovaLista}
        onClick={() => router.push("/notas-musicais/escolher-exercicio")}
      >
        Novo exercício
      </button>
      <ListaDeExercicio />
    </main>
  );
}
