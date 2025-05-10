<script setup>
import { onMounted } from 'vue'
import { useProjectStore } from '../store/project'

const store = useProjectStore()
onMounted(()=>{
    store. fetchProjects()
})
const { projects, loading, error } = store
 function crearProyecto() {
    
 }
</script>
<template>
    <div>
        <h2>Listado de Proyectos</h2>
        <button @click="crearProyecto">Crear Proyecto</button>
        <div v-if="loading">Cargando...</div>
        <div v-if="error">{{ error }}</div>
        <ul v-if="projects.length" class="project-table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripcón</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tr v-for="project in projects" :key="project.id">
                <td>{{ project.name || 'sin nombre' }}</td>
                <td>{{ project.description }}</td>
                <td>{{ project.status || 'Sin estado' }}</td>
            </tr>
        </ul>
        <p v-else-if="!loading && !error">No hay proyectos</p>
    </div>
</template>
<style scoped>
.project-table{
    width: 100%;
    border-collapse: collapse;
    margin-top: 1 rem;
}
.project-table th,
.project-table td{
    border: 1px solid #ccc;
    padding: 8px;
    text-align: 1eft;
}
.project-table th{
    background-color: aqua;
}
.error {
    color: red;
    margin-top: 1rem;
}
button{
    padding: 8px 12px;
    margin-bottom: 1 rem;
    background-color: blueviolet;
    color: white;
    border: none;
    cursor: pointer
}
button:hover{
    background-color: black;
}
</style>