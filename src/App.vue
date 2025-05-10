<template>
  <div>
    <nav>
      <router-link to ="/projects">Projectos</router-link> |
      <router-link to ="/tasks">Tareas</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
</script>
<style scoped>
nav{
  background: #eee;
  padding: 1rem;
}
nav a{
  margin-right: 1 rem;
  text-decoration: none;
  color: #333
}
</style>
