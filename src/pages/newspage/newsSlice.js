import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { backend_app_url } from '../../api'
// import list from './newslist.json'


export const loadNews = createAsyncThunk(
    '@@news/get-all-news',
    async () => {
        const url = `${backend_app_url}/news`
        const data = fetch(url).then((res) => res.json())
        return data || []
    }
)

const initialState = {
    news: [],
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
    },
    extraReducers: (builder) => {
        builder.addCase(loadNews.fulfilled, (state, action) => {
            state.news = action.payload
        })
    }
})

export const { changeActivePage, changeuserScrollPosition, changePaginationMode } = newsSlice.actions
export const newsReducer = newsSlice.reducer