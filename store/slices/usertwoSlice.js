import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    datas:[],

};


export const usertwoSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        addData:(state,action)=>{
            state.datas=[...state.datas,action.payload];
        },
    },
});


export const {addData}=usertwoSlice.actions;

export default usertwoSlice.reducer;
