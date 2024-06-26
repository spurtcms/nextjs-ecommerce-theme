"use client";

import { Provider } from "react-redux";

import {persistor} from "./store"
// import { persistStore } from 'redux-persist'
import reduxStore from "./store";
import { PersistGate } from "redux-persist/integration/react";

export const Providers =(props)=>{

return <Provider store={reduxStore}>
    <PersistGate loading={null} persistor={persistor}>
    {props.children}
    </PersistGate>
    </Provider>

}