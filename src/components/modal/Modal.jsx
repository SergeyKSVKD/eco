import styles from './Modal.module.css'
import cn from 'classnames'
import { ReactComponent as OKIcon } from './assets/OK.svg'
import { ReactComponent as WarningIcon } from './assets/Warning.svg'
import { ReactComponent as ErrorIcon } from './assets/Error.svg'

const Modal = ({ message, isModalActive, modal = '', successful = 'true' }) => {

    return (<>
        <div className={cn({
            [styles.modalSent]: modal === 'sent',
            [styles.active]: isModalActive,
            [styles.unsuccessful]: successful === 'false',
            [styles.successful]: successful === 'true',
            [styles.warning]: successful === 'warning',
        })}>
            {successful === 'true' ?
                <OKIcon /> : successful === 'false' ?
                    <ErrorIcon className={styles.icon} /> :
                    <WarningIcon />}
            <span className={styles.text}>{message}</span>
        </div>
    </>)
}

export { Modal }