// import storage from 'redux-persist/lib/storage';
// import { PersistConfig } from 'redux-persist';

// const persistConfig: PersistConfig<any> = {
//     key: 'root',
//     storage,
//     whitelist: ["Project"],
// };

// export default persistConfig;
import { combineReducers, Reducer, AnyAction } from "redux";
import { connectRouter } from "connected-react-router";
import ProjectSlice, { ProjectState } from "./project/ProjectSlice";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistCommonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2,
};

const ProjectPersistConfig = {
    ...persistCommonConfig,
    key: "Project",
    whitelist: ["Project", "ProjectDetail"],
};

export default (history: any) =>
    combineReducers({
        router: connectRouter(history),
        Project: persistReducer<ProjectState, AnyAction>(
            ProjectPersistConfig,
            ProjectSlice as Reducer<ProjectState, AnyAction>
        ),
    });