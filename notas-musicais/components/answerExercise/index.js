import Questao from "../exercicio/Questao";
import { useState } from "react";
import {
  exercicio,
  persistirExercicio,
} from "notas-musicais/repositories/exercises";
import { mapaCifraParaNota } from "notas-musicais/cifra-e-notas";
import { RespostaCorreta } from "../exercicio/RespostaCorreta";
import { RespostaErrada } from "../exercicio/RespostaErrada";
import { useRouter } from "next/router";

export function AnswerExercise() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const questao = exercicio.listaDeQuestoes[currentIndex];
  const [resultado, setResultado] = useState("Aguardando");

  function novaQuestao() {
    if (currentIndex + 1 < exercicio.listaDeQuestoes.length) {
      setCurrentIndex(currentIndex + 1);
    }

    setTimeout(() => {
      if (exercicio.listaDeQuestoes.length === currentIndex + 1) {
        persistirExercicio(exercicio);
        router.push("/notas-musicais");
      }
      setResultado("Aguardando");
    }, 1000);
  }

  function handleNotaPrecionada(notaSelecionada) {
    questao.notaInformada = notaSelecionada;
    const [letraCifra] = questao.cifra.split("/");

    const notaMusicalDaCifra = mapaCifraParaNota[letraCifra];

    questao.respostaCorreta = notaSelecionada == notaMusicalDaCifra;

    if (questao.respostaCorreta) setResultado("Correto");
    else setResultado("Errado");

    novaQuestao();
  }

  if (resultado === "Correto") return <RespostaCorreta />;

  if (resultado === "Errado") return <RespostaErrada />;

  return (
    <Questao
      numeroDoExercicio={currentIndex + 1}
      clef={exercicio.clef}
      cifraDoDiagrama={questao.cifra}
      notaPrecionada={handleNotaPrecionada}
    />
  );
}
