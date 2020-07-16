<template>
  <div class="principal">
    <h3>Ingresar Mensaje</h3>
    <input type="text" :value="entrada" @input="actualizar($event)"> 
    <br>
    <label class="etiqueta" for="">{{mensajeCodificado | pasarAmayuscula }}</label>
    <br>
    <label for=""></label>
  </div>
</template>

<script>
export default {
  name: 'Padre',
  props: {},

  data () {
      return {
        entrada: ""
      }
    },
    methods: {
      actualizar(e) {
          let dato = e.target.value
          console.log(dato)
          this.entrada = dato
      }
    },
    computed: {
      mensajeCodificado() {
        let msg = this.entrada.toLowerCase()
        msg = msg.replace(/a/g,"U") // u
        msg = msg.replace(/e/g,"O") // o
        msg = msg.replace(/o/g,"E") // e
        msg = msg.replace(/u/g,"A") // a
        return msg
      }
    }
}
</script>

<style scoped>
  .etiqueda {
    text-align: left;
  }
</style>
