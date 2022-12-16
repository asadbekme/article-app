import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: null,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // LOGIN
    loginUserStart: (state) => {
      state.isLoading = true
    },
    loginUserSuccess: (state) => {

    },
    loginUserFailure: (state) => {
         
    },
    // REGISTER
    registerUserStart: (state) => {
      state.isLoading = true
    },
    registerUserSuccess: (state) => {
      state.isLoading = false
      state.isLoggedIn = true
    },
    registerUserFailure: (state) => {
      state.isLoading = false
      state.error = "Error"        
    }
  }
})

export const { loginUserStart, loginUserSuccess, loginUserFailure, registerUserStart, registerUserSuccess, registerUserFailure } = authSlice.actions
export default authSlice.reducer