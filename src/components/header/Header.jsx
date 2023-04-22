import styles from './Header.module.scss'
import { ReactComponent as LogoIcon } from './assets/logo.svg'
import { Navbar } from '../navbar/Navbar'
import { useResize } from '../../helpers/useResize'


export const Header = () => {
    return (
        <>
            <div className={styles.header__container}>
                <div className={styles.link__container}>
                    <div className={styles.link}>
                        <a href="https://samgtu.ru" target="_blanc"><LogoIcon className={styles.logo} /></a>
                    </div>
                    {useResize().isScreenSm ?
                        <div className={styles.images}>
                            <a href="https://ecoclub.samgtu.ru" target="_blanc">
                                <img  className={styles.eco__logo} src={require('./assets/ecoclub.png')} alt="eco-samgtu" />
                            </a>
                        </div> : null}
                </div>
                <Navbar />
            </div>
        </>
    )
}