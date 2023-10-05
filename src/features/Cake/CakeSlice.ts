import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type StateType = {
    numOfCakes: number
}

const initialState: StateType = {
    numOfCakes: 10
}

const CakeSlice = createSlice({
    name:'cakes',
    initialState,
    reducers: {
        cakeOrder: (state) => {
            state.numOfCakes--
        },
        cakeRestock: (state, action: PayloadAction<number>) => {
            state.numOfCakes += action.payload
        }
    }
})

export default CakeSlice.reducer;
export const { cakeOrder, cakeRestock } = CakeSlice.actions