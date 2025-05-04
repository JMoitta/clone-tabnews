import { notasMusicais } from "notas-musicais/cifra-e-notas";
import styles from "./index.module.css";
import { Partitura } from "notas-musicais/components/exercicio/Partitura";

export default function Questao({
  clef,
  numeroDoExercicio,
  cifraDoDiagrama,
  notaPrecionada,
}) {
  return (
    <div>
      <Partitura clef={clef} nota={cifraDoDiagrama} />
      <p>
        {numeroDoExercicio}. Selecione uma nota abaixo correspondente ao desenho
        acima:
      </p>
      <div className={styles.boxNotasMusicais}>
        {notasMusicais.map((notaMusical) => (
          <button
            key={notaMusical}
            className={styles.notaMusical}
            onClick={() => notaPrecionada(notaMusical)}
          >
            {notaMusical}
          </button>
        ))}
      </div>
    </div>
  );
}
