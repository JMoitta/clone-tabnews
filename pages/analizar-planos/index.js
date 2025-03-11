import { addMonths, differenceInMonths } from "date-fns";

export default function AnalizarPlanos() {
  const precoSaudeCast = 908 * 1;
  const precoSaudeEnfermaria = 579 * 3;
  const diferencaDePreco = precoSaudeCast - precoSaudeEnfermaria;

  const adesaoAoPlano = new Date(2024, 7, 1);
  const prazoParaDowngrade = addMonths(adesaoAoPlano, 24);
  const diferencaMesParaMudacaoDePlano = differenceInMonths(
    prazoParaDowngrade,
    new Date(),
  );
  console.log(prazoParaDowngrade);

  return (
    <>
      <p>
        <strong>Apartamento:</strong>
        {precoSaudeCast}
      </p>
      <p>
        <strong>Enfermaria:</strong>
        {precoSaudeEnfermaria}
      </p>
      <p>
        <strong>Diferenca:</strong>
        {diferencaDePreco}
      </p>

      <h3>Valor a se economizar</h3>

      <p>
        <strong>Total de meses a se comprir:</strong>
        {diferencaMesParaMudacaoDePlano}
      </p>

      <p>
        <strong>Valor gasto:</strong>
        {diferencaDePreco * diferencaMesParaMudacaoDePlano}
      </p>
    </>
  );
}
