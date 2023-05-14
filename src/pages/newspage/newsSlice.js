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
    uploadData: false,
    displayedNews: [],
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
        changeUploadData: (state, action) => {
            return state = {
                ...state,
                uploadData: action.payload
            }
        },
        changeDisplayedNews: (state, action) => {
            if (action.payload.dynamic) {
                const news = action.payload.news
                const displayedNews = news.slice(0, (action.payload.page - 1) * 10 + 10)
                return state = {
                    ...state,
                    displayedNews: displayedNews
                }
            }
            if (!action.payload.dynamic) {
                const news = action.payload.news
                const displayedNews = news.slice((action.payload.page - 1) * 10, (action.payload.page - 1) * 10 + 10)
                return state = {
                    ...state,
                    displayedNews: displayedNews
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadNews.fulfilled, (state, action) => {
            state.news = action.payload
        })
    }
})

export const { changeActivePage, changeuserScrollPosition, changeUploadData, changeDisplayedNews } = newsSlice.actions
export const newsReducer = newsSlice.reducer