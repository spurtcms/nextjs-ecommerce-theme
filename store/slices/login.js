import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    LoginEmailVerify: '',
    Authenticated: false

};


export const LoginRedux = createSlice({
    name: "channel",
    initialState,
    reducers: {
        LoginEmailVerify: (state, action) => {
            state.LoginEmailVerify = action.payload
        },
        Authenticated: (state, action) => {
            state.Authenticated = action.payload
        }


    },
});


export const { LoginEmailVerify,Authenticated } = LoginRedux.actions;

export default LoginRedux.reducer;