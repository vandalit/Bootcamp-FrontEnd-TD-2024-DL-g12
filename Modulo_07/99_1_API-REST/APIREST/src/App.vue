<template>
  <div class="chat-container">
    <ChatUsers :usuarios="usuarios" :mensajes="mensajes" @enviarMensaje="agregarMensaje" />
  </div>
</template>

<script>
import axios from 'axios';
import ChatUsers from './components/ChatUsers.vue';

export default {
  components: {
    ChatUsers
  },
  data() {
    return {
      usuarios: [],
      mensajes: [],
    };
  },
  mounted() {
    this.cargarUsuarios();
  },
  methods: {
    async cargarUsuarios() {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=2');
        this.usuarios = response.data.results;
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
      }
    },
    agregarMensaje(mensaje) {
      this.mensajes.push(mensaje);
    }
  }
};
</script>

<style scoped>
.chat-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}
</style>