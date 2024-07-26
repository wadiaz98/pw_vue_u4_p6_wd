<template>
  <div class="container">
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/estudiante/actualizar">Estudiante actualizar</router-link>
    <router-link to="/estudiante/insertar">Estudiante crear</router-link>
    <router-link to="/estudiante/eliminar">Estudiante eliminar</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container{
    display: flex;
    padding: 1% 1%;
    margin-bottom: 2%;
    background: purple;
    justify-content: center;
}

.container a{
    color: white;
    text-decoration: none;
    margin: 0% 2%;
   
    padding: 0.5% 1%;
    border-radius: 15px;
}
a:focus{
    outline: none;
    background: black;
}
a:hover{
    background: rgb(77, 77, 77);
}
</style>