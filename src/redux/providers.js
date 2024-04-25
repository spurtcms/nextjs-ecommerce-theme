"use client";
import { Provider } from "react-redux";
import {persistor} from "@/redux/store"
import reduxStore from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export const Providers =(props)=>{

return <Provider store={reduxStore}>
    <PersistGate loading={null} persistor={persistor}>
    {props.children}
    </PersistGate>
    </Provider>

}