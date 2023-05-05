import styles from './Calendar.module.scss'
import { useState, useEffect } from 'react'
import {
    format, startOfWeek, addDays, startOfMonth, endOfMonth,
    endOfWeek, isSameMonth, isSameDay, subMonths, addMonths
} from 'date-fns';
import { useResize } from '../../helpers/index'
import { ru } from 'date-fns/locale'
import cn from 'classnames'
import { ReactComponent as ArrowIcon } from './assets/arrowSquare.svg'
import { ReactComponent as DateIcon } from './assets/date.svg'

export const Calendar = (props) => {
    const events = props.events || []

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [activeDate, setActiveDate] = useState(new Date())
    let size = useResize()

    // const marker = () => {
    //     return <div className={styles.marker}></div>
    // }

    // const eventContainer = (props) => {
    //     return <div className={styles.event}>
    //         {marker()}
    //         {props.name}
    //     </div>
    // }
    // const eventInfoContainer = (props) => {
    //     return <div className={styles.event__info}>
    //         {props.description.map((para) => {
    //             <p>{para}</p>
    //         })}
    //     </div>
    // }

    function renderEventsHandler() {
        if (size.isScreenLg) {
            events.map(event => {
                const currentDate = new Date()
                if (document.querySelector(`[data-date="${event.date}"]`)) {
                    const date = new Date(document.querySelector(`[data-date="${event.date}"]`).dataset.dateeng)
                    let container = document.querySelector(`[data-date="${event.date}"]`).childNodes[1]
                    container.innerHTML = '';
                    let block = document.createElement("div")
                    block.classList.add(styles.event)
                    let content = document.createTextNode(`${event.name}`)
                    let marker = document.createElement("div")
                    marker.classList.add(styles.marker)
                    if (currentDate >= date) {
                        marker.classList.add(styles.expired)
                    }
                    block.appendChild(marker)
                    block.appendChild(content)
                    container.appendChild(block)
                    if (event.description) {
                        let info = document.createElement("div")
                        info.classList.add(styles.event__info)
                        event.description.map((p) => {
                            let text = document.createElement("p")
                            text.innerText = p
                            info.appendChild(text)
                        })
                        block.appendChild(info)
                    }
                }
            })
        }
        else {
            events.map(event => {
                const currentDate = new Date()
                if (document.querySelector(`[data-date="${event.date}"]`)) {
                    const date = new Date(document.querySelector(`[data-date="${event.date}"]`).dataset.dateeng)
                    let container = document.querySelector(`[data-date="${event.date}"]`).childNodes[1]
                    container.innerHTML = '';
                    let block = document.createElement("div")
                    block.classList.add(styles.event)
                    let marker = document.createElement("div")
                    marker.classList.add(styles.marker)
                    if (currentDate >= date) {
                        marker.classList.add(styles.expired)
                    }
                    block.appendChild(marker)
                    container.appendChild(block)
                    if (event.description) {
                        let info = document.createElement("div")
                        info.classList.add(styles.event__info)
                        event.description.map((p) => {
                            let text = document.createElement("p")
                            text.innerText = p
                            info.appendChild(text)
                        })
                        block.appendChild(info)
                    }
                }
            })
        }
    }


    useEffect(() => {
        renderEventsHandler()
    }, [activeDate, size])

    const getCardHeader = () => {
        return <>
            <div className={styles.card__header}>
                <DateIcon />
                <span className={styles.card__header__text}>Даты и события</span>
            </div>
            <hr className={styles.divider} />
        </>
    }

    const getCalendarHeader = () => {
        return (
            <div className={styles.header}>
                <div
                    className={styles.today__button}
                    onClick={() => {
                        setSelectedDate(new Date())
                        setActiveDate(new Date())
                    }}
                >
                    Сегодня
                </div>
                <div>
                    <ArrowIcon
                        className={styles.nav__icon}
                        onClick={() => {
                            setActiveDate(subMonths(activeDate, 1))
                        }}
                    />
                    <ArrowIcon
                        className={cn(styles.nav__icon, styles.transform)}
                        onClick={() => {
                            setActiveDate(addMonths(activeDate, 1))
                        }}
                    />
                </div>
                <div className={styles.current__container}>
                    <h2 className={styles.current__month}>{format(activeDate, "LLLL", { locale: ru })}</h2>
                    <h2 className={styles.current__year}>{format(activeDate, "yyyy", { locale: ru })}</h2>
                </div>
            </div>
        )
    }

    const getWeekDaysNames = () => {
        const weekStartDate = startOfWeek(activeDate, { weekStartsOn: 1 });
        const weekDays = [];
        for (let day = 0; day < 7; day++) {
            weekDays.push(
                <div className={styles.week__names}
                    key={day}>
                    {format(addDays(weekStartDate, day), "EEEEEE", { locale: ru })}
                </div>
            )
        }
        return <div className={styles.week__container}>{weekDays}</div>
    };

    const getDates = () => {
        const startOfTheSelectedMonth = startOfMonth(activeDate)
        const endOfTheSelectedMonth = endOfMonth(activeDate)
        const startDate = startOfWeek(startOfTheSelectedMonth, { weekStartsOn: 1 })
        const endDate = endOfWeek(endOfTheSelectedMonth, { weekStartsOn: 1 })

        let currentDate = startDate

        const allDays = []

        while (currentDate <= endDate) {
            const cloneDate = currentDate
            allDays.push(
                <div
                    key={currentDate}
                    className={styles.day}
                    data-date={format(currentDate, "dd MMMM yyyy", { locale: ru })}
                    data-dateeng={currentDate}
                    onClick={(e) => {
                        // console.log(e);
                        // let classList = Array.from(e.target.firstChild.classList)
                        // if (classList.length > 1 && classList[1].includes('inactive__day')) {
                        //     return
                        // }
                        setSelectedDate(cloneDate)
                    }}
                >
                    <div
                        // onClick={e => e.stopPropagation()}
                        className={cn(styles.date,
                            { [styles.inactive__day]: !isSameMonth(currentDate, activeDate) },
                            { [styles.selected__day]: isSameDay(currentDate, selectedDate) }
                        )}>
                        {format(currentDate, "d")}
                    </div>
                    <div className={styles.events__container} />
                </div>
            )
            currentDate = addDays(currentDate, 1)
        }

        return <div className={styles.week__container}>{allDays}</div>
    }

    return <>
        <div className={styles.background}>
            <div className={styles.container}>
                {getCardHeader()}
                {getCalendarHeader()}
                {getWeekDaysNames()}
                {getDates()}
            </div>
        </div>
    </>
}