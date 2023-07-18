import {
    configureStore,
    combineReducers,
    getDefaultMiddleware,
    Action,
    ThunkAction,
} from "@reduxjs/toolkit";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { PersistConfig, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ThunkDispatch } from "redux-thunk";
import { createBrowserHistory } from "history";
import ContactSlice from "./contact/ContactSlice";
import FrameworkSlice from "./framework/FrameworkSlice";
import ProjectSlice from "./project/ProjectSlice";

const rootReducer = combineReducers({
    contact: ContactSlice,
    Framework: FrameworkSlice,
    Project: ProjectSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

// Define thunk action type
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

const history = createBrowserHistory();

// Create the router middleware
const routerMiddlewareInstance = routerMiddleware(history);

// Define persist config for each slice
const contactPersistConfig: PersistConfig<any> = {
    key: "contact",
    storage,
    whitelist: ["contacts"], // Specify the state properties to persist
};

const frameworkPersistConfig: PersistConfig<any> = {
    key: "Framework",
    storage,
    whitelist: ["frameworkData"], // Specify the state properties to persist
};

const projectPersistConfig: PersistConfig<any> = {
    key: "Project",
    storage,
    whitelist: ["Project", "ProjectDetail"], // Specify the state properties to persist
};

// Wrap each slice reducer with persist config
const persistedContactReducer = persistReducer(contactPersistConfig, ContactSlice);
const persistedFrameworkReducer = persistReducer(frameworkPersistConfig, FrameworkSlice);
const persistedProjectReducer = persistReducer(projectPersistConfig, ProjectSlice);

// Update the combineReducers call to include persisted reducers
const persistedRootReducer = combineReducers({
    contact: persistedContactReducer,
    Framework: persistedFrameworkReducer,
    Project: persistedProjectReducer,
    router: connectRouter(history),
});

// Configure store with thunk middleware
const store = configureStore({
    reducer: persistedRootReducer,
    middleware: [...getDefaultMiddleware({ serializableCheck: false }), routerMiddlewareInstance],
});

const persistor = persistStore(store);

export { store, persistor };

export type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>>;

export default store;
