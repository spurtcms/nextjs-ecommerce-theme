import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    users:[],
    age:false,
};


export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.users=[action.payload];
        },
        setUsers:(state,action)=>{
            state.age=[action.payload];
        },
    },
});


export const {addUser,setUsers}=userSlice.actions;

export default userSlice.reducer;
