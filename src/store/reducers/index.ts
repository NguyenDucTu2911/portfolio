import { combineReducers } from "redux";
  
const reducers = combineReducers({
    // users: userSlice,
    // events: eventSlice,
    // pay: paySlice,
})

export type State = ReturnType<typeof reducers>
export default reducers