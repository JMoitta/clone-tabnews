"use client";

import { intlFormat } from "date-fns";
import TempoRestante from "./TempoRestante";
import { fimDoPererio } from "util/PuerperioUtil";
import Link from "next/link";

export default function VoltaAFelicidade() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        <Link href="/joana">Joana</Link>
      </h2>
      <p>A Joana nasceu no dia 12 de fevereiro de 2025 as 18:15</p>
      <p>
        O puerpério teve inicio mesmo dia do nascimento e terminara no dia{" "}
        {intlFormat(
          fimDoPererio,
          {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          },
          {
            locale: "pt-BR",
          },
        )}
      </p>
      <TempoRestante />
    </div>
  );
}
