import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import projectReducer from '../features/projects/projectSlice';
import eventReducer from '../features/events/eventSlice';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    projects:projectReducer,
    upcomingevents:eventReducer
  },
}); 
