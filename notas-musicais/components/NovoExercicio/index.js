import Image from "next/image";
import ViolinSVG from "../../../assets/violin-svgrepo-com.svg";
import CelloSVG from "../../../assets/cello-svgrepo-com.svg";
import styles from "./index.module.css";
import {
  cifraCelloPrimeiraPosicao,
  cifraViolinoPrimeiraPosicao,
} from "notas-musicais/cifra-e-notas";
import { defineNovoExercicio } from "notas-musicais/repositories/exercises";
import { useRouter } from "next/router";
import "../../../util/ArrayUtil";

export function NovoExercicioFormulario() {
  const router = useRouter();

  function handleNewExercise(clef, listCifra) {
    // updateState({ clef, listCifra });
    // updateStep("AnswerExercise");
    const listaDeCifrasEmbaralhadas = [...listCifra];

    listaDeCifrasEmbaralhadas.shuffle();

    defineNovoExercicio(clef, listaDeCifrasEmbaralhadas);
    router.push("/notas-musicais/exercicio");
  }
  return (
    <div>
      <article className={styles.familiaDeInstrumentos}>
        <header>Cordas</header>
        <div className={styles.listaInstrumentos}>
          <div
            className={styles.instrumento}
            onClick={() =>
              handleNewExercise("treble", cifraViolinoPrimeiraPosicao)
            }
          >
            <header>Violino</header>
            <Image src={ViolinSVG} />
          </div>
          <div
            className={styles.instrumento}
            onClick={() => handleNewExercise("bass", cifraCelloPrimeiraPosicao)}
          >
            <header>Violoncelo</header>
            <Image src={CelloSVG} />
          </div>
        </div>
      </article>
    </div>
  );
}
