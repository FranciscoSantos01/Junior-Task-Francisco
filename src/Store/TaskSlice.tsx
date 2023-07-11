import { createSlice } from '@reduxjs/toolkit';
import { Connections, ProfileData, ProjectData, teamsData } from '../helpers/helpers';

export const taskSlice = createSlice({
    name: 'template',
    initialState: {
        profile:ProfileData,
        projects:ProjectData,
        teams:teamsData,
        connections:Connections,
        isLoading:false,
    },
    reducers: {
         startLoading: (state, /* action */ ) => {
             state.isLoading = true;
         },
         stopLoading:(state)=>{
            state.isLoading = false
         }
     }
});


export const { startLoading,stopLoading } = taskSlice.actions;