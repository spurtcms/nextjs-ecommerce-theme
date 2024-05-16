import { createSlice } from "@reduxjs/toolkit";


const initialState ={
   reloadCount:0,
   checkoutCart:"",
   address:{},
   profile:0
};


export const userSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        reloadCartCount:(state,action)=>{
            state.reloadCount=action.payload;
        },
        checkCartName:(state,action)=>{
            state.checkoutCart=action.payload;
        },
        getAddress:(state,action)=>{
            state.address=action.payload;
        },
        profileChange:(state,action)=>{
            state.profile=action.payload;
        },

    },
});


export const {reloadCartCount,checkCartName,getAddress,profileChange}=userSlice.actions;

export default userSlice.reducer;
