import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value : []
}

export const customerSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.value.push(action.payload)
    },
    addFoodtocustomer: (state, action) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push()
        }
      })
    },
    // addFoodtocustomer: (state, action) => {
    //   state.value.forEach((customer) => { customer.id === action.payload.id && [...customer.food, action.payload.food]
    //   })
    // },
  }
})

export const { addCustomer, addFoodtocustomer } = customerSlice.actions

export default customerSlice.reducer



