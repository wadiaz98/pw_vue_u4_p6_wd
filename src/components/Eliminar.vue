<template>
  <div class="container">
    <div class="formulario">
      <header>Borrar Estudiante</header>
      <section>
        <div class="form">
          <p type="Cédula">
            <input type="text" v-model="cedula" />
          </p>
          <div class="botonEliminar">
            <button @click="eliminar">Borrar</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import{eliminarFachada} from "../assets/clients/clienteEstudiante"
export default{
  data(){
    return{
      cedula:null
    }
  },
  methods:{
    async eliminar(){
      const data=await eliminarFachada(this.cedula);
      console.log(data);
    }
  }
}
</script>
<style scoped>
 .container{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
 }

 p:before{
   content: attr(type);
   display: block;
   margin: 5px;
   font-size: 15px;
   color: black;
   
 }
 header{
    color: black;
    font-size: 35px;
 }
 input{
    width: 200px;
    border: none;
    background: none;
    border-bottom: 2px solid #bebed2;

 }
 input:focus{
    outline: none;
    border-bottom: 2px solid #78788c;
 }
 .form {
    width: 300px;
  
    background-color: #e6e6e6;
    border-radius: 10px;
    padding: 25px 35px;
    margin: 25px;
    box-shadow: 0px 0px 20px 5px #000;
}

button{
    width: 100px;
    padding: 10px 20px;
    background-color: purple;
    color: white ;
    border-radius: 12px;
    cursor: pointer;
    border: none;
}
.botonEliminar {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 15px;
    padding: 12px;
}
</style>F