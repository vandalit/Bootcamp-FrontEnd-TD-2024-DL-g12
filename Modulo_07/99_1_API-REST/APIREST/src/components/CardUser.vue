<template>
    <div class="user-container">
        <img :src="usuario.picture.large" alt="User Picture" class="user-picture">
        <h3>{{ usuario.name.first }} {{ usuario.name.last }}</h3>
        <input v-model="nuevoMensajeColor" type="color" placeholder="Color del mensaje">
        <textarea v-model="nuevoMensaje" class="user-message" placeholder="Escribe un mensaje..."></textarea>
        <button @click="enviarMensaje">Enviar</button>
    </div>
</template>

<script>
export default {
    props: {
        usuario: Object,
        esPropio: Boolean,
    },
    data() {
        return {
            nuevoMensaje: '',
            nuevoMensajeColor: '',
        };
    },
    methods: {
        enviarMensaje() {
            if (this.nuevoMensaje.trim()) {
                this.$emit('enviarMensaje', {
                    texto: this.nuevoMensaje,
                    usuario: this.usuario.name.first,
                    color: this.nuevoMensajeColor,
                    esPropio: this.esPropio,
                });
                this.nuevoMensaje = '';
                
            }
        },
    },
};
</script>

<style scoped>
.user-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.user-picture {
    border-radius: 50%;
    width: 150px;
    margin-bottom: 5px;
    border: 1px solid #3c3939;
}

.user-message {
    width: 100%;
    margin: 5px auto;
    padding: 5px;
    box-sizing: border-box;
}

button {
    margin-top: 10px;
    padding: 5px 10px;
}
</style>