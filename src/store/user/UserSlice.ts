import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserProps } from "../../types";

interface UserState {
    User: UserProps[],
    loading: boolean,
    error: string | null
}

const initialState: UserState = {
    User: [],
    loading: false,
    error: null
}

const UserSilice = createSlice({
    name: "User",
    initialState,
    reducers: {
        getUserStart(state) {
            state.loading = true;
            state.error = null;
        },
        getUserSuccess(state, action: PayloadAction<UserProps[]>) {
            state.loading = false;
            state.error = null;
            state.User = action.payload
        },
        getUserFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            console.log(action.payload);
        },
    },
});

export const {
    getUserStart, getUserSuccess, getUserFailure
} = UserSilice.actions;

export default UserSilice.reducer;