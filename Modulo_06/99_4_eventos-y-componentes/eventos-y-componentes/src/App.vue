<script>
import RegistroPaciente from './components/RegistroPaciente.vue';

export default {
  name: 'App',
  components: {
    RegistroPaciente,
  },
  data() {
    return {
      nombre: '',
      fecha: '',
      hora: '',
      gravedad: '',
      motivo: '',
      citas: [],
    };
  },

  methods: {
    agregarCita() {
      if (this.formIncompleto()) return;
      const nuevaCita = {
        nombre: this.nombre,
        fecha: this.fecha,
        hora: this.hora,
        gravedad: this.gravedad,
        motivo: this.motivo,
      };
      this.citas.push(nuevaCita);
      this.limpiarFormulario();
    },
    limpiarFormulario() {
      this.nombre = '';
      this.fecha = '';
      this.hora = '';
      this.gravedad = '';
      this.motivo = '';
    },
    eliminarCita(index) {
      this.citas.splice(index, 1);
    },
    formIncompleto() {
      return !this.nombre || !this.fecha || !this.hora || !this.gravedad || !this.motivo;
    },
  },
};
</script>

<template>
  <div id="app">
    <div class="container">
      <h1 :style="{ fontFamily: 'Tahoma'}">Ingreso de Pacientes</h1>
      <form @submit.prevent="agregarCita" >
        <div>
          <label :style="{ color: !nombre ? '#E72929' : 'black', fontWeight: 'bold' }">Paciente</label>
          <input type="text" v-model="nombre">

          <label :style="{ color: !fecha ? '#E72929' : 'black', fontWeight: 'bold' }">Fecha</label>
          <input type="date" v-model="fecha">

          <label :style="{ color: !hora ? '#E72929' : 'black', fontWeight: 'bold' }">Hora</label>
          <input type="time" v-model="hora">

          <label :style="{ color: !gravedad ? '#E72929' : 'black', fontWeight: 'bold' }">Gravedad</label>
          <select v-model="gravedad">
            <option value="">Seleccione una opción</option>
            <option value="leve">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>

          <label :style="{ color: !motivo ? '#E72929' : 'black', fontWeight: 'bold' }">Motivo</label>
          <input type="text" v-model="motivo">

        </div>
        <button type="submit" :disabled="formIncompleto()">Agregar</button>
      </form>

      <p :style="{color: '#E72929', fontWeight: 'bold', fontSize: '18px'}" v-if="citas.length === 0">Aún no hay consultas registradas</p>

      <div class="citas">
        <RegistroPaciente v-for="(cita, index) in citas" :key="index" :cita="cita" @eliminar="eliminarCita(index)" />
      </div>
    </div>
  </div>
</template>

<style>
.container {
  padding: 20px;
  border: 2px solid #bcb8b8;
  border-radius: 20px;
  text-align: center;
}

.citas {
  display: flex;
  gap: 10px;
  justify-content: center;
}
body {
    background-color: rgb(31, 31, 31);
    color: tomato;
    font-family: sans-serif;
}
button {
  padding: 10px;
  margin: 10px;
  border: 1px solid #bcb8b8;
  border-radius: 10px;
  background-color: #fff;
  color: #1d1b1b;
  cursor: pointer;
  }

input, select {
  width: 150px;
  padding: 8px;
  margin-bottom: 10px;
  margin: 10px;
}
</style>