import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../utils/axios';

const initialState = {
    username: null,
    emai: null,
    token: null,
    isLoading: false,
    status: null,
}

export const registerUser = createAsyncThunk('auth/registerUser', async ({username, email, password, confirmPassword, date}) => {
    try {
        const { data } = await axios.post('/users/create', {
            username,
            email,
            password,
            confirmPassword,
            date,
        })
        if (data.token) {
            window.localStorage.setItem('token', data.token)
        }
        return data
    } catch (error) {
        console.log(error)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
            state.status = null;
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.status = 'good'
            state.username = action.payload.username;
        },
        [registerUser.rejected]: (state, action) => {
            state.status = 'problems';
            state.isLoading = false;
        },
    },
})

export default authSlice.reducer