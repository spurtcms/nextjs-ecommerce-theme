import { createSlice } from "@reduxjs/toolkit";


const initialState ={
   catgoId:null,
   catagoryName:""
};


export const catgorSlice=createSlice({
    name:"catgory",
    initialState,
    reducers:{
        catagoryId:(state,action)=>{
            state.catgoId=action.payload;
        },
        catagoryName:(state,action)=>{
            state.catagoryName=action.payload;
        }

    },
});


export const {catagoryId,catagoryName}=catgorSlice.actions;

export default catgorSlice.reducer;
