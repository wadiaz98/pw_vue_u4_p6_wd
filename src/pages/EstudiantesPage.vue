<template>
  <ConsultarActualzar />
  <Eliminar />
  <Insertar />
</template>
  
  <script>
import ConsultarActualzar from "@/components/ActualizarConsultar.vue";
import Eliminar from "@/components/Eliminar.vue";
import Insertar from "@/components/Insertar.vue";
export default {
  components: {
    ConsultarActualzar,
    Eliminar,
    Insertar,
  },
};
</script>

<style>
</style>