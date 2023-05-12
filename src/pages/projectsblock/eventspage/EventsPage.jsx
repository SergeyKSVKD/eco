import styles from './EventsPage.module.scss'
import { Calendar } from '../../../components/index'
// import events from './events.json'
import { useEffect, useState } from 'react'
import { backend_app_url } from '../../../api'


const EventsPage = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        async function fetchData() {
            const url = `${backend_app_url}/events`
            const data = await fetch(url).then((res) => res.json())
            console.log(data);
            setEvents(data)
        }
        fetchData()
    }, [])

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

export default EventsPage