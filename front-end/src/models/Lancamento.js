export default class Lancamento {

    constructor(quantidadeExercicio, nome, exercicio) {
        this.id = Math.random().toString(36).substr(2, 5);
        this.quantidadeExercicio = quantidadeExercicio;
        this.nome = nome;
        this.exercicio = exercicio;
    }
}