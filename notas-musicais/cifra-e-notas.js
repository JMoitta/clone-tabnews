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

const mapaDeClavesComNivel = {
  treble: {
    basico: {
      grave: "c/4",
      agudo: "a/5",
    },
    "intermediario-linhas-superiores": {
      grave: "c/4",
      agudo: "g/6",
    },
    "intermediario-linhas-inferiores": {
      grave: "d/3",
      agudo: "a/5",
    },
    avancado: {
      grave: "d/3",
      agudo: "g/6",
    },
  },
  alto: {
    basico: {
      grave: "d/3",
      agudo: "b/4",
    },
    "intermediario-linhas-superiores": {
      grave: "d/3",
      agudo: "a/5",
    },
    "intermediario-linhas-inferiores": {
      grave: "e/2",
      agudo: "b/4",
    },
    avancado: {
      grave: "e/2",
      agudo: "a/5",
    },
  },
  bass: {
    basico: {
      grave: "e/2",
      agudo: "c/4",
    },
    "intermediario-linhas-superiores": {
      grave: "e/2",
      agudo: "b/4",
    },
    "intermediario-linhas-inferiores": {
      grave: "f/1",
      agudo: "c/4",
    },
    avancado: {
      grave: "f/1",
      agudo: "b/4",
    },
  },
};

export function obtemlistaDeCifras(clave, nivel) {
  const nivelDeNotas = mapaDeClavesComNivel[clave][nivel];

  return faixaNotasMusicais(nivelDeNotas.grave, nivelDeNotas.agudo);
}
// export type NotaMusical = typeof notasMusicais[number]
// export type CifraMusical = typeof cifraViolinoPrimeiraPosicao[number]
