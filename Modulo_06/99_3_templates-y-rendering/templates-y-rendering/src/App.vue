<template>
    <div id="app">
      <div class="container">
        <form>
          <div>
            <label>Ancho</label>
            <input type="number" v-model="width" />
          </div>
          <div>
            <label>Alto</label>
            <input type="number" v-model="height" />
          </div>
          <div>
            <label>Radio</label>
            <input type="number" v-model="radius" />
          </div>
          <div>
            <label>Color</label>
            <input type="color" v-model="color" />
          </div>
          <div>
            <label>Mostrar figura</label>
            <input type="checkbox" v-model="showFigure" />
          </div>
          <div>
            <label>Estilos adicionales</label>
            <input type="text" v-model="additionalStyles" />
          </div>
        </form>
        <div class="figure-container">
          <div
            v-show="showFigure"
            class="figure"
            :style="{
              width: `${width}px`,
              height: `${height}px`,
              borderRadius: `${radius}px`,
              backgroundColor: color,
            }"
            :class="{ 'additional-styles': additionalStyles }"
          ></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'App',
    data() {
      return {
        width: 100,
        height: 100,
        radius: 0,
        color: 'coral',
        showFigure: true,
        additionalStyles: '',
      };
    },
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ff00bf;
    margin-top: 60px;
    padding: 10px;
  }

  body {
    background-color: #282828;
    color: azure;
  }
  label {
      color: salmon;
  }
  
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 300px;
  }
  
  form div {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  
  .figure-container {
    width: 300px;
    height: 300px;
    border: 1px solid #0f66e9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .figure {
    background-color: #d6ad19;
    width: 100px;
    height: 100px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .additional-styles {
    border: 5px solid rgb(195, 255, 0);
    box-shadow: 10 10 10px rgba(0, 0, 0, 0.5);
    background-color: rgb(0, 0, 0);
  }
  </style>