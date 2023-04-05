import styles from './EventsPage.module.css'
import cn from 'classnames'
import { ReactComponent as PhoneIcon } from './assets/phone.svg'

export const EventsPage = () => {
    const event = <div className={styles.container}>
        <div className={styles.event}>
            <span className={styles.title}>СОРТИРОВКА МАКУЛАТУРЫ</span>
            <div className={styles.infoContainer}>
                <div className={styles.eventInfo}>
                    <div className={styles.dateContainer}>
                        <span className={styles.date}>21</span>
                        <span className={styles.month}>марта</span>
                    </div>
                    <span className={styles.time}>11:50</span>
                    <span className={styles.location}>1 корпус, СамГТУ</span>
                    <span className={styles.quantity}>Количество мест: 4 человека</span>
                </div>

                <div className={styles.essence}>
                    <span>Суть мероприятия:</span>
                    <span>Подготовка накопленной в контейнерах макулатуры к вывозу</span>
                </div></div>
            <div className={styles.logoWrapper}>
                logo1 logo2
            </div>
            <div className={styles.description}>
                <p>Пора за работу! 🔥</p>
            </div>
            <div className={styles.tutor}>
                <span className={styles.fullname}>Куратор: Зубарев Георгий </span>
                <span className={styles.link}><a href="https://vk.com/gzubarev">https://vk.com/gzubarev</a></span>
                <span className={styles.contacts}><PhoneIcon /> +7 (967) 726-93-65</span>
            </div>
        </div>
    </div>

    return (
        <>
            {event}
        </>
    )
} 