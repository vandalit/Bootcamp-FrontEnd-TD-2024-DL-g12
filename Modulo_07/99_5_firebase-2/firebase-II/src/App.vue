<template>
  <div class="app-container">
    <nav class="nav-container">
      <router-link v-if="!isLoggedIn" to="/login" class="nav-link">Inicia Sesión</router-link>
      <router-link v-if="!isLoggedIn" to="/signup" class="nav-link">Registrate</router-link>
      <router-link v-if="isLoggedIn" to="/" class="nav-link">Home</router-link>
      <button v-if="isLoggedIn" @click="logout" class="logout-button">Cerrar Sesión</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { auth, signOut, onAuthStateChanged } from './auth.js'

export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      this.isLoggedIn = !!user;
    });
  },
  methods: {
    async logout() {
      await signOut(auth);
      this.isLoggedIn = false;
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.app-container {
  font-family: 'Arial', sans-serif;
  background-color: #303030;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 50px;
  min-height: 50vh;
  margin-inline: 300px;
}

.nav-container {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.nav-link {
  padding: 10px 20px;
  color: white;
  background-color: #a1db34;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #0eda5c;
}

.logout-button {
  padding: 10px 20px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #c0392b;
}

router-view {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>