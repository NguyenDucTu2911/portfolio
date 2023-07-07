import { combineReducers } from "redux";
import UserSlice from "../slices/UserSlice";
import ContactSlice from "../slices/ContactSlice";


const reducers = combineReducers({
    users: UserSlice,
    contact: ContactSlice,
    // pay: paySlice,
})

export type State = ReturnType<typeof reducers>
export default reducers