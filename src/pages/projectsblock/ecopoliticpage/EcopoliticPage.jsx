import styles from './EcopoliticPage.module.scss'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { ReactComponent as EarthIcon } from './assets/earth.svg'

const EcopoliticPage = () => {

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
                >ЭКОЛОГИЧЕСКАЯ </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.2, }} variants={motionTitleVariants}
                >ПОЛИТИКА  </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.4, }} variants={motionTitleVariants}
                >СамГТУ  </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.6, }} variants={motionTitleVariants}
                >(проект)</motion.span>
            </span>
            <div className={styles.images}            >
                <img src={require('./assets/eco-politic.webp')} alt="eco-samgtu" />
            </div>
            <p className={styles.border__left}>Самарский государственный технический университет осознаёт потенциальную опасность негативного воздействия на окружающую среду в процессе проведения учебной и иных видов деятельности.</p>
            <p className={styles.border__left}>Экологическая политика СамГТУ направлена на сохранение благоприятной окружающей среды в университете, включая учебные корпуса, общежития, спорткомплекс, бассейн, культурно-молодежный центр, профилакторий, базу отдыха «Политехник», а также распространяется на близлежащие территории. </p>
            <p className={styles.border__left}>Целью экологической политики СамГТУ является предотвращение и снижение негативного воздействия на окружающую среду в соответствии с природоохранным законодательством Российской Федерации и Самарской области.</p>
            <br />
            <hr className={styles.devider} />
            <span className={styles.sub__title__gray}>Основные положения экологической политики</span>
            <p className={cn(styles.border__left)}>Охрана окружающей среды является неотъемлемой частью функционирования университета</p>
            <p className={cn(styles.border__left)}>Персонал и студенты университета осознают свою ответственность за состояние окружающей среды, оказывают влияние на деятельность физических и юридических лиц в университете, на прилегающей территории и обязуются:</p>
            <p className={styles.earth}><EarthIcon />экономить и рационально использовать ресурсы (материалы, химикаты, воду, энергию), предотвращать и сокращать объёмы образования отходов, развивать рециклинг;</p>
            <p className={styles.earth}><EarthIcon />включать экологическую подготовку в программы внутреннего обучения персонала СамГТУ;</p>
            <p className={styles.earth}><EarthIcon />осуществлять хозяйственные процессы, разрабатывать и совершенствовать лабораторные работы с минимизацией потребления ресурсов, использованием менее опасных материалов и химикатов, сокращением любых вредных воздействий на окружающую среду, вторично использовать химикаты и материалы, полученные в лабораторных работах;</p>
            <p className={styles.earth}><EarthIcon />предъявлять экологические требования при заключении договоров аренды на использование сторонними организациями объектов СамГТУ;</p>
            <p className={styles.earth}><EarthIcon />принимать меры, исключающие возникновение экологических прецедентов на территории СамГТУ;</p>
            <p className={styles.earth}><EarthIcon />осуществлять мониторинг эффективности экологической деятельности СамГТУ.</p>
        
            <hr className={styles.devider} />
            <p className={styles.border__left}>*** Проект экологической политики разработан в рамках изучения дисциплины «Экологический менеджмент и экологическое аудирование» студентами, проводившими аудит территории внутреннего двора группы учебных корпусов СамГТУ (главного, первого и седьмого).</p>
            <p className={styles.border__left}>Аудиторы-экологи студенты СамГТУ (IV-НТФ-17): А.А. Нараева, Е.П. Истомина, В.А. Коваленко, А.О. Гурьянова</p>
        </>
    )
} 

export default EcopoliticPage