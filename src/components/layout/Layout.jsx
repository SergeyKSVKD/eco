import styles from './Layout.module.scss'
import { Header, Footer } from '../index'

export const Layout = ({ children }) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.header} >
                <Header />
            </div>
            <div className={styles.main}>
                {children}
            </div>
            <div className={styles.footer} >
                <Footer />
            </div>
        </div>
    )
}