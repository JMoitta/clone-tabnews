export const cifraViolinoPrimeiraPosicao = [
  "g/3",
  "a/3",
  "b/3",
  "c/4",
  "d/4",
  "e/4",
  "f/4",
  "g/4",
  "a/4",
  "b/4",
  "c/5",
  "d/5",
  "e/5",
  "f/5",
  "g/5",
  "a/5",
  "b/5",
  "c/6",
  "d/6",
  "e/6",
  "f/6",
];

export const cifraCelloPrimeiraPosicao = [
  "c/2",
  "d/2",
  "e/2",
  "f/2",
  "g/2",
  "a/2",
  "b/2",
  "c/3",
  "d/3",
  "e/3",
  "f/3",
  "g/3",
  "a/3",
  "b/3",
  "c/4",
  "d/4",
  // "e/4",
  // "f/4",
  // "g/4",
  // "a/4",
  // "b/4",
];

export const cifraFlautaTransversal = [
  "c/4",
  "d/4",
  "e/4",
  "f/4",
  "g/4",
  "a/4",
  "b/4",
  "c/5",
  "d/5",
  "e/5",
  "f/5",
  "g/5",
  "a/5",
  "b/5",
  "c/6",
  "d/6",
  "e/6",
  "f/6",
  "g/6",
  "a/6",
  "b/6",
  "c/7",
];

export const cifraClarineteSibemol = [
  "e/3",
  "f/3",
  "g/3",
  "a/3",
  "b/3",
  "c/4",
  "d/4",
  "e/4",
  "f/4",
  "g/4",
  "a/4",
  "b/4",
  "c/5",
  "d/5",
  "e/5",
  "f/5",
  "g/5",
  "a/5",
  "b/5",
  "c/6",
  "d/6",
  "e/6",
  "f/6",
  "g/6",
  "a/6",
  "b/6",
  "c/7",
];

export const cifraTuba = [
  "d/1",
  "e/1",
  "f/1",
  "g/1",
  "a/1",
  "b/1",
  "c/2",
  "d/2",
  "e/2",
  "f/2",
  "g/2",
  "a/2",
  "b/2",
  "c/3",
  "d/3",
  "e/3",
  "f/3",
  "g/3",
  "a/3",
  "b/3",
  "c/4",
];

export const notasMusicais = ["DÓ", "RÉ", "MI", "FÁ", "SOL", "LÁ", "SI"];

export const mapaCifraParaNota = {
  c: "DÓ",
  d: "RÉ",
  e: "MI",
  f: "FÁ",
  g: "SOL",
  a: "LÁ",
  b: "SI",
};

export const listCifra = ["c", "d", "e", "f", "g", "a", "b"];

/**
 *
 * @param {string} notaGrave
 * @param {string} notaAguda
 */
export function faixaNotasMusicais(notaGrave, notaAguda) {
  const [primeiraCifra, primeiraOitava] = notaGrave.split("/");
  const [ultimaCifra, ultimaOitava] = notaAguda.split("/");
  const primeiraCifraIndex = listCifra.findIndex(
    (cifra) => primeiraCifra === cifra,
  );
  const ultimaCifraIndex = listCifra.findIndex(
    (cifra) => ultimaCifra === cifra,
  );
  // console.log(primeiraCifra, primeiraCifraIndex, ultimaCifra, ultimaCifraIndex);
  const notasMusicais = [];
  for (
    let oitavaCorrente = Number(primeiraOitava);
    oitavaCorrente <= ultimaOitava;
    oitavaCorrente++
  ) {
    const cifrasNaOitavaCorrente = listCifra.filter((_, cifraIndex) => {
      if (oitavaCorrente === Number(primeiraOitava)) {
        return cifraIndex >= primeiraCifraIndex;
      }
      if (oitavaCorrente === Number(ultimaOitava)) {
        return cifraIndex <= ultimaCifraIndex;
      }
      return true;
    });
    cifrasNaOitavaCorrente.forEach((cifra) =>
      notasMusicais.push(`${cifra}/${oitavaCorrente}`),
    );
  }

  return notasMusicais;
}

export const notesTrebleClef = faixaNotasMusicais("c/4", "a/5");
export const notesAutoClef = faixaNotasMusicais("d/3", "b/4");
export const notesBassClef = faixaNotasMusicais("e/2", "c/4");
// export type NotaMusical = typeof notasMusicais[number]
// export type CifraMusical = typeof cifraViolinoPrimeiraPosicao[number]
