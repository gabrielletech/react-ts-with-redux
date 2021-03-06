import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// declare the type of your initialState variable/value
interface ReservationState {
    value: string[]
}

// tell typeScript that your initial state is of type reservationState as defined above
const initialState: ReservationState = {
    value: []
}

export const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<string>) => {
        state.value.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<number>) => {
        state.value.splice(action.payload, 1)
        }
    } 
})
export const { addReservation, removeReservation } = reservationSlice.actions

export default reservationSlice.reducer