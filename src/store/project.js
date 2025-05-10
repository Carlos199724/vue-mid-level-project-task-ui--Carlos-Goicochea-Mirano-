import { defineStore } from "pinia";
import axios from "axios";

export const useProjectStore = defineStore ('project',{
    state: () => ({
        projects:[],
        loading: false,
        error: null
    }),
    actions: {
        async fetchProjects(){
            this.loading = true
            this.error = null
            try{
                const response = await axios.get('https://681507e7225ff1af162aeb7e.mockapi.io/api/v1/projects')
                this.projects = response.data
            } catch (err){
                this.error = err.message
            }finally{
                this.loading = false
            }
        },
    }
})