import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    CategoryChildClick: false,
    CategoryParentClick: false,
    CategoryParentName: '',
    CategoryChildName: '',
    CategoryParentId: 0,
    CategoryScroll:0,
    CategorySlugData:'',
    HeaderValue:false,
    ImageTrriger:0,
};


export const categoryRedux = createSlice({
    name: "category",
    initialState,
    reducers: {
        // addUser:(state,action)=>{
        //     state.users=[action.payload];
        // },
        // setUsers:(state,action)=>{
        //     state.age=[action.payload];
        // },
        CategoryChildClick: (state, action) => {
            state.CategoryChildClick = action.payload
        },
        CategoryParentClick: (state, action) => {
            state.CategoryParentClick = action.payload
        },
        CategoryParentName: (state, action) => {
            state.CategoryParentName = action.payload
        },
        CategoryChildName: (state, action) => {
            state.CategoryChildName = action.payload
        },
        CategoryParentId: (state, action) => {
            state.CategoryParentId = action.payload
        },
        CategoryScroll:(state,action)=>{
            state.CategoryScroll = action.payload
        },
        CategorySlugData:(state,action)=>{
            state.CategorySlugData = action.payload
        },
        HeaderValue:(state,action)=>{
            state.HeaderValue=action.payload
        },
        ImageTrriger:(state,action)=>{
            state.ImageTrriger=action.payload
        }

    },
});


export const { CategoryChildClick, CategoryParentClick, CategoryParentName, CategoryChildName, CategoryParentId,CategoryScroll,CategorySlugData,HeaderValue,ImageTrriger } = categoryRedux.actions;

export default categoryRedux.reducer;
