import styles from './AboutUsPage.module.css'
import { ReactComponent as DoubleArrowIcon } from './assets/doublearrow.svg'
import { Link } from 'react-router-dom'
import { ReactComponent as QuoteIcon } from './assets/quote.svg'
import { motion } from 'framer-motion'

export const AboutUsPage = () => {

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
                >Думай </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.2, }} variants={motionTitleVariants}
                >логично </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.4, }} variants={motionTitleVariants}
                >- живи </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.6, }} variants={motionTitleVariants}
                >экологично!</motion.span>
            </span>

            <div className={styles.images}            >
                <img src={require('./assets/7c89b543-dc26-1d30-7b9f-58d800df7e94.webp')} alt="eco-samgtu" />
            </div>

            <p className={styles.borderLeft}>Добро пожаловать в сообщество активных ребят, которые могут проявить себя не только в волонтёрской, но и в научной сферах деятельности. Вместе с клубом ты сможешь воплотить все свои смелые и прогрессивные идеи в жизнь!</p>
            <p className={styles.borderLeft}>Неравнодушные студенты и преподаватели, идеи и желание дать чуточку добра окружающим - вот КТО МЫ!</p>
            <hr className={styles.devider} />
            <span className={styles.subTitle}>Полное название клуба - Экологический Клуб "Жизнь" Самарского государственного технического университета.</span>
            <br />
            <span className={styles.subTitle}>Сокращенное название - Экоклуб СамГТУ "Жизнь"</span>
            <br />
            <p className={styles.borderLeft}>Ещё недавно от существовавшего в СамГТУ Экоклуба оставался один след - номер телефона студентки, которая была его главным организатором в 2009-2010 учебном году. Начиная с 2016-2017 учебного года идёт восстановление и развитие Экологического клуба. МЫ, люди с активной жизненной позицией, люди, которые любят свой университет, город, страну, работаем, придумываем, воплощаем идеи, и, наконец, меняем окружающий нас мир. Наша цель - сделать его чище, ярче, добрее!</p>

            <hr className={styles.devider} />
            <div className={styles.ulContainer}>
                <div><span className={styles.subTitle2}>Участие в Экоклубе это:</span>
                    <ul>
                        <li>Расширение кругозора;</li>
                        <li>Приобретение навыков организатора;</li>
                        <li>Приобретение новых знакомых;</li>
                        <li>Общение с интересными людьми;</li>
                        <li>Самореализация.</li>
                    </ul>
                </div>
                <div className={styles.ulImages}            >
                    <img src={require('./assets/802e0e6d-7ab3-39d7-7842-ad38521bcaac.webp')} alt="eco-samgtu" />
                </div>
            </div>

            <div className={styles.ulContainer}>
                <div>
                    <span className={styles.subTitle2}>Как вы можете нам помочь?</span>
                    <ul>
                        <li>Вступить в наш клуб и регулярно приходить на встречи;</li>
                        <li>Правильно сортировать отходы;</li>
                        <li>Помогать в организации мероприятий;</li>
                        <li>Читать наши статьи.</li>
                    </ul>
                </div>
                <div className={styles.ulImages}            >
                    <img src={require('./assets/14f5e8f7-92ed-dc1f-25cb-4f4eaec40351.webp')} alt="eco-samgtu" />
                </div>
            </div>

            <hr className={styles.devider} />
            <QuoteIcon />
            <span className={styles.quoteTitle}>Каждый имеет право на благоприятную окружающую среду, достоверную информацию о ее состоянии и на возмещение ущерба, причиненного его здоровью или имуществу экологическим правонарушением.</span>
            <QuoteIcon className={styles.quoteTransform} />
            <br className={styles.devider} />
            <br />
            <span className={styles.quote}>Ст. 42 Конституции РФ</span>
            <hr className={styles.devider} />

            <div className={styles.joinUs}>
                <span className={styles.extendTitle}>Готовы менять и меняться? Есть мысли и идеи, которые нужно воплотить в жизнь?</span>
                <Link to='/contacts'>
                    <div className={styles.joinUsButton}><DoubleArrowIcon />Присоединяйтесь к НАМ!</div>
                </Link>
                <span className={styles.extendTitle}>НАШЕ БУДУЩЕЕ - В НАШИХ РУКАХ!</span>
            </div>
        </>
    )
} 