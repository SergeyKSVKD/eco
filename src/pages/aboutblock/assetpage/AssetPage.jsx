import styles from './AssetPage.module.css'
import { motion } from 'framer-motion'
import { ReactComponent as EmailIcon } from './assets/email.svg'
import { ReactComponent as PhoneIcon } from './assets/phone.svg'
import stuf from './stuf.json'

export const AssetPage = () => {

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

    return (
        <>
            <span
                className={styles.title}>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0, }} variants={motionTitleVariants}
                >Актив </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.2, }} variants={motionTitleVariants}
                >экологического </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.4, }} variants={motionTitleVariants}
                >клуба "Жизнь" </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.6, }} variants={motionTitleVariants}
                >СамГТУ</motion.span>
            </span>
            <hr className={styles.devider} />
            <div className={styles.wrapper}>
                {stuf.map((el, index) => <div className={styles.cardContainer} key={index + 100}>
                    <div className={styles.header}></div>
                    <div className={styles.profile}></div>
                    <div className={styles.profile2}></div>
                    {el.name ? <span className={styles.name}>{el.name}</span> : null}
                    {el.imgsrc ? <div className={styles.images}            >
                        <img src={require(`./assets/images/${el.imgsrc}`)} alt={el.imgalt ? el.imgalt : 'eco-samgtu'} />
                    </div> : null}
                    <span className={styles.postContainer}>
                        {el.post ? el.post.map((postItem) => <span key={postItem}>{postItem}</span>) : null}
                    </span>
                    <span className={styles.contactsContainer}>
                        {el.phone ?
                            <span className={styles.contact}><PhoneIcon />{el.phone}</span> : null}
                        {el.email ?
                            <span className={styles.contact}><EmailIcon />{el.email}</span> : null}
                    </span>
                    <div className={styles.footer}></div>
                </div>)}
            </div>
        </>
    )
} 