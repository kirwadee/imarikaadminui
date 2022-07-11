import axios from 'axios'


const API_URL = 'https://imarikapeaceadmin.herokuapp.com/events/'

//create new project
const createEvents = async (eventsData, token) => {
    const config = {
        headers :{
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, eventsData, config)

    return response.data
}

//delete project
const deleteEvent = async (eventId, token) => {
    const config = {
        headers :{
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.delete(API_URL + eventId, config)

    return response.data
}

//get all events
const getEvents = async () => {
  

  const response = await axios.get(API_URL)

    return response.data
}


const eventsService = {
    createEvents,
    getEvents,
    deleteEvent
}

export default eventsService