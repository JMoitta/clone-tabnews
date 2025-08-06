import Image from "next/image";
import TrebleSVG from "../../../assets/Treble-clef-wikimedia.svg";
import AutoSVG from "../../../assets/Alto-clef-wikimedia.svg";
import BassSVG from "../../../assets/bass-clef-wikimedia.svg";
import styles from "./index.module.css";
import { obtemlistaDeCifras } from "notas-musicais/cifra-e-notas";
import { defineNovoExercicio } from "notas-musicais/repositories/exercises";
import { useRouter } from "next/router";
import "../../../util/ArrayUtil";
import { useState } from "react";

const claves = [
  {
    tipo: "treble",
    rotulo: "Sol",
    imgSrc: TrebleSVG,
    imgAlt: "Clave de Sol",
  },
  {
    tipo: "alto",
    rotulo: "Dó",
    imgSrc: AutoSVG,
    imgAlt: "Clave de Dó",
  },
  {
    tipo: "bass",
    rotulo: "Fá",
    imgSrc: BassSVG,
    imgAlt: "Clave de Fá",
  },
];

const dificuldades = [
  {
    tipo: "basico",
    rotulo: "Básico",
  },
  {
    tipo: "intermediario-linhas-superiores",
    rotulo: "Intermediário linhas superiores",
  },
  {
    tipo: "intermediario-linhas-inferiores",
    rotulo: "Intermediário linhas inferiores",
  },
  {
    tipo: "avancado",
    rotulo: "Avançado",
  },
];

export function NovoExercicioFormulario() {
  const [claveSelecionada, setClaveSelecionada] = useState("treble");
  const [tipoNivel, setTipoNivel] = useState(dificuldades[0].tipo);
  const router = useRouter();

  function iniciarExercicio() {
    const listaDeCifrasEmbaralhadas = obtemlistaDeCifras(
      claveSelecionada,
      tipoNivel,
    );

    listaDeCifrasEmbaralhadas.shuffle();

    defineNovoExercicio(
      claveSelecionada,
      listaDeCifrasEmbaralhadas,
      // [listaDeCifrasEmbaralhadas[0], listaDeCifrasEmbaralhadas[listaDeCifrasEmbaralhadas.length - 1],]
    );
    router.push("/notas-musicais/exercicio");
  }
  return (
    <div>
      <article className={styles.familiaDeInstrumentos}>
        <header>Claves</header>
        <div className={styles.listaInstrumentos}>
          {claves.map((clave, index) => (
            <div
              key={index}
              className={`${styles.instrumento}  ${claveSelecionada === clave.tipo ? styles.opcaoSelecionada : ""}`}
              onClick={() => setClaveSelecionada(clave.tipo)}
            >
              <header>{clave.rotulo}</header>
              <Image src={clave.imgSrc} alt={clave.imgAlt} />
            </div>
          ))}
        </div>
      </article>
      <article className={styles.familiaDeInstrumentos}>
        <header>Dificuldade</header>
        <div className={styles.listaInstrumentos}>
          {dificuldades.map((nivel, index) => (
            <div
              key={index}
              onClick={() => setTipoNivel(nivel.tipo)}
              className={`${styles.opcoes} ${tipoNivel === nivel.tipo ? styles.opcaoSelecionada : ""}`}
            >
              <header>{nivel.rotulo}</header>
            </div>
          ))}
        </div>
      </article>
      <div className={styles.toolboxButtons}>
        <button className={styles.botaoNovaLista} onClick={iniciarExercicio}>
          Iniciar! 😊
        </button>
      </div>
    </div>
  );
}
