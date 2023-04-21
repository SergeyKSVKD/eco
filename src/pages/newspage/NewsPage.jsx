import styles from './NewsPage.module.scss'
import { useState, useRef, useCallback } from 'react'
import cn from 'classnames'
import { ReactComponent as ArrowIcon } from './assets/arrow.svg'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeActivePage } from './newsSlice'

export const NewsPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const activePage = useSelector(state => state.newsState.activePage)
    const list = useSelector(state => state.newsState.news)
    const [newsList, setNewsList] = useState(list.slice((activePage - 1) * 10, (activePage - 1) * 10 + 10))
    const startPage = useRef()

    const PageBtn = ({ page }) => {
        const pageHandler = useCallback(() => {
            setNewsList(list.slice((page - 1) * 10, (page - 1) * 10 + 10))
            dispatch(changeActivePage(page))
            startPage.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, [])

        return <div
            className={cn(styles.page__button, { [styles.active__page__button]: activePage === page })}
            onClick={pageHandler}
        >{page}</div>
    }

    const pageCount = Math.ceil(list.length / 10)
    const arr = new Array(pageCount).fill({})
    const pagination = arr.map((_, i) => {
        return <PageBtn key={i + 1} page={i + 1} />
    })

    const arrowNextHandler = () => {
        if (activePage === pageCount) {
            return
        }
        let page = activePage + 1
        setNewsList(list.slice((page - 1) * 10, (page - 1) * 10 + 10))
        dispatch(changeActivePage(activePage + 1))
        startPage.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const arrowPreviousHandler = () => {
        if (activePage === 1) {
            return
        }
        let page = activePage - 1
        setNewsList(list.slice((page - 1) * 10, (page - 1) * 10 + 10))
        dispatch(changeActivePage(activePage - 1))
        startPage.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const data = newsList.map((news) => {
        const seeMore = () => navigate(`/news/${news.id}`, { state: { news } })

        return <div key={news.id}>
            <hr className={styles.devider} />
            <div key={news.id} className={styles.news__page__container}>
                <div className={styles.news__page__images}
                    onClick={seeMore}>
                    <img src={require(`./assets/images/${news.imgsrc}`)} alt={news.imgalt} />
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
            <br ref={startPage} />
            {data}
            <hr className={styles.devider} />

            <div className={styles.pagination}>
                <div className={styles.page__button}
                    onClick={arrowPreviousHandler}
                ><ArrowIcon className={styles.rotate} /></div>
                {pagination}
                <div className={styles.page__button}
                    onClick={arrowNextHandler}
                ><ArrowIcon /></div>
            </div>
        </>
    )
} 