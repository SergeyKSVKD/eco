import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeActivePage } from '../../pages/newspage/newsSlice'

export const DynamicPagination = (props) => {
    const dispatch = useDispatch()
    const [pageCount, list, setNewsList] = props.pag
    const [upload, setUpload] = useState(false)
    const activePage = useSelector(state => state.newsState.activePage)

    const handleScroll = (e) => {
        let scrollHeight = Math.max(
            e.target.documentElement.scrollHeight,
            e.target.documentElement.offsetHeight,
            e.target.documentElement.clientHeight
        )
        let scrollTop = e.target.documentElement.scrollTop
        let clientHeight = e.target.documentElement.clientHeight
        if (scrollHeight - (scrollTop + clientHeight) < 100) {
            setUpload(true)
        }
        else setUpload(false)
    }

    useEffect(() => {
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
        
    }, [])

    useEffect(() => {
        let page = activePage + 1
        if (upload && page <= pageCount) {
            const uploadedNews = list.slice((page - 1) * 10, (page - 1) * 10 + 10)
            setNewsList((prevState) => [...prevState, ...uploadedNews])
            dispatch(changeActivePage(page))
        }
    }, [upload])
}