import styles from './NewsPage.module.scss'
import { useState, useEffect } from 'react'
import { ReactComponent as ArrowIcon } from './assets/arrow.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeuserScrollPosition, changeActivePage, changePaginationMode, loadNews } from './newsSlice'
import { Pagination, DynamicPagination } from '../../components/index'

const NewsPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const activePage = useSelector(state => state.newsState.activePage)
    const userPosition = useSelector(state => state.newsState.userScrollPosition)
    const list = useSelector(state => state.newsState.news)
    const mode = useSelector(state => state.newsState.paginationMode)
    const [newsList, setNewsList] = useState([])
    const pageCount = Math.ceil(list.length / 10)

    useEffect(() => {
        if (list.length === 0) {
            dispatch(loadNews())
        }
        setNewsList(list.slice((activePage - 1) * 10, (activePage - 1) * 10 + 10))
    }, [list])

    useEffect(() => {
        if (userPosition !== 0) {
            setTimeout(() => {
                window.scrollTo({
                    top: userPosition,
                    behavior: "smooth",
                })
                dispatch(changeuserScrollPosition(0))
            })
        }
    }, [userPosition])

    useEffect(() => {
        let scroll = 0
        const handleScroll = () => {
            scroll = window.scrollY
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            dispatch(changeuserScrollPosition(scroll))
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        if (mode === 'dynamic') {
            activePage >= 2 ?
                // setNewsList(list.slice((activePage - 2) * 10, (activePage - 1) * 10 + 10)) : setNewsList(list.slice(0, 10))
                setNewsList(list.slice(0, (activePage - 1) * 10 + 10)) : setNewsList(list.slice(0, 10))
        }
    }, [])

    const data = newsList.map((news) => {
        const seeMore = (e) => {
            navigate(`/news/${news.id}`, { state: { news } })
        }

        return <div key={news.id}>
            <hr className={styles.devider} />
            <div key={news.id} className={styles.news__page__container}>
                <div className={styles.news__page__images}
                    onClick={seeMore}>
                    {/* <img src={require(`./assets/images/${news.imgsrc}`)} alt={news.imgalt} /> */}
                    <img src={process.env.PUBLIC_URL + `/images/news/${news.imgsrc}`} alt={news.imgalt} />
                </div>
                <div className={styles.news__page__text__container}>
                    {news.title ? <span className={styles.news__page__title}
                        onClick={seeMore}>{news.title}</span> : null}
                    <div className={styles.news__page__text}>
                        {news.promo ? news.promo.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : null}
                    </div>
                    <div className={styles.more__btn}
                        onClick={seeMore}>Читать новость <ArrowIcon />
                    </div>
                </div>
            </div></div>
    })

    return (
        <>
            <div>
                <div style={mode === 'static' ? { background: '#e31235' } : null}
                    className={styles.mode__btn}
                    onClick={() => {
                        dispatch(changePaginationMode('static'))
                        dispatch(changeActivePage(1))
                        setNewsList(list.slice(0, 10))
                    }}>Статическая пагинация</div>
                <div style={mode === 'dynamic' ? { background: '#e31235' } : null}
                    className={styles.mode__btn}
                    onClick={() => {
                        dispatch(changePaginationMode('dynamic'))
                        dispatch(changeActivePage(1))
                        setNewsList(list.slice(0, 10))
                    }}>Динамическая пагинация</div>
            </div>

            {data}
            <hr className={styles.devider} />

            {
                mode === 'static' ?
                    <Pagination pag={[pageCount, list, setNewsList]} />
                    : <DynamicPagination pag={[pageCount, list, setNewsList]} />
            }
        </>
    )
} 

export default NewsPage