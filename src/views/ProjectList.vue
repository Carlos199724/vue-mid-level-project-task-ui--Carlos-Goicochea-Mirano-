<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProjectStore } from '../store/project'

const store = useProjectStore()
const searchTerm = ref('')

onMounted(() => {
    store.fetchProjects()
})

const { projects, loading, error } = store

const filteredProjects = computed(() => {
    const term = searchTerm.value.toLowerCase()
    if (!term) return projects

    return projects.filter(project =>
        (project.name?.toLowerCase().includes(term)) ||
        (project.description?.toLowerCase().includes(term)) ||
        (project.status?.toLowerCase().includes(term))
    )
})

function crearProyecto() {
    // Lógica para crear un proyecto
}
</script>

<template>
    <div>
        <div class="header">
            <h2>Listado de Proyectos</h2>
            <button @click="crearProyecto">Crear Proyecto</button>
        </div>

        <div class="search-container">
            <input
                v-model="searchTerm"
                type="text"
                placeholder="Buscar por nombre, descripción o estado..."
                class="search-input"
            />
        </div>

        <div v-if="loading">Cargando...</div>
        <div v-if="error" class="error">{{ error }}</div>

        <div class="table-container">
            <table v-if="filteredProjects.length" class="project-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="project in filteredProjects" :key="project.id">
                        <td class="highlight">{{ project.name || 'Sin nombre' }}</td>
                        <td class="highlight">{{ project.description }}</td>
                        <td class="highlight">{{ project.status || 'Sin estado' }}</td>
                    </tr>
                </tbody>
            </table>

            <p v-else-if="!loading && !error">No hay proyectos</p>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.search-container {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}

.search-input {
    width: 60%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 12px;
    font-size: 16px;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
    transition: 0.2s ease;
}

.search-input:focus {
    border-color: blueviolet;
    box-shadow: 0 0 5px blueviolet;
}

.table-container {
    display: flex;
    justify-content: center;
}

.project-table {
    width: 80%;
    border-collapse: collapse;
}

.project-table th,
.project-table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
}

.project-table th {
    background-color: aqua;
}

.highlight {
    background-color: #f0f8ff;
}

.error {
    color: red;
    margin-top: 1rem;
}

button {
    padding: 8px 12px;
    background-color: blueviolet;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: black;
}
</style>
