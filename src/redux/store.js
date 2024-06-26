import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,} from 'redux-persist'
import storage from '@/redux/storage'
import rootReducer from '@/redux/rootReducers';



const persistConfig = {
  key: "root",
  storage,
  blacklist: ["register"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store=configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
   
});

export const persistor = persistStore(store)

export default store
