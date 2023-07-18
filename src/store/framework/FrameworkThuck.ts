import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { getFrameworkStart, getFrameworkSuccess, getFrameworkFailure } from "./FrameworkSlice";
import { Action } from "redux";
import { getFramework } from "../../firebase/framework/getFramework";

export const fetchFrameworkThunk =
    (): ThunkAction<void, RootState, unknown, Action<string>> =>
        async (dispatch: any) => {
            try {
                dispatch(getFrameworkStart());
                const Frameworks = await getFramework();
                dispatch(getFrameworkSuccess(Frameworks));
            } catch (error) {
                dispatch(getFrameworkFailure("Lỗi"));
            }
        };