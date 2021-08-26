<template>
  <div id="painelLancamento">
    <div id="formularioLancamento">
      
      <form @submit="salvar">
       

        <label for="nome">Nome do aluno</label>
        <input
          type="text"
          name="nome"
          id="nome"
          required
          v-model="nome"
        />

         <label for="quantidadeExercicio">Quantidade de exercícios</label>
        <input
          type="number"
          min="0"
          step="0.0"
          name="quantidadeExercicio"
          id="quantidadeExercicio"
          required
          v-model.number="quantidadeExercicio"
        />
        
        <p>Nível do aluno</p>
         <div id="tiposLancamento">
            
          <input
            type="radio"
            name="nivel"
            id="inciante"
            value="inciante"
            v-model="nivel"
          />
         
         
          <label for="iniciante" class="iniciante">Iniciante</label>
         
         <div>
          <input
            type="radio"
            name="nivel"
            id="intermediario"
            value="intermediario"
            v-model="nivel"
          />

          <label for="intermediario" class="intermediario">Intermediário</label>
         </div>

         <div>
          <input
            type="radio"
            name="nivel"
            id="intermediario"
            value="intermediario"
            v-model="nivel"
          />
          <label for="avancado" class="avancado">Avançado</label>
         </div>


        </div>

    
        <button>Criar treino</button>
      </form>
    </div>

    <div id="areaLancamentos">
      <BlocoLancamento
        v-for="lancamento in todosLancamentos"
        v-bind:key="lancamento.id"
        :lancamento="lancamento"
      />

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BlocoLancamento from "./BlocoLancamento.vue";
import Lancamento from "../models/Lancamento";

export default {
  name: "PainelLancamento",
  data: () => {
    return {
      nivel: "intermediario",
      quantidadeExercicio: undefined,
      nome: "",
      exercicio:[
                    "Supino inclinado fechado alternado halter",
                    "Crucifixo declinado com elástico",
                    "Pressão arco mágico",
                ]
                
      };
  },
  components: {
    BlocoLancamento,
  },
  computed: mapGetters(["todosLancamentos"]),
  methods: {
    ...mapActions(["salvarLancamento"]),
    salvar(event) {
      event.preventDefault();
     
      const lancamento = new Lancamento(this.quantidadeExercicio, this.nome, this.exercicio);
      this.salvarLancamento(lancamento);
      this.limparFormulario();
    },
    limparFormulario() {
      this.nivel = "intermediario";
      this.quantidadeExercicio = undefined;
      this.nome = "";
      this.exercicio = [
                    "Supino inclinado fechado alternado halter",
                    "Crucifixo declinado com elástico",
                    "Pressão arco mágico",
                ]
    },
  },
};
</script>

<style scoped>
#painelLancamento {
  width: 100%;
  
  
}

#formularioLancamento {
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  font-family: "padrao";
  margin-top: 20%;
}

/*MOBILE*/
@media screen and (max-width: 1024px) {
  #formularioLancamento {
  background-color: white;
  border-radius: 20px;
  margin-left: -38%;
  font-family: "padrao";
  width:174% ;

  }
}
/*MOBILE*/

#quantidadeExercicio,
#nome,
#exercicio,
button {
  display: block;
  margin-bottom: 10px;
}

#quantidadeExercicio,
#nome,
#exercicio {
  height: 25px;
  font-family: "padrao";
  font-size: 100%;
  border: 1px solid #cccccc;
  border-radius: 5px;
  outline: none;
}

#tiposLancamento {
  margin-bottom: 20px;
  font-family: "negrito";
  font-size: 110%;
  margin-top: 10%;
}

#tiposLancamento label {
  margin-right: 5%;
  display:inline-table;
  margin-bottom: 5%;
  
  
}

#nome {
  width: 70%;
  margin-bottom:5% ;
}



button {
  background-image: linear-gradient(to right,rgb(13, 12, 17), #59abe3);
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  font-family: "negrito";
  font-size: 120%;
  cursor: pointer;
}

button:hover {
  background-image: linear-gradient(to right,rgb(117, 124, 118),#59abe3);
}

#areaLancamentos {
  margin-top: 30px;
  position:absolute;
}

p{
  margin-top: 10%;
  margin-bottom: -5%;
}

</style>