import Vue from 'vue'

Vue.filter('codificar', function(value) {
    let mensaje = value.relpace('a', 'u')
    return mensaje
})

Vue.filter('pasarAmayuscula', function(value) {
    return value.toUpperCase()
})