<template>
    <div :style="{ backgroundColor: getColorDeFondo(), color:'#424242' }" class="card">
        <h3>Paciente</h3>
        <p>{{ cita.nombre }}</p>
        <h4>Fecha</h4>
        <p>{{ cita.fecha }}</p>
        <h4>Hora</h4>
        <p>{{ cita.hora }}</p>
        <h4>Motivo</h4>
        <p>{{ cita.motivo }}</p>
        <button @click="$emit('eliminar')">Eliminar</button>
    </div>
</template>

<script>
export default {
    props: {
        cita: {
            type: Object,
            required: true,
        },
    },
    methods: {
        getColorDeFondo() {
            switch (this.cita.gravedad) {
                case 'leve':
                    return '#65B741';
                case 'media':
                    return '#FFDE4D';
                case 'alta':
                    return '#E72929';
                default:
                    return 'white';
            }
        },
    },
};
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    min-width: 200px;
    max-width: 200px;
    box-sizing: border-box;
}

.card p {
    flex: 1;
    margin: 0;
    overflow-wrap: break-word;
}

</style>