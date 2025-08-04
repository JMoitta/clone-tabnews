import Image from "next/image";
import AutoSVG from "../../../assets/Alto-clef-wikimedia.svg";
import ViolinSVG from "../../../assets/violin-svgrepo-com.svg";
import CelloSVG from "../../../assets/cello-svgrepo-com.svg";
import FluteSVG from "../../../assets/flute-svgrepo-com.svg";
import ClarinetSVG from "../../../assets/clarinet-svgrepo-com.svg";
import TubaSVG from "../../../assets/tuba-svgrepo-com.svg";
import styles from "./index.module.css";
import {
  cifraCelloPrimeiraPosicao,
  cifraClarineteSibemol,
  cifraFlautaTransversal,
  cifraTuba,
  cifraViolinoPrimeiraPosicao,
  notesAutoClef,
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
        <header>Básico das claves</header>
        <div className={styles.listaInstrumentos}>
          <div
            className={styles.instrumento}
            onClick={() => handleNewExercise("alto", notesAutoClef)}
          >
            <header>Dó</header>
            <Image src={AutoSVG} />
          </div>
        </div>
      </article>
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
      <article className={styles.familiaDeInstrumentos}>
        <header>Madeiras</header>
        <div className={styles.listaInstrumentos}>
          <div
            className={styles.instrumento}
            onClick={() => handleNewExercise("treble", cifraFlautaTransversal)}
          >
            <header>Flauta Transversa Dó</header>
            <Image src={FluteSVG} />
          </div>
          <div
            className={styles.instrumento}
            onClick={() => handleNewExercise("treble", cifraClarineteSibemol)}
          >
            <header>Clarinete Si Bemol</header>
            <Image src={ClarinetSVG} />
          </div>
        </div>
      </article>
      <article className={styles.familiaDeInstrumentos}>
        <header>Metais</header>
        <div className={styles.listaInstrumentos}>
          <div
            className={styles.instrumento}
            onClick={() => handleNewExercise("bass", cifraTuba)}
          >
            <header>Tuba</header>
            <Image src={TubaSVG} />
          </div>
        </div>
      </article>
    </div>
  );
}
