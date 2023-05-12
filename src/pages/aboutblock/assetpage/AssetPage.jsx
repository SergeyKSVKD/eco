import styles from './AssetPage.module.scss'
import { motion } from 'framer-motion'
import { backend_app_url } from '../../../api'
// import { ReactComponent as EmailIcon } from './assets/email.svg'
// import { ReactComponent as PhoneIcon } from './assets/phone.svg'
import { useState, useEffect } from 'react'

const AssetPage = () => {

    const [stufs, setStufs] = useState([])

    useEffect(() => {
        async function fetchData() {
            const url = `${backend_app_url}/stufs`
            const data = await fetch(url).then((res) => res.json())
            setStufs(data)
        }
        fetchData()
    }, [])

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
                className={styles.title__gray}>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0, }} variants={motionTitleVariants}
                >Актив </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.2, }} variants={motionTitleVariants}
                >экологического </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.4, }} variants={motionTitleVariants}
                >клуба «Жизнь» </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.6, }} variants={motionTitleVariants}
                >СамГТУ</motion.span>
            </span>
            <hr className={styles.devider} />
            <div className={styles.wrapper}>
                {stufs.map((el, index) => <div className={styles.card__container} key={index + 100}>
                    <div className={styles.header}></div>
                    <div className={styles.profile}></div>
                    <div className={styles.profile2}></div>
                    {el.name ? <span className={styles.name}>{el.name}</span> : null}
                    {el.imgsrc ? <div className={styles.images}            >
                        {/* <img src={require(`./assets/images/${el.imgsrc}`)} alt={el.imgalt ? el.imgalt : 'eco-samgtu'} /> */}
                        <img src={process.env.PUBLIC_URL + `images/asset/${el.imgsrc}`} alt={el.imgalt ? el.imgalt : 'eco-samgtu'} />
                    </div> : null}
                    <span className={styles.post__container}>
                        {el.post ? el.post.map((postItem) => <span key={postItem}>{postItem}</span>) : null}
                    </span>
                    {/* <span className={styles.contacts__container}>
                        {el.phone ?
                            <span className={styles.contact}><PhoneIcon />{el.phone}</span> : null}
                        {el.email ?
                            <span className={styles.contact}><EmailIcon />{el.email}</span> : null}
                    </span> */}
                    <div className={styles.footer}></div>
                    {el.quote ?
                        <blockquote className={styles.blockquote}>
                            <span>{el.quote}</span>
                        </blockquote> : null}
                </div>)}
            </div>
        </>
    )
} 

export default AssetPage