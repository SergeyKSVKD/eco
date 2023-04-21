import { createSlice } from '@reduxjs/toolkit'
import list from './newslist.json'

const initialState = {
    news: [...list],
    activePage: 1,
}

const newsSlice = createSlice({
    name: '@@news',
    initialState,
    reducers: {
        changeActivePage: (state, action) => {
            return state = {
                ...initialState,
                activePage: action.payload
            }
        },
    }
})

export const { changeActivePage} = newsSlice.actions
export const newsReducer = newsSlice.reducer