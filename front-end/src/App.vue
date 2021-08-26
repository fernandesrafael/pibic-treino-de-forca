<template>
  <div>
    <Marca />
    <Header />
   
    <div id="container">
      <PainelLancamentos />
    </div>
  </div>
</template>

<script>

import PainelLancamentos from "./components/PainelLancamentos.vue";
import Header from "./components/Header.vue";
import Marca from "./components/Marca.vue";
export default {
  name: "App",
  components: { Marca, Header, PainelLancamentos},
};
</script>

<style>
@font-face {
  font-family: "padrao";
  src: url(./fonts/KumbhSans-Regular.ttf);
}

@font-face {
  font-family: "negrito";
  src: url(./fonts/KumbhSans-Bold.ttf);
}

:root {
  --cor-destaque: #303030;
}

body {
  margin: 0;
  background-color: #dddddd;
  
}

#container {
    width: 60%;
    margin:-25% 0% 0% 20%;
    display: block;
    justify-content: center;
    align-items: center;

}

/*MOBILE*/


@media screen and (max-width: 1024px) {
  #container {
    width: 50%;
    display: block;
    justify-content: center;
    align-items: center;
    margin-top:-250px;
  }
}
</style>
