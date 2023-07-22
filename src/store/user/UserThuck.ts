import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { Action } from "redux";
import { getUserStart, getUserSuccess, getUserFailure } from "./UserSlice";
import { getUser } from "../../firebase/users/getUser";


export const fetchUserThuck = (): ThunkAction<void, RootState, unknown, Action<string>> =>
    async (dispatch: any) => {
        try {
            dispatch(getUserStart());
            const User = await getUser();
            dispatch(getUserSuccess(User))
        } catch (e) {
            dispatch(getUserFailure("lỗi"))
        }
    }