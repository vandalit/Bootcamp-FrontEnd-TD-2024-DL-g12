<template>
  <div id="app">
    <PokemonView />
  </div>
</template>

<script>
import PokemonView from './components/PokemonView.vue';

export default {
  name: 'App',
  components: {
    PokemonView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #fff;
  background: #20003b;
}
</style>