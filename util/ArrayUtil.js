Array.prototype.shuffle = function () {
  let indice = this.length;

  while (indice) {
    const indiceAleatorio = Math.floor(Math.random() * indice--);
    [this[indice], this[indiceAleatorio]] = [
      this[indiceAleatorio],
      this[indice],
    ];
  }

  return this;
};
