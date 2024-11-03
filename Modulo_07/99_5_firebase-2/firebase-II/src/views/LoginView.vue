<template>
    <form class="auth-container">
        <h2>Inicio de Sesión</h2>
        <input type="email" v-model="email" placeholder="Correo Electrónico">
        <input type="password" v-model="password" placeholder="Contraseña">
        <button @click.prevent="signIn">Iniciar Sesión</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <router-link to="/signup">¿No tienes cuenta? ¡Regístrate!</router-link>
    </form>
</template>

<script>
import { auth, signInWithEmailAndPassword } from '../auth.js'

export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: '',
        }
    },
    methods: {
        async signIn() {
            if (!this.email || !this.password) {
                this.errorMessage = 'Por favor, completa todos los campos.';
                return;
            }

            try {
                await signInWithEmailAndPassword(auth, this.email, this.password)
                const redirectPath = this.$route.query.redirect || '/';
                this.$router.push(redirectPath);
            } catch (error) {
                this.errorMessage = 'Error al iniciar sesión. Inténtalo nuevamente.';
            }
        }
    }
}
</script>

<style scoped>
.auth-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ecf0f1;
    color: #34495e;
    font-family: 'Arial', sans-serif;
    padding-inline: 2rem;
    padding-bottom: 2rem;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #2c3e50;
    text-decoration: underline;
}

input {
    width: 300px;
    padding: 0.75rem;
    margin: 0.5rem 0;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    font-size: 1rem;
}

button {
    width: 300px;
    padding: 0.75rem;
    background-color: #27ae60;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-bottom: 10px;
}

button:hover {
    background-color: #2ecc71;
}

router-link {
    margin-top: 1rem;
    color: #2980b9;
    text-decoration: none;
}

router-link:hover {
    text-decoration: underline;
}

.error {
    color: #e74c3c;
    font-size: 1rem;
    margin-top: 1rem;
}
</style>