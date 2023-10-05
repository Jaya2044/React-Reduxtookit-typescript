import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type StateType = {
    numOfIcecreams: number
}

const initialState: StateType = {
    numOfIcecreams: 20
}

const IcecreamSlice = createSlice({
    name:'Icecreams',
    initialState,
    reducers: {
        IcecreamOrder: (state) => {
            state.numOfIcecreams--
        },
        IcecreamRestock: (state, action: PayloadAction<number>) => {
            state.numOfIcecreams += action.payload
        }
    }
})

export default IcecreamSlice.reducer;
export const { IcecreamOrder, IcecreamRestock } = IcecreamSlice.actions