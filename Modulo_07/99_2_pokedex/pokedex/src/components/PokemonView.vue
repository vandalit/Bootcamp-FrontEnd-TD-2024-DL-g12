<template>
    <div class="pokemon-view">
        <img class="logoPokemon" src="../assets/logo-pokemon.png" alt="logo pokemon">
        <h1>¿Quién es ese Pokemón?</h1>
        <h3>Pokemones descubiertos: {{ discoveredList }}</h3>
        <div class="pokemon-list">
            <PokemonCard 
                v-for="pokemon in pokemons" 
                :key="pokemon.name" 
                :pokemon="pokemon"
                @discovered="discoveredPokemon" 
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import PokemonCard from './PokemonCard.vue';

export default {
    components: {
        PokemonCard,
    },
    data() {
        return {
            pokemons: [],
            
        };
    },
    methods: {
        async fetchPokemons() {
            try {
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
                
                this.pokemons = await Promise.all(response.data.results.map(async (pokemon) => {
                    const pokemonDetails = await axios.get(pokemon.url);
                    return {
                        name: pokemon.name,
                        image: pokemonDetails.data.sprites.other['official-artwork'].front_default,
                        discovered: false,
                    };
                }));
            } catch (error) {
                console.error('Error al obtener los Pokémones:', error);
            }
        },
        discoveredPokemon(pokemonName) {
            const pokemon = this.pokemons.find(p => p.name === pokemonName);
            if (pokemon) {
                pokemon.discovered = true;
            }
        },
        
    },
    mounted() {
        this.fetchPokemons();
    },
    computed: {
    discoveredList() {
        return this.pokemons.filter(pokemon => pokemon.discovered).length;
    }
}

};
</script>

<style scoped>
.logoPokemon{
    width: 300px;
    margin-bottom: 10px;
}
.pokemon-view {
    text-align: center;
}

.pokemon-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>