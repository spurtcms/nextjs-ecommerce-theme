import { createSlice } from "@reduxjs/toolkit";


const initialState ={
   reloadCount:0,
   checkoutCart:""
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
        }
    },
});


export const {reloadCartCount,checkCartName}=userSlice.actions;

export default userSlice.reducer;
