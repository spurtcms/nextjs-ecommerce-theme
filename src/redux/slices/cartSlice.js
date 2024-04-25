import { createSlice } from "@reduxjs/toolkit";


const initialState ={
   reloadCount:0
};


export const userSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        reloadCartCount:(state,action)=>{
            state.reloadCount=action.payload;
        }
    },
});


export const {reloadCartCount}=userSlice.actions;

export default userSlice.reducer;
