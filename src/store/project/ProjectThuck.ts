import { ThunkAction } from "redux-thunk";
import { AppDispatch, RootState } from "../store";
import { Action } from "redux";
import { getProjectStart, getProjectSuccess, getProjectFailure, getProjectDetailStart, getProjectDetailSuccess, getProjectDetailFailure } from "./ProjectSlice";
import { GetProject } from "../../firebase/project/GetProject";
import { ProjectProps } from "../../types";
import { GetProjectDetail } from "../../firebase/project/GetProjectDetail";

export const fetchProjectThunk =
    ({ framework, language, limit }: ProjectProps): ThunkAction<void, RootState, unknown, Action<string>> =>
        async (dispatch: any) => {
            try {
                dispatch(getProjectStart());
                const Project = await GetProject({ framework, language, limit });
                dispatch(getProjectSuccess(Project));
            } catch (error) {
                dispatch(getProjectFailure("Lỗi"));
            }
        };

export const fetchProjectDetailThunk =
    (id: string): ThunkAction<void, RootState, unknown, Action<string>> =>
        async (dispatch: any) => {
            try {
                dispatch(getProjectDetailStart());
                const ProjectDetail = await GetProjectDetail(id);
                dispatch(getProjectDetailSuccess(ProjectDetail));
            } catch (error) {
                dispatch(getProjectDetailFailure("Lỗi"));
            }
        };