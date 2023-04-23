import styles from './EcomanagePage.module.scss'
import cn from 'classnames'
import { motion } from 'framer-motion'

export const EcomanagePage = () => {

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

    return <>
        <span className={styles.title__gray}>
            <motion.span
                initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0, }} variants={motionTitleVariants}>
                Экологический </motion.span>
            <motion.span
                initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.3, }} variants={motionTitleVariants}>
                менеджмент</motion.span>
        </span>
        <div className={styles.content__block__1}>
            <div>
                <span className={styles.sub__title__orange}>Экологический менеджмент что это?</span>
                <p>Это специальная система управления процессом,
                    направленным на сохранение качества окружающей среды,
                    обеспечение нормативных социальных, экологических и
                    экономических параметров.</p>
                <span className={styles.sub__title__orange}>СЭМ (Система экологического менеджмента)</span>
                <p>Это современный подход к учету приоритетов охраны
                    окружающей среды при планировании и осуществлении
                    деятельности организации, неотъемлемая составная часть
                    современной системы управления ею.</p>
            </div>
            <div className={styles.images}>
                <img src={require('./assets/Mask-group.png')} alt="ecomanage" />
            </div>
        </div>

        <div className={styles.content__block__2}>
            <div className={cn(styles.images, styles.order)}>
                <img src={require('./assets/eyJ-l5zgfSY-11.webp')} alt="ecomanage" />
            </div>
            <div>
                <span className={styles.sub__title__orange}>О сертификации системы экологического менеджмента СамГТУ:</span>
                <p>В рамках инспекционного контроля системы менеджмента качества
                    27-28 сентября 2022 г. состоялся инспекционный контроль
                    действующей в СамГТУ системы менеджмента качества (СМК). По
                    результатам проверки принято решение подтвердить действие
                    записи в Реестре объектов оценки соответствия, прошедших
                    процедуру сертификации. В рамках инспекционного контроля
                    работники службы менеджмента качества при поддержке сектора
                    экологии и Экоклуба подтвердили соответствие внедренной
                    системы экологического менеджмента требованиям ГОСТ Р ИСО
                    14001-2016 применительно к деятельности в области среднего
                    общего, среднего профессионального, высшего и дополнительного
                    профессионального образования, научных исследований и
                    разработок.</p>
            </div>
        </div>

        <div className={styles.content__block__3}>
            <div>
                <span className={styles.sub__title__orange}>В рамках СЭМ экологический клуб «Жизнь» начал свою работу с малого.</span>
                <p>Наша команда разработала специальные инструкции, в которых рассказывается о том какие действия приводят к чрезвычайным ситуациям и как стоит поступить, если ЧС все же произошло, ознакомиться с инструкциями можно ниже:
                </p>
            </div>
            <div className={styles.instructions}>
                <img src={require('./assets/Group-15.webp')} alt="ecomanage" />
            </div>
        </div>
    </>
}