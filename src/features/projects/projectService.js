import axios from 'axios'


const API_URL = 'https://imarikapeaceadmin.herokuapp.com/projects/'

//create new project
const createPProject = async (projectData, token) => {
    const config = {
        headers :{
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, projectData, config)

    return response.data
}

//delete project
const deleteProject = async (projectId, token) => {
    const config = {
        headers :{
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + projectId, config)

    return response.data
}

//get all projects
const getProjects = async () => {
  

  const response = await axios.get(API_URL)

    return response.data
}


const projectService = {
    createPProject,
    getProjects,
    deleteProject
}

export default projectService