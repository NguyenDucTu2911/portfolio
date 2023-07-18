import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactProps } from "../../types";

interface ContactState {
    Contact: ContactProps[];
    loading: boolean;
    error: string | null;
}

const initialState: ContactState = {
    Contact: [],
    loading: false,
    error: null,
};

const ContactSlice = createSlice({
    name: "Contact",
    initialState,
    reducers: {
        sendContactStart(state) {
            state.loading = true;
            state.error = null;
        },
        sendContactSuccess(state, action) {
            state.loading = false;
            state.error = null;
            state.Contact.push (action.payload)
        },
        sendContactFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
            console.log(action.payload);
        },
    },
});

export const {
    sendContactStart, sendContactSuccess, sendContactFailure
} = ContactSlice.actions;

export default ContactSlice.reducer;