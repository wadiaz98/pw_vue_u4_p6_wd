<template>
  <ConsultarActualzar />
  <Eliminar/>
  <Insertar/>
</template>

<script>
import ConsultarActualzar from "./pages/ActualizarConsultarPage.vue";
import Eliminar from "./pages/EliminarPage.vue";
import Insertar from "./pages/InsertarPage.vue";
export default {
  name: "App",
  components: {
    ConsultarActualzar,
    Eliminar, 
    Insertar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
