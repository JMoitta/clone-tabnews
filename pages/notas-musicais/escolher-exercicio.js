import { NovoExercicioFormulario } from "notas-musicais/components/NovoExercicio";

import styles from "./index.module.css";

export default function EscolherExercicioPagina() {
  return (
    <main className={styles.container}>
      <NovoExercicioFormulario />
    </main>
  );
}
