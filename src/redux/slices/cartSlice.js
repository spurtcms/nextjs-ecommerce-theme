import { createSlice } from "@reduxjs/toolkit";


const initialState ={
   reloadCount:0,
   checkoutCart:"",
   address:{}
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
        }

    },
});


export const {reloadCartCount,checkCartName,getAddress}=userSlice.actions;

export default userSlice.reducer;
