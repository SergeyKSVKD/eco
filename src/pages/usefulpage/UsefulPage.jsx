import styles from './UsefulPage.module.scss'
import { motion } from 'framer-motion'

export const UsefulPage = () => {
    const motionTitleVariants = {
        hidden: {
            opacity: 0,
            x: 300,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
    }
    const motionScaleVariants = {
        hidden: {
            scale: 0.9,
        },
        visible: {
            scale: 1,
        },
    }

    return (
        <>
            <span className={styles.title__red}>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0, }} variants={motionTitleVariants}
                >Карты </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.2, }} variants={motionTitleVariants}
                >расположения </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.4, }} variants={motionTitleVariants}
                >пунктов приема </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.6, }} variants={motionTitleVariants}
                >вторсырья </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.8, }} variants={motionTitleVariants}
                >в Самаре</motion.span>
            </span>
            <br />
            <motion.div
                initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0, }} variants={motionScaleVariants}
            >
                <span className={styles.sub__title__gray}>Пункты приёма вторсырья на Recyclemap</span>
                <a href='https://recyclemap.ru/samara' target='_blank' rel="noreferrer" className={styles.images}>
                    <img src={require(`./assets/recyclemap.webp`)} alt='recyclemap' />
                </a>
            </motion.div>
            <motion.div
                initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0, }} variants={motionScaleVariants}
            >
                <span className={styles.sub__title__gray}>Пункты приёма вторсырья на Яндекс.Картах</span>
                <a href='https://yandex.ru/maps/51/samara/?ll=50.219014%2C53.202399&mode=usermaps&um=mymaps%3AtM8xzEyg4MqnRQu75wki619F-JO7Ta03&z=12' target='_blank' rel="noreferrer" className={styles.images}>
                    <img src={require(`./assets/yandexmap.webp`)} alt='yandexmap' />
                </a>
            </motion.div>
            <br />
            <br />
        </>
    )
} 