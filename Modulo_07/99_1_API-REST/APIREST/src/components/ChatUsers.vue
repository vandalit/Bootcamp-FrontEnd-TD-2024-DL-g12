<template>
    <div class="chat-content">
        <div class="user-panel left-panel">
            <CardUser v-if="usuarios[0]" :usuario="usuarios[0]" :esPropio="true" @enviarMensaje="enviarMensaje" />
        </div>
        <div class="chat-box">
            <div v-for="(mensaje, index) in mensajes" :key="index" class="mensaje"
                :style="{ backgroundColor: mensaje.color }" :class="mensaje.esPropio ? 'propios' : 'ajenos'">
                <strong>{{ mensaje.usuario }}:</strong> {{ mensaje.texto }}
            </div>
        </div>
        <div class="user-panel right-panel">
            <CardUser v-if="usuarios[1]" :usuario="usuarios[1]" :esPropio="false" @enviarMensaje="enviarMensaje" />
        </div>
    </div>
</template>

<script>
import CardUser from './CardUser.vue';

export default {
    props: {
        usuarios: Array,
        mensajes: Array,
    },
    components: {
        CardUser,
    },
    methods: {
        enviarMensaje(mensaje) {
            this.$emit('enviarMensaje', mensaje);
        },
    },
};
</script>

<style scoped>
.chat-content {
    display: flex;
    width: 80%; 
    max-width: 1200px; 
    height: 80%; 
    border: 1px solid #ddd; 
    background-color: #f9f9f9; 
}

.user-panel {
    width: 300px;
    background-color: #202020;
    padding: 10px;
    box-sizing: border-box;
}

.chat-box {
    /* display: flex;
    flex-direction: column; */
    flex: 1;
    height: 100%;
    overflow-y: auto;
    padding: 10px;
    border: 1px solid #c8ff00;
    background-color: #292929;
    margin: 0 10px; 
    justify-content: center;
}

.mensaje {
    margin: 5px 0;
    padding: 10px;
    border-radius: 10px;
    max-width: 80%;
}

.propios {
    align-self: flex-end;
    text-align: left;
    background-color: #ff0048;
    color: azure;
    margin-right: 100px;
}

.ajenos {
    align-self: flex-start;
    text-align: right;
    background-color: #9cfc00;
    color: #202020;
    margin-left: 100px;
}
</style>