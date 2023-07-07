import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apolloClient } from "../../graphQL/Client";
import { GET_ALL } from "../../graphQL/User";
import { useDispatch } from "react-redux";
import { ContactProps } from "../../types";

export interface Users {
    id: string;
    name?: string;
}

interface UsersState {
    Progression: ContactProps[];
    loading: boolean;
    error: string | null;
}

const initialState: UsersState = {
    Progression: [],
    loading: false,
    error: null,
};

export const fetchProgressions = createAsyncThunk(
    "Users/fetchUsers",
    async () => {
        try {
            let data = await apolloClient.query({
                query: GET_ALL
            })
            console.log(data.data.folders)
            return data.data.folders
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);


const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProgressions.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProgressions.fulfilled, (state, action) => {
                state.loading = false;
                state.Progression = action.payload
            })
            .addCase(fetchProgressions.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "lỗi dữ liệu"
            })
    },
});

export default UserSlice.reducer;