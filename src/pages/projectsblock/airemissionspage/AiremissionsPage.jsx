import styles from './AiremissionsPage.module.scss'
import cn from 'classnames'
import { ReactComponent as EarthIcon } from './assets/earth.svg'

const AiremissionsPage = () => {
    return (
        <>
            <p className={cn(styles.title__gray)}>Раздел «Выбросы в атмосферу» ожидает идей от студентов и сотрудников.</p>
            <div className={styles.images}            >
                <img src={require('./assets/atmo.webp')} alt="atmo-samgtu" />
            </div>
            <p className={cn(styles.border__left, styles.bold)}>А пока призываем к простым действиям:</p>
            <p className={styles.earth}><EarthIcon />пересаживайтесь на велосипеды;</p>
            <p className={styles.earth}><EarthIcon />если уж приехали на автомобиле, не запускайте двигатель в ожидании приятелей;</p>
            <p className={styles.earth}><EarthIcon />кооперируйтесь с друзьями при поездках на автомобиле.</p>
        </>
    )
} 

export default AiremissionsPage