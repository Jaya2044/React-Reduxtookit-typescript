import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "../features/Cake/CakeSlice"
import IcecreamReducer from "../features/Icecream/IcecreamSlice";
import UsersReducer from "../features/Users/UsersSlice";

const store = configureStore({
    reducer: {
        cakes: CakeReducer,
        icecreams: IcecreamReducer,
        users: UsersReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;