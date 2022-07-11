import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import eventsService from "./eventService"


const initialState ={
    evs : [],
    isError : false,
    isSuccess: false,
    isLoading: false,
    isDeleted:false,
    message : ''
}

//create new event
export const createEvent = createAsyncThunk('events/create',
async(eventsData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await eventsService.createEvents(eventsData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
)
//delete event
export const deleteEvent = createAsyncThunk('events/delete',
async(id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await eventsService.deleteEvent(id, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
)

//Get all events
export const getEvents = createAsyncThunk('events/getAll',
async(_, thunkAPI) => {
    try {
        
        return await eventsService.getEvents()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) ||
        error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
)


export const eventSlice = createSlice({
    name:'upcomingevents',
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createEvent.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createEvent.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.evs.push(action.payload)
        })
        .addCase(createEvent.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getEvents.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getEvents.fulfilled, (state, action) => {
            state.isLoading = false
            state.isCreated = true
            state.evs = action.payload
        })
        .addCase(getEvents.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteEvent.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteEvent.fulfilled, (state, action) => {
            state.isLoading = false
            state.isDeleted = true
            state.evs = state.evs.filter((event) => event._id !== action.payload.id)
        })
        .addCase(deleteEvent.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const { reset } = eventSlice.actions
export default eventSlice.reducer