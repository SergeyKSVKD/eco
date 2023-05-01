import styles from './EventsPage.module.scss'
import { Calendar } from '../../../components/index'
import events from './events.json'
import { useEffect } from 'react'

export const EventsPage = () => {
    useEffect(() => {
        window.scrollTo({
            top: 150,
            behavior: "smooth",
        })
    }, [])

    return <>
        <Calendar events={events} />
    </>
}