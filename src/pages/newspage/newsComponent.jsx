import styles from './newsComponent.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ReactComponent as ArrowIcon } from './assets/arrow.svg'
import { ReactComponent as ShareIcon } from './assets/share.svg'
import { Modal } from '../../components/index'
import { loadNews } from './newsSlice'

const News = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [news, setNews] = useState(location.state ? location.state.news : [])
    const list = useSelector(state => state.newsState.news)
    const ref = useRef()
    const [modal, setModal] = useState({
        message: 'Ссылка скопирована',
        status: 'successful',
        isModalActive: false,
    })
    const id = location.pathname.slice(6, location.pathname.length)

    useEffect(() => {
        if (list.length === 0) {
            dispatch(loadNews())
        }
        if (list.length >= 1 && !location.state) {
            console.log(list);
            setNews(list.find(news => news.id === id))
        }
    }, [list])

    useEffect(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])

    return (<>
        <hr ref={ref} />
        {news ? <>
            <div className={styles.news__container}>
                <div className={styles.news}>
                    {news.title ? <span className={styles.news__title}>{news.title}</span> : null}
                    <div className={styles.news__text__container}>
                        <div className={styles.news__images}>
                            {news.imgsrc ?
                                // <img src={require(`./assets/images/${news.imgsrc}`)} alt={news.imgalt} />
                                <img src={process.env.PUBLIC_URL + `/images/news/${news.imgsrc}`} alt={news.imgalt} />
                                : null
                            }
                        </div>
                        {news.description ?
                            <div className={styles.centered}>
                                <div className={styles.authors__container}>
                                    {news.description.map((description) => <p key={description} className={styles.news__author}>{description}</p>)}
                                </div>
                            </div>
                            : null
                        }
                        {news.text ?
                            <div className={styles.news__text}>
                                {news.text.map((paragraph) => <p key={paragraph} className={styles.p__text}>{paragraph}</p>)}
                            </div>
                            : null
                        }
                    </div>
                </div>
                <div className={styles.news__button__container}>
                    <Modal message={modal.message} isModalActive={modal.isModalActive} modal='copy' successful={modal.status} />
                    <div className={styles.news__button}
                        onClick={() => navigate('/news')}><ArrowIcon className={styles.icon__rotate__180} />Назад
                    </div>
                    <div className={styles.news__button}
                        onClick={() => {
                            setModal({
                                ...modal,
                                isModalActive: true,
                            })
                            navigator.clipboard.writeText(window.location.href)
                            setTimeout(() => {
                                setModal({
                                    ...modal,
                                    isModalActive: false,
                                })
                            }, [2500])
                        }}>Поделиться <ShareIcon />
                    </div>
                </div>
            </div>

            <div className={styles.seealso__list__container}>
                <span className={styles.seealso__list__title}>Смотрите также:</span>
                {list.slice(0, 5).filter(news => news.id !== id).map(news => <div className={styles.seealso__container}
                    onClick={() => {
                        navigate(`/news/${news.id}`, { state: { news } })
                        setNews(news)
                        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }}
                    key={news.id}>
                    <div className={styles.seealso__images}>
                        {/* <img src={require(`./assets/images/${news.imgsrc}`)} alt={news.imgalt} /> */}
                        <img src={process.env.PUBLIC_URL + `/images/news/${news.imgsrc}`} alt={news.imgalt} />
                    </div>
                    <div className={styles.seealso__text__container}>
                        {news.title ? <span className={styles.seealso__title}>{news.title}</span> : null}
                        {news.promo ? <p className={styles.seealso__text}>{news.promo}</p> : null}
                    </div>
                </div>)}
            </div>
        </> : null}
    </>
    )
}

export default News