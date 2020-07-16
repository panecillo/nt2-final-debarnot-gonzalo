<template>
  <div id="app">
    <Padre/>

    <br>

    <p>respuestas: 1-b, 2-b, 3-c , 4-b , 5-byC </p>

  </div>
</template>

<script>
import Padre from './components/Padre.vue'

export default {
  name: 'App',
  components: {
    Padre
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
