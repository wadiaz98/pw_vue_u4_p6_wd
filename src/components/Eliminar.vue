<template>
  <div class="container">
    <div class="formulario">
      <form class="form">
        <p type="Cedula:">
          <input type="text" />
        </p>

        <div class="botones">
          <button>Borrar</button>
          
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
p::before {
  content: attr(type);
  display: block;
  margin: 3px 2px;
  font-size: 15px;
  color: #5a5a5a;
}
body {
  background: #59abe3;
}
input {
  width: 300px;
  border: none;
  border-bottom: 2px solid #bebed2;
  background: none;
}
input:focus {
  outline: none; /* quita la sombra por defecto en el input */
  border-bottom: 2px solid #78788c;
}
h2 {
  margin: 10px 2px;
  width: 180px;
  color: #78788c;
  border-bottom: 3px solid #78788c;
}
.form {
  width: 350px;
  height: 380;
  background: #e6e6e6;
  padding: 25px 35px;
  border-radius: 10px;
  box-shadow: 0px 0px 40px 5px #000;
}

button {
  padding: 5px;
  margin: 0px 10px
}
</style>