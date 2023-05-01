import styles from './Pagination.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { changeActivePage } from '../../pages/newspage/newsSlice'
import cn from 'classnames'
import { ReactComponent as ArrowIcon } from './assets/arrow.svg'


export const Pagination = (props) => {

    const [pageCount, list, setNewsList] = props.pag
    const dispatch = useDispatch()
    const scrollHandler = () => window.scrollTo({
        top: 100,
        behavior: "smooth",
    })

    const PageBtn = ({ page }) => {
        const pageHandler = () => {
            setNewsList(list.slice((page - 1) * 10, (page - 1) * 10 + 10))
            dispatch(changeActivePage(page))
            scrollHandler()
        }

        return <div
            className={cn(styles.page__button, { [styles.active__page__button]: activePage === page })}
            onClick={pageHandler}
        >{page}</div>
    }

    const activePage = useSelector(state => state.newsState.activePage)

    const arrowNextHandler = () => {
        if (activePage === pageCount) {
            return
        }
        let page = activePage + 1
        setNewsList(list.slice((page - 1) * 10, (page - 1) * 10 + 10))
        dispatch(changeActivePage(activePage + 1))
        scrollHandler()
    }
    const arrowPreviousHandler = () => {
        if (activePage === 1) {
            return
        }
        let page = activePage - 1
        setNewsList(list.slice((page - 1) * 10, (page - 1) * 10 + 10))
        dispatch(changeActivePage(activePage - 1))
        scrollHandler()
    }

    const arr = new Array(pageCount).fill({})
    const pagination = arr.map((_, i) => {
        return <PageBtn key={i + 1} page={i + 1} />
    })

    return <div className={styles.pagination}>
        <div className={styles.page__button}
            onClick={arrowPreviousHandler}
        ><ArrowIcon className={styles.rotate} />
        </div>
        {pagination}
        <div className={styles.page__button}
            onClick={arrowNextHandler}
        ><ArrowIcon /></div>
    </div>
}
