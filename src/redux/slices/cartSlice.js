import { createSlice } from "@reduxjs/toolkit";


const initialState ={
   reloadCount:0,
   checkoutCart:"",
   address:{},
   profile:0,
   shippRoute:false,
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
        shippingRoute:(state,action)=>{
            state.shippRoute=action.payload;
        },

    },
});


export const {reloadCartCount,checkCartName,getAddress,profileChange,shippingRoute}=userSlice.actions;

export default userSlice.reducer;
