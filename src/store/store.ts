import {
    configureStore,
    combineReducers,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import thunk, { ThunkDispatch } from 'redux-thunk';
import ContactSlice from "./Contact/ContactSlice";
import { persistStore } from "redux-persist";
const rootReducer = combineReducers({
    contact: ContactSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

// Configure store with thunk middleware
const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };

export default store;