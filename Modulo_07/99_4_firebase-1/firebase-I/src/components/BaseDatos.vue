<template>
    <div>
        <h1>Base de Datos con Firebase</h1>
        <div class="form-container">
            <form @submit.prevent="submitUsuario">
                <input v-model="nuevoNombre" placeholder="Ingresa tu nombre" class="input-field" />
                <input v-model="nuevoEmail" placeholder="Ingresa tu email" class="input-field" />
                <input v-model="nuevoTelefono" placeholder="Ingresa tu teléfono" class="input-field" />
                <button type="submit" class="btn-submit">Agregar</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            nuevoNombre: '',
            nuevoEmail: '',
            nuevoTelefono: ''
        };
    },
    methods: {
        ...mapActions(['addUsuario']),
        async submitUsuario() {
            if (this.nuevoNombre.trim() !== '' && this.nuevoEmail.trim() !== '' && this.nuevoTelefono.trim() !== '') {
                const nuevoUsuario = {
                    nombre: this.nuevoNombre,
                    email: this.nuevoEmail,
                    telefono: this.nuevoTelefono,
                }
                await this.addUsuario(nuevoUsuario); // Llama a la acción de Vuex
                this.nuevoNombre = '';
                this.nuevoEmail = '';
                this.nuevoTelefono = '';
            }
        }
    }
};
</script>

<style scoped>
h1 {
    text-align: center;
}

.form-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

form {
    background-color: #272727;
    color: aliceblue;
    padding: 30px;
    padding-right: 50px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(192, 255, 3, 0.84);
}

.input-field {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ff5e00ee;
    border-radius: 4px;
    font-size: 14px;
}

.input-field:focus {
    border-color: #007bff;
    outline: none;
}

.btn-submit {
    background-color: #ff006f;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
}

.btn-submit:hover {
    background-color: #008690;
}
</style>