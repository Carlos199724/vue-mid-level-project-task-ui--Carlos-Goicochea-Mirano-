<script setup>
import { ref, onMounted } from 'vue'
import { getPokemones } from '../api/pokemonApi.js'

const pokemones = ref([])
const loading = ref(true)

onMounted(async () => {
  pokemones.value = await getPokemones()
  loading.value = false
})
</script>

<template>
  <div>
    <h2>Listado de Pokemones</h2>
    <div v-if="loading">Cargando...</div>
    <ul v-else>
      <li v-for="pokemon in pokemones" :key="pokemon.name">
        <img :src="pokemon.image" :alt="pokemon.name" width="100" height="100" />
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

img {
  margin-right: 10px;
  border-radius: 8px;
}
</style>
