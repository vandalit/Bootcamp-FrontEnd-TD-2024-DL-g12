<template>
    <div class="pokemon-card">
        <img :src="pokemon.image" :class="{ hidden: pokemon.discovered }">
        <div v-if="!pokemon.discovered">
            <input v-model="guessPokemon" @keyup.enter="checknamePokemon" class="pokemon-input" type="text" placeholder="Adivina el Pokemón">
            <button @click="checknamePokemon" class="pokemon-btn">Descubrir</button>
        </div>
        <h3 v-else><strong>{{ pokemon.name }}</strong></h3>
    </div>
</template>

<script>
export default {
    props: ['pokemon'],
    data() {
        return {
            guessPokemon: ''
        }
    },
    methods: {
        checknamePokemon() {
            if (this.guessPokemon.toLowerCase() === this.pokemon.name.toLowerCase()) {
                this.pokemon.discovered = true;
                this.$emit('discovered');
            } else {
                alert('Lo siento, ese no es el Pokémon!');
            }
            this.guessPokemon = '';
        }
    }
}
</script>

<style scoped>
.pokemon-card {
    margin: 10px;
    padding: 20px;
    border: 1px solid coral;
    border-radius: 10px;
    width: 150px;
    text-align: center;
    background: #2b2b2b;
    color: salmon;
}

.pokemon-input {
    width: 100%;
    padding: 5px;
    border: none;
    font-size: 16px;
    align-items: center;
}

.pokemon-btn {
    background: #8df90a;
    color: #1a012d;
    font-size: 15px;
    padding: 5px 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

}

img {
    width: 100%;
    filter: blur(5px) grayscale(100%); 
    transition: filter 0.5s;
}

img.hidden {
    filter: none;
}
</style>