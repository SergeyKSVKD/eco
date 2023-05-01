import { createSlice } from '@reduxjs/toolkit'
import list from './newslist.json'

const initialState = {
    news: [...list],
    activePage: 1,
    userScrollPosition: 0,
    paginationMode: 'static'
}

const newsSlice = createSlice({
    name: '@@news',
    initialState,
    reducers: {
        changeActivePage: (state, action) => {
            return state = {
                ...state,
                activePage: action.payload
            }
        },
        changeuserScrollPosition: (state, action) => {
            return state = {
                ...state,
                userScrollPosition: action.payload
            }
        },
        changePaginationMode: (state, action) => {
            return state = {
                ...state,
                paginationMode: action.payload
            }
        },
    }
})

export const { changeActivePage, changeuserScrollPosition, changePaginationMode } = newsSlice.actions
export const newsReducer = newsSlice.reducer