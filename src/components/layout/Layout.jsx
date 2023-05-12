import styles from './Layout.module.scss'
import { Header, Footer, Preloader } from '../index'
import { Suspense } from 'react'

export const Layout = ({ children }) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.header} >
                <Header />
            </div>
            <div className={styles.main}>
                <Suspense fallback={<Preloader />}>
                    {children}
                </Suspense>
            </div>
            <div className={styles.footer} >
                <Footer />
            </div>
        </div>
    )
}