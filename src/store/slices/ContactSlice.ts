import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ContactProps } from "../../types";
import { db } from "../../firebase/config";

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

export const AddNewContact = createAsyncThunk(
    "Contact/newContact",
    async (newContact: ContactProps) => {
        try {
            const data = await db.collection("contact")
                .where("Email", "==", newContact.Email)
                .get();
            if (!data.empty) {
                const docId = data.docs[0].id;
                await db.collection("contact").doc(docId).set(newContact);
            } else {
                await db.collection("contact").add(newContact);
            }
            return { ...newContact };
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);

const ContactSlice = createSlice({
    name: "Contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(AddNewContact.pending, (state) => {
                state.loading = true;
            })
            .addCase(AddNewContact.fulfilled, ((state, action) => {
                state.loading = false;
                state.error = null
                state.Contact.push(action.payload);
            }))
            .addCase(AddNewContact.rejected, ((state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "error data"
            }))
    },
});

export default ContactSlice.reducer;