import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FrameworkProps } from "../../types";

interface FrameworkState {
    Framework: FrameworkProps[];
    loading: boolean;
    error: string | null;
}

const initialState: FrameworkState = {
    Framework: [],
    loading: false,
    error: null,
};

const FrameworkSlice = createSlice({
    name: "Framework",
    initialState,
    reducers: {
        getFrameworkStart(state) {
            state.loading = true;
            state.error = null;
        },
        getFrameworkSuccess(state, action: PayloadAction<FrameworkProps[]>) {
            state.loading = false;
            state.error = null;
            state.Framework = action.payload
        },
        getFrameworkFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            console.log(action.payload);
        },
    }, 
});

export const {
    getFrameworkStart, getFrameworkSuccess, getFrameworkFailure
} = FrameworkSlice.actions;

export default FrameworkSlice.reducer;