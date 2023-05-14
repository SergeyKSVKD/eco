import styles from './NewsPage.module.scss'
import { useState, useEffect } from 'react'
import { ReactComponent as ArrowIcon } from './assets/arrow.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeuserScrollPosition, loadNews, changeUploadData } from './newsSlice'
import { DynamicPagination, FixedPagination } from '../../components/index'

const NewsPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const activePage = useSelector(state => state.newsState.activePage)
    const userPosition = useSelector(state => state.newsState.userScrollPosition)
    const news = useSelector(state => state.newsState.news)
    const displayedNews = useSelector(state => state.newsState.displayedNews)
    const [newsList, setNewsList] = useState([])
    const pageCount = Math.ceil(news.length / 10)
    const upload = useSelector(state => state.newsState.uploadData)

    useEffect(() => {
        if (news.length === 0) {
            dispatch(loadNews())
        }
        if (news.length > 0 && displayedNews.length === 0) {
            setTimeout(() => setNewsList(news.slice(0, (activePage - 1) * 10 + 10)), [100])
        }
        if (displayedNews.length > 0) {
            setTimeout(() => setNewsList(displayedNews), [100])
        }
    }, [news, displayedNews])

    useEffect(() => {
        if (userPosition !== 0) {
            setTimeout(() => {
                window.scrollTo({
                    top: userPosition,
                    behavior: "smooth",
                })
            }, [300])
            setTimeout(() => dispatch(changeuserScrollPosition(0)), [1000])
        }
    }, [userPosition])

    useEffect(() => {
        let scroll = 0
        const handleScroll = (e) => {
            let scrollHeight = Math.max(
                e.target.documentElement.scrollHeight,
                e.target.documentElement.offsetHeight,
                e.target.documentElement.clientHeight
            )
            let scrollTop = e.target.documentElement.scrollTop
            let clientHeight = e.target.documentElement.clientHeight
            console.log("scroll event", scrollHeight - (scrollTop + clientHeight));
            scroll = scrollTop
            if (scrollHeight - (scrollTop + clientHeight) < 20 && !upload && scrollHeight - (scrollTop + clientHeight) !== 0) {
                window.removeEventListener('scroll', handleScroll)
                dispatch(changeUploadData(true))
                setTimeout(() => {
                    window.addEventListener('scroll', handleScroll)
                }, [1000]);
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            dispatch(changeUploadData(false))
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const data = newsList.map((news) => {
        const seeMore = (e) => {
            dispatch(changeuserScrollPosition(e.pageY - 252))
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
            <div className={styles.news__container}>
                <FixedPagination pag={[pageCount, news]} />
                {data}
            </div>

            <hr className={styles.devider} />

            <DynamicPagination pag={[pageCount]} />
        </>
    )
}

export default NewsPage