import { notasMusicais } from "notas-musicais/notas";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { Partitura } from "components/Partitura";

export default function Exercicio({
  numeroDoExercicio,
  cifraDoDiagrama,
  notaPrecionada,
  contagemRegressiva,
}) {
  const [resultadoSelecao, setResultadoSelecao] = useState("Aguardando");
  function handlePrecionarNota(notaSelecionada) {
    const estaCorretaResposta = notaPrecionada(notaSelecionada);
    if (estaCorretaResposta) {
      setResultadoSelecao("Correto");
    } else {
      setResultadoSelecao("Errado");
    }
  }

  useEffect(() => {
    const FIM_DA_CONTAGEM = 0;
    if (contagemRegressiva == FIM_DA_CONTAGEM) {
      setResultadoSelecao("Aguardando");
    }
  }, [contagemRegressiva]);

  return (
    <div className={styles.container}>
      <h1>Exercicios de notas musicais</h1>
      <BarraDeStatus status={resultadoSelecao} />
      <h2>{numeroDoExercicio}. Exercicio</h2>
      <Partitura nota={cifraDoDiagrama} />
      <p>Selecione uma nota abaixo correspondente ao diagrama acima:</p>
      <div className={styles.boxNotasMusicais}>
        {notasMusicais.map((notaMusical) => (
          <button
            key={notaMusical}
            className={styles.notaMusical}
            onClick={() => handlePrecionarNota(notaMusical)}
            disabled={!!contagemRegressiva}
          >
            {notaMusical}
          </button>
        ))}
      </div>
      {!!contagemRegressiva && (
        <p className={styles.proximoExercicio}>
          Proximo exercicio em
          <br /> {contagemRegressiva}
        </p>
      )}
    </div>
  );
}

function BarraDeStatus({ status }) {
  switch (status) {
    case "Aguardando":
      return <div className={styles.barraDeStatus}>Aguardando resposta...</div>;
      break;
    case "Correto":
      return (
        <div
          className={`${styles.barraDeStatus} ${styles.barroDeStatusSucesso}`}
        >
          Muito bom 👏, continue assim 🚀
        </div>
      );
      break;
    case "Errado":
      return (
        <div
          className={`${styles.barraDeStatus} ${styles.barroDeStatusFalhou}`}
        >
          Poxa 😢, nao fique triste faz parte do processo 🤓
        </div>
      );
      break;
  }
}
