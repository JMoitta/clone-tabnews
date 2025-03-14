"use client";

import { addDays, intervalToDuration } from "date-fns";

export const nascimentoJoana = new Date(2025, 1, 12, 18, 15, 0);
export const fimDoPererio = addDays(nascimentoJoana, 42);

export function obtemDuracaoAtualPuerperioEmString() {
  const duration = intervalToDuration({
    start: new Date(),
    end: fimDoPererio,
  });

  return formatDuration(duration);
}

export function formatDuration(duration) {
  return new Intl.DurationFormat("pt-BR", { style: "digital" }).format(
    duration,
  );
}
