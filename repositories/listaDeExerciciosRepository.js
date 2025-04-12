const listaDeExerciciosRepository = {
  listaDeExerciciosPersist: [],
  salvar(listaDeExercicios) {
    this.listaDeExerciciosPersist.push(listaDeExercicios);
  },

  buscarTodos() {
    console.log(this.listaDeExerciciosPersist);
    return this.listaDeExerciciosPersist;
  },
};
export default listaDeExerciciosRepository;
