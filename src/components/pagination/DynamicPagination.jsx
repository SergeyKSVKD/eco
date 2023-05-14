import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeActivePage, changeDisplayedNews, changeUploadData, changeScrollEvent } from '../../pages/newspage/newsSlice'

export const DynamicPagination = (props) => {
    const dispatch = useDispatch()
    const [pageCount] = props.pag
    const activePage = useSelector(state => state.newsState.activePage)
    const news = useSelector(state => state.newsState.news)
    const upload = useSelector(state => state.newsState.uploadData)

    useEffect(() => {
        let page = activePage + 1
        if (upload && page <= pageCount) {
            dispatch(changeDisplayedNews({news, page, dynamic: true}))
            dispatch(changeUploadData(false))
            dispatch(changeActivePage(page))
        }
    }, [upload])
}