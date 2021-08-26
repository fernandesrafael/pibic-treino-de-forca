<template>
 
 
  <div class="container">    
    <div id = "div1">     
        <img src="../img/perfil.png" alt="imagem de perfil" class="imagemPerfil" />         
        <span id="nome">{{ lancamento.nome }}</span> 
    </div>  

    <div id = "div2">

<div id="treinos" v-if="!esconderDetalhes">
   <h3> Treino </h3>
    <h5>
      <p>{{lancamento.exercicio[0]}}</p> 
      <p>{{lancamento.exercicio[1]}}</p> 
      <p>{{lancamento.exercicio[2]}}</p> 
     

    </h5>
   
 </div>
      
      
      <button v-if="esconderDetalhes" v-on:click="esconderDetalhes = !esconderDetalhes" class="detalhes"   >
          Detalhes
      </button>    

      <button v-if="!esconderDetalhes" v-on:click="esconderDetalhes = !esconderDetalhes" class="verMenos"   >
          Ver menos
      </button>    

        <button @click="excluirLancamento(lancamento.id)" class="botaoRemover">
            <img src="../img/lixeira.png" alt="Excluir Treino"/>
        </button> 

  </div>
     
 </div>
      
</template>
    
<script>
import { mapActions } from "vuex";
import perfil from "../img/perfil.png";

export default {
  name: "container",
  data: () => {
    return {
     perfil,
     esconderDetalhes: true
    };
  },

  methods:
   mapActions(["excluirLancamento"]),
  

  props: {
    tipo: String,
    lancamento: Object,
  },
};
 

</script>

<style scoped>
.container {
  background-color: white;
  border-radius: 20px;
  font-family: "padrao";
  padding: 20px;
  margin-bottom: 10px;
  width: 815px;
}

/*MOBILE*/
@media screen and (max-width: 1024px) {
  .container{
     width: 315px;
     margin-left: -65px;
  }
}
/*MOBILE*/

.imagemPerfil {
  width: 50px;
  vertical-align: middle;
  margin-right: 2%;
  
}


#div1{
  background-color: cornsilk;
  border-radius:10px;
  margin-bottom: 10px;

}

#nome{
 font-family: unset; 
}




.botaoRemover {
  border: none;
  outline: none;
  background-color: white;
  vertical-align: middle;
}


.botaoRemover:hover {
  cursor: pointer;
  
}

.botaoRemover img {
  width: 26px;
  
}


.botaoRemover img:active {
  filter: invert(100%);
}


/*------------------------BOTÃO DETALHES E VER MENOS----------------------*/
.detalhes, .verMenos{
  margin-left: 65%;
  margin-right: 5%;
  background-image: linear-gradient(to right,rgb(13, 12, 17), #59abe3);
  border: indigo;
  border-radius:15px;
  cursor: pointer;
  font-family: "negrito";
  font-size: 100%;
  color:whitesmoke;
  width:200px;
  height: 50px;
  
}

.detalhes:hover {
  background-image: linear-gradient(to right,rgb(117, 124, 118),#59abe3);
}

.verMenos:hover {
  background-image: linear-gradient(to right,rgb(117, 124, 118),#59abe3);
}


/*BOTÃO DETALHES MOBILE*/
@media screen and (max-width: 1024px) {
  .detalhes, .verMenos{
     width:30%;
     ;
  }
}
/*BOTÃO DETALHES MOBILE*/

/*------------------------BOTÃO DETALHES----------------------*/



/*BOTÃO DETALHES*/
 
</style>