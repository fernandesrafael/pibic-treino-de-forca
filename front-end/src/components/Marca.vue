<template>
  <div>
    <img src="../img/logo.png" alt="Julius" />
    <span>BEM-VINDO</span>
  </div>
</template>

<script>
export default {
  name: "Marca",
};
</script>

<style scoped>
div {
  
  background-color: white;
  font-family: "negrito";
  padding: 10px;
}

img {
  width: 50px;
  vertical-align: middle;
  margin-right: 10px;
  padding: 0%;
}

span {
  color: var(--cor-destaque);
  font-size: 120%;
}
</style>