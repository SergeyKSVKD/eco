import { createSlice } from '@reduxjs/toolkit'
import list from './newslist.json'

const initialState = {
    news: [...list],
    activePage: 1,
    userScrollPosition: 0,
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
        changeuserScrollPosition: (state, action) => {
            return state = {
                ...state,
                userScrollPosition: action.payload
            }
        },
    }
})

export const { changeActivePage, changeuserScrollPosition } = newsSlice.actions
export const newsReducer = newsSlice.reducer