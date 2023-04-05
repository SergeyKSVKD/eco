import styles from './NewsPage.module.css'
import list from './newslist'
import { useState, useRef, useCallback } from 'react'
import cn from 'classnames'
import { ReactComponent as ArrowIcon } from './assets/arrow.svg'

export const NewsPage = () => {
    const [activePage, setActivePage] = useState(1)
    const [newsList, setNewsList] = useState(list.slice(0, 10))
    const startPage = useRef()

    const PageBtn = ({ page }) => {
        const pageHandler = useCallback(() => {
            setNewsList(list.slice((page - 1) * 10, (page - 1) * 10 + 10))
            setActivePage(page)
            startPage.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, [])

        return <div
            className={cn(styles.pageBtn, { [styles.activePageBtn]: activePage === page })}
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
        setActivePage(activePage + 1)
        startPage.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const arrowPreviousHandler = () => {
        if (activePage === 1) {
            return
        }
        let page = activePage - 1
        setNewsList(list.slice((page - 1) * 10, (page - 1) * 10 + 10))
        setActivePage(activePage - 1)
        startPage.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const data = newsList.map((news, index) =>
        <div key={index}>
            <hr className={styles.devider} />
            <div key={news.imgsrc} className={styles.newsContainer}>
                {news.title ? <span className={styles.newsTitle}>{news.title}</span> : null}
                <div className={styles.newsTextContainer}>
                    <div className={styles.newsImages}>
                        <img src={require(`./assets/images/${news.imgsrc}`)} alt={news.imgalt} />
                    </div>
                    <div>
                        {news.text.map((paragraph) => <p key={paragraph} className={styles.newsText}>{paragraph}</p>)}
                    </div>
                </div>
                <div className={styles.authorsContainer}>
                    {news.description.map((description) => <p key={description} className={styles.newsAuthor}>{description}</p>)}
                </div>
            </div></div>
    )


    return (
        <>
            <br ref={startPage} />
            {data}
            <hr className={styles.devider} />

            <div className={styles.pagination}>
                <div className={styles.pageBtn}
                    onClick={arrowPreviousHandler}
                ><ArrowIcon className={styles.rotate} /></div>
                {pagination}
                <div className={styles.pageBtn}
                    onClick={arrowNextHandler}
                ><ArrowIcon /></div>
            </div>
        </>
    )
} 