import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value : []
}

export const reservationSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      //state.value = [...state.value, action.payload]
      // console.log(action.payload.id)
      state.value.push(action.payload)
    },
    removeReservation: (state, action) => {
      state.value.splice(action.payload, 1)
      // state.value = state.value.filter((reservation) => reservation.id !== action.payload)
    }
  }
})

export const { addReservation, removeReservation } = reservationSlice.actions

export default reservationSlice.reducer


