import styles from './FixedPagination.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { changeActivePage, changeDisplayedNews } from '../../pages/newspage/newsSlice'
import cn from 'classnames'
import { ReactComponent as ArrowIcon } from './assets/arrow.svg'


export const FixedPagination = (props) => {

    const [pageCount, news] = props.pag
    const dispatch = useDispatch()
    const scrollHandler = () => window.scrollTo({
        top: 100,
        behavior: "smooth",
    })

    const PageBtn = ({ page }) => {
        const pageHandler = () => {
            setTimeout(() => {
                dispatch(changeDisplayedNews({ news, page, dynamic: false }))
                dispatch(changeActivePage(page))
                scrollHandler()
            }, [100])
        }

        return <div
            className={cn(styles.fixed__page__button, { [styles.active__fixed__page__button]: activePage === page })}
            onClick={pageHandler}
        >{page}</div>
    }

    const activePage = useSelector(state => state.newsState.activePage)

    const arrowNextHandler = () => {
        if (activePage === pageCount) {
            return
        }
        let page = activePage + 1
        dispatch(changeDisplayedNews({ news, page, dynamic: false }))
        dispatch(changeActivePage(page))
        scrollHandler()
    }
    const arrowPreviousHandler = () => {
        if (activePage === 1) {
            return
        }
        let page = activePage - 1
        dispatch(changeDisplayedNews({ news, page, dynamic: false }))
        dispatch(changeActivePage(page))
        scrollHandler()
    }

    const arr = new Array(pageCount).fill({})
    const pagination = arr.map((_, i) => {
        return <PageBtn key={i + 1} page={i + 1} />
    })

    return <div className={styles.fixed__pagination}>
        <div className={styles.fixed__page__button}
            onClick={arrowPreviousHandler}
        ><ArrowIcon className={styles.fixed__rotate__up} />
        </div>
        {pagination}
        <div className={styles.fixed__page__button}
            onClick={arrowNextHandler}
        ><ArrowIcon className={styles.fixed__rotate__down} /></div>
    </div>
}
