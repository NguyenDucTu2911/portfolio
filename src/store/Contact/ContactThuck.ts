import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { createContact } from "../../firebase/contact/CreateContact";
import { sendContactStart, sendContactSuccess, sendContactFailure } from "./ContactSlice";
import { Action } from "redux";

export const sendDevice =
    (
        Name: string,
        Message: string,
        Email: string,
        CreateAt: Date,
    ): ThunkAction<void, RootState, unknown, Action<string>> =>
        async (dispatch: any) => {
            try {
                dispatch(sendContactStart());
                await createContact({
                    Name,
                    Message,
                    CreateAt,
                    Email,
                });
                dispatch(sendContactSuccess(
                    {
                        Name,
                        Message,
                        CreateAt,
                        Email,
                    }
                ));
            } catch (error) {
                dispatch(sendContactFailure("Lỗi gửi contact"));
            }
        };