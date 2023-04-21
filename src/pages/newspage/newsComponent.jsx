import styles from './newsComponent.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { ReactComponent as ArrowIcon } from './assets/arrow.svg'
import { ReactComponent as ShareIcon } from './assets/share.svg'
import { Modal } from '../../components/index'


export const News = () => {
    const location = useLocation();
    const navigate = useNavigate()
    let news = []
    const list = useSelector(state => state.newsState.news)
    const ref = useRef()
    const [modal, setModal] = useState({
        message: 'Ссылка скопирована',
        status: 'successful',
        isModalActive: false,
    })
    const id = location.pathname.slice(6, location.pathname.length)
    const newsFromId = list.find((item) => {
        return item.id === id
    })

    location.state ? news = location.state.news : news = newsFromId

    useEffect(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])

    return (<>
        <hr ref={ref} />
        <div className={styles.news__container}>
            <div className={styles.news}>
                {news.title ? <span className={styles.news__title}>{news.title}</span> : null}
                <div className={styles.news__text__container}>
                    <div className={styles.news__images}>
                        <img src={require(`./assets/images/${news.imgsrc}`)} alt={news.imgalt} />
                    </div>
                    <div className={styles.centered}>
                        <div className={styles.authors__container}>
                            {news.description.map((description) => <p key={description} className={styles.news__author}>{description}</p>)}
                        </div>
                    </div>
                    <div className={styles.news__text}>
                        {news.text.map((paragraph) => <p key={paragraph} className={styles.p__text}>{paragraph}</p>)}
                    </div>
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
                    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                key={news.id}>
                <div className={styles.seealso__images}>
                    <img src={require(`./assets/images/${news.imgsrc}`)} alt={news.imgalt} />
                </div>
                <div className={styles.seealso__text__container}>
                    {news.title ? <span className={styles.seealso__title}>{news.title}</span> : null}
                    {news.promo ? <p className={styles.seealso__text}>{news.promo}</p> : null}
                </div>
            </div>)}
        </div>
    </>
    )
}