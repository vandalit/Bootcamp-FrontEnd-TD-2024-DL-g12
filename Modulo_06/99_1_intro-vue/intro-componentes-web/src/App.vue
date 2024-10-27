<template>
    <CedulaElonMusk msg="Cedula de Identidad Elon Musk" />
  </template>
  
  <script>
  import CedulaElonMusk from './components/CedulaElonMusk.vue';
  
  export default {
    name: 'App',
    components: {
      CedulaElonMusk
    }
  }
  </script>
  
  <style>
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    font-size: 10px;
    font-family: sans-serif;
  }
  </style>