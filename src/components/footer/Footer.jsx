import { format } from 'date-fns'
import { ReactComponent as EmailIcon } from './assets/email.svg'
import { ReactComponent as LogoIcon } from './assets/logo.svg'
import { ReactComponent as UniversityIcon } from './assets/university.svg'
import { ReactComponent as PhoneIcon } from './assets/phone.svg'
import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'
import { useResize } from '../../helpers/useResize'

export const Footer = () => {
    return (<>
        <div className={styles.wrapper}>
            {useResize().isScreenSm ? <LogoIcon /> : null}

            <div>
                <div className={styles.hello__container}>
                    <span className={styles.hello__h}><Link className={styles.link} to='/contacts'>Контакты</Link></span>
                    <span className={styles.hello}>Присоединяйтесь к нам. Мы всегда рады всех видеть!</span>
                </div>

                <div className={styles.contacts__container}>
                    <span className={styles.contacts}>
                        <EmailIcon />
                        <a className={styles.mail__link} href='mailto:ecoclub@samgtu.ru'>
                            ecoclub@samgtu.ru</a>
                    </span>
                    <span className={styles.contacts}><UniversityIcon /> 443100 Россия, г.Самара, ул. Первомайская, д. 18, кафедра «ХТПЭ»</span>
                    <span className={styles.contacts}><PhoneIcon /> <a className={styles.mail__link} href='tel:8-927-686-76-91'>
                        тел. 8 (927) 686-76-91</a></span>
                </div>
            </div>
        </div>
        <span className={styles.copyright}>
            {useResize().isScreenSm ? "Все права защищены." : null} © 2023 - {format(new Date(), 'dd.MM.yyyy')}. ФГБОУ ВО СамГТУ.</span>
    </>
    )
}