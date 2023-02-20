import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import { todoSlice } from "./todo/todoSlice";


export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        auth: authSlice.reducer
    }
})







// import { combineReducers, createStore } from "redux";
// import { authReducer } from "./auth/authSlice";
// import { todoReducer } from "./todo/todoSlice";

// const rootReducer = combineReducers({
//   auth: authReducer,
//   todo: todoReducer,
// });
// export const store = createStore(rootReducer);

// store.subcribe(() => {
//     console.log("STORE CHANGED", store.getState());
// })
