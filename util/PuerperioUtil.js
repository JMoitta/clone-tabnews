"use client";

import {
  addDays,
  formatDistance,
  formatDuration,
  intervalToDuration,
} from "date-fns";
import { ptBR } from "date-fns/locale";

const nascimentoJoana = new Date(2025, 1, 12, 18, 15, 0);
const fimDoPererio = addDays(nascimentoJoana, 42);

export function obtemDuracaoAtualPuerperioEmString() {
  const duration = intervalToDuration({
    start: new Date(),
    end: fimDoPererio,
  });
  const newDuracao = formatDuration(
    duration,
    {
      format: ["months", "days", "hours", "minutes", "seconds"],
      locale: ptBR,
      delimiter: ", ",
    },
    { zero: true },
  );

  return new Intl.DurationFormat("pt-BR", { style: "digital" }).format(
    duration,
  );
}
