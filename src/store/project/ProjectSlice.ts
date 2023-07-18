import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectProps } from "../../types";

export interface ProjectState {
    Project: ProjectProps[];
    ProjectDetail: ProjectProps[];
    loading: boolean;
    error: string | null;
}

const initialState: ProjectState = {
    Project: [],
    ProjectDetail: [],
    loading: false,
    error: null,
};

const ProjectSlice = createSlice({
    name: "Project",
    initialState,
    reducers: {
        getProjectStart(state) {
            state.loading = true;
            state.error = null;
        },
        getProjectSuccess(state, action: PayloadAction<ProjectProps[]>) {
            state.loading = false;
            state.error = null;
            state.Project = action.payload
        },
        getProjectFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            console.log(action.payload);
        },
        getProjectDetailStart(state) {
            state.loading = true;
            state.error = null;
        },
        getProjectDetailSuccess(state, action: PayloadAction<ProjectProps[]>) {
            state.loading = false;
            state.error = null;
            state.ProjectDetail = action.payload
        },
        getProjectDetailFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            console.log(action.payload);
        },
    },
});

export const {
    getProjectStart, getProjectSuccess, getProjectFailure, getProjectDetailStart, getProjectDetailSuccess, getProjectDetailFailure
} = ProjectSlice.actions;

export default ProjectSlice.reducer;