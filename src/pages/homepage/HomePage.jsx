import styles from './HomePage.module.css'
import cn from 'classnames'
import { useState } from 'react'
import { ReactComponent as QuoteIcon } from './assets/quote.svg'
import { ReactComponent as DoubleArrowIcon } from './assets/doublearrow.svg'
import { ReactComponent as ArrowIcon } from './assets/arrow.svg'
import { ReactComponent as EarthIcon } from './assets/earth.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const HomePage = () => {
    const initialState = {
        mission: false,
        principles: false,
        traditions: false,
        performanceIndicator: false,
        expertGroups: false,
    }
    const [isActiveMenu, setActiveMenu] = useState({
        ...initialState,
    })

    const setActiveMenuHandler = (e) => {
        if (isActiveMenu[e.target.dataset.tag] === true) {
            e.target.parentNode.nextSibling.classList.remove(e.target.parentNode.nextSibling.classList[1])
            return setTimeout(() => setActiveMenu({
                ...isActiveMenu,
                [e.target.dataset.tag]: false,
            }
            ), [500])
        }
        setActiveMenu({
            ...isActiveMenu,
            [e.target.dataset.tag]: true
        })
    }

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
    const motionPVariants = {
        hidden: {
            scale: 0.9,
            y: 50,
        },
        visible: {
            scale: 1,
            y: 0,
        },
    }
    const motionScaleVariants = {
        hidden: {
            scale: 0.95,
        },
        visible: {
            scale: 1,
        },
    }

    return (
        <>
            <span
                className={styles.title}>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0, }} variants={motionTitleVariants}
                >Пора </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.2, }} variants={motionTitleVariants}
                >задуматься </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.4, }} variants={motionTitleVariants}
                >о нашем </motion.span>
                <motion.span
                    initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0.6, }} variants={motionTitleVariants}
                >будущем</motion.span>
            </span>

            <motion.p className={styles.borderLeft}
                initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0, }} variants={motionScaleVariants}
            >Мы сами создаём свой мир! Именно поэтому в наших интересах сделать его лучше. Для этого мы должны интересоваться экологией, развивать её и активно участвовать в Экологическом просвещении.</motion.p>
            <motion.div
                initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0, }} variants={motionScaleVariants}
            >
                <div className={styles.images}            >
                    <img src={require('./assets/home.webp')} alt="eco-samgtu" />
                </div>

                <div>
                    <span className={styles.subTitle}>"Живая вода"</span>
                    <p className={styles.borderLeft}>В журнале "Живая вода" был опубликован очерк об истории и развитии экологического клуба СамГТУ. Профессор СамГТУ, сопредседатель экоклуба, координатор групп "Ноль отходов", "Экологический аудит", Гладышев Николай Григорьевич проводит экскурс в историю зарождения экоклуба, зарождения студенческого волонтерского движения, которое, безусловно, преобразило отношение сотрудников и учащихся СамГТУ к окружающей среде.</p>
                    <p className={styles.borderLeft}>Ознакомиться с текстом статьи можно <a href="https://vk.com/wall-151940893_3568" target='_blank'>по ссылке</a>.</p>
                </div>
            </motion.div>


            <motion.div
                initial={'hidden'} animate={'visible'} transition={{ duration: 1, delay: 0, }} variants={motionScaleVariants}
            >
                <QuoteIcon />
                <span className={styles.quoteTitle}>Нашим студентам важно слышать, что направление, которое они выбрали, востребовано и почетно. Развитие экологического движения в Самарской области - это миссия СамГТУ как опорного вуза!</span>
                <QuoteIcon className={styles.quoteTransform} />
                <br className={styles.devider} />
                <br />
                <span className={styles.quote}>Николай ГЛАДЫШЕВ, профессор СамГТУ</span>
            </motion.div>
            <hr className={styles.devider} />

            <div className={styles.images2017}>
                <img src={require('./assets/ecoyear2017.webp')} alt="eco-year" />
            </div>
            <div className={styles.infoContainer}>
                <span className={styles.text}>2017 год объявлен в России Годом экологии</span>
                <a href="https://rpn.gov.ru/regions/36/news/2017_god_obyavlen_v_rossii_godom_ekologii-64099.html" target='_blank'>
                    <div className={styles.seemore}><DoubleArrowIcon />узнать больше</div>
                </a>
            </div>
            <hr className={styles.devider} />
            <br />
            <span className={styles.subTitle2}>Экологический Клуб Самарского государственного технического университета.</span>
            <br />
            <br />

            <div>
                <div className={styles.container}
                    onClick={(e) => setActiveMenuHandler(e)}
                >
                    <ArrowIcon data-tag='mission' className={cn(styles.arrow, {
                        [styles.arrowRotate]: isActiveMenu.mission
                    })} />
                    <span data-tag='mission' className={styles.accordion}>Миссия</span>
                </div>
                <span className={cn(styles.opener, {
                    [styles.activeMenu]: isActiveMenu.mission
                })}>
                    {isActiveMenu.mission ?
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.05, }} variants={motionPVariants}
                        ><EarthIcon />Экологический клуб создает пространство для совместных действий студентов и сотрудников, а также предоставляет ресурсы для всех заинтересованных сторон актуализировать свое видение более экологичного функционирования университета и распространения инициатив во внешних сферах его влияния сегодня и в будущем.</motion.p>
                        : null}
                </span>
            </div>

            <div>
                <div className={styles.container}
                    onClick={(e) => setActiveMenuHandler(e)}
                >
                    <ArrowIcon data-tag='principles' className={cn(styles.arrow, {
                        [styles.arrowRotate]: isActiveMenu.principles
                    })} />
                    <span data-tag='principles' className={styles.accordion}>Принципы работы клуба</span>
                </div>
                <span className={cn(styles.opener, {
                    [styles.activeMenu]: isActiveMenu.principles
                })}>
                    {isActiveMenu.principles ? <>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.05, }} variants={motionPVariants}><EarthIcon />Ориентиры выбора стратегии и тактики Экоклуба – общемировые подходы в экологическом менеджменте;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.1, }} variants={motionPVariants}><EarthIcon />Международные стандарты ISO 14001, ISO 19011;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.15, }} variants={motionPVariants}><EarthIcon />Использование наилучших практик "Best Practices" (BP) и наилучших доступных технологий “Best Available Technology” (BAT);</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.2, }} variants={motionPVariants}><EarthIcon />ГОСТ Р 54097-2010 Ресурсосбережение. Наилучшие доступные технологии. Методология идентификации;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.25, }} variants={motionPVariants}><EarthIcon />Деятельность Экоклуба осуществляется на добровольной основе его участников;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.3, }} variants={motionPVariants}><EarthIcon />Участником работы Экологического Клуба СамГТУ может быть любой гражданин Российской Федерации;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.35, }} variants={motionPVariants}><EarthIcon />Председателем клуба может быть только студент;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.4, }} variants={motionPVariants}><EarthIcon />Преподаватель дисциплины “Экологический менеджмент и экологическое аудирование” обязан быть сопредседателем Экоклуба уже по статусу ведущего эту дисциплину;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.45, }} variants={motionPVariants}><EarthIcon />Кураторы студенческих групп, обучающихся по экологическим специальностям, автоматически становятся ответственными за привлечение студентов этих групп к работе Экоклуба;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.5, }} variants={motionPVariants}><EarthIcon />К работе Экоклуба привлекаются студенты и сотрудники всех факультетов, а также администрации университета;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.55, }} variants={motionPVariants}><EarthIcon />Внутриуниверситетская деятельность Экоклуба координируется с экологическим подразделением администрации;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.6 }} variants={motionPVariants}><EarthIcon />Проводниками экологической политики клуба на факультетах являются преподаватели, ведущие дисциплину “Экология” на этих факультетах;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.65, }} variants={motionPVariants}><EarthIcon />Результаты деятельности Экоклуба оцениваются ежегодно количественными показателями по двум направлениям: 1) внутренняя активность, 2) внешняя активность;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.7, }} variants={motionPVariants}><EarthIcon />Все инициативы участников Экоклуба регистрируются на сайте с обязательным сохранением авторства и даты;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.75, }} variants={motionPVariants}><EarthIcon />Студенты, изучающие дисциплину “Экологический менеджмент и экологическое аудирование” автоматически становятся членами Экоклуба; хозяйственные процессы университета становятся учебной моделью (лабораторной площадкой) организации, реализующей положения международных стандартов ISO 14001, ISO 19011;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.8, }} variants={motionPVariants}><EarthIcon />Главной стратегической информационной площадкой, освещающей деятельность Экоклуба, является его сайт на портале СамГТУ;</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.85, }} variants={motionPVariants}><EarthIcon />Активисты Экоклуба не вправе использовать свою волонтерскую работу в качестве индульгенции на сессии.</motion.p></> : null}</span>
            </div>

            <div>
                <div className={styles.container}
                    onClick={(e) => setActiveMenuHandler(e)}
                >
                    <ArrowIcon data-tag='traditions' className={cn(styles.arrow, {
                        [styles.arrowRotate]: isActiveMenu.traditions
                    })} />
                    <span data-tag='traditions' className={styles.accordion}>Традиции клуба</span>
                </div>
                <span className={cn(styles.opener, {
                    [styles.activeMenu]: isActiveMenu.traditions
                })}>
                    {isActiveMenu.traditions ? <>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.05, }} variants={motionPVariants}
                        ><EarthIcon />Преемственность участников Экоклуба осуществляется по по схеме: 1-й курс - начало активности, 2-й курс - максимум активности, 3-й курс - переориентация на тему выпускной квалификационной работы (ВКР) при сохранении посильного участия в работе Экоклуба, 4-й курс - сосредоточение на ВКР с участием в работе Экоклуба преимущественно в рамках дисциплины “Экологический менеджмент и экологическое аудирование”.</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.1, }} variants={motionPVariants}
                        ><EarthIcon />Студенты-активисты Экоклуба, обучающиеся по специальностям, в учебные планы которых включена дисциплина “Экологический менеджмент и экологическое аудирование”, и доказавшие своими делами компетенцию в реализации положений стандартов ISO 14001, ISO 19011, получают зачет по этой дисциплине экстерном и право свободного посещения занятий по этой дисциплине.</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.15, }} variants={motionPVariants}
                        ><EarthIcon />Обязательное поздравление с 8 Марта сотрудниц экологического отдела администрации СамГТУ.</motion.p>
                    </> : null}</span>
            </div>

            <div>
                <div className={styles.container}
                    onClick={(e) => setActiveMenuHandler(e)}
                >
                    <ArrowIcon data-tag='performanceIndicator' className={cn(styles.arrow, {
                        [styles.arrowRotate]: isActiveMenu.performanceIndicator
                    })} />
                    <span data-tag='performanceIndicator' className={styles.accordion}>Индикаторы результативности работы экоклуба</span>
                </div>
                <span className={cn(styles.opener, {
                    [styles.activeMenu]: isActiveMenu.performanceIndicator
                })}>
                    {isActiveMenu.performanceIndicator ? <>
                        <motion.p className={styles.extendSubTitle}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.05, }} variants={motionPVariants}
                        >Внутренние индикаторы</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.1, }} variants={motionPVariants}
                        ><EarthIcon />Количество контейнеров для сбора батареек на территории университета в результате усилий участников Экоклуба.</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.15, }} variants={motionPVariants}
                        ><EarthIcon />Количество помещений (площадок), получивших внутренний сертификат “Зеленый офис”.</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.2, }} variants={motionPVariants}
                        ><EarthIcon />Количество видеофильмов (заимствованных из открытых источников), продемонстрированных на общедоступных мониторах университета.</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.25, }} variants={motionPVariants}
                        ><EarthIcon />Количество видеофильмов собственного производства, продемонстрированных на общедоступных мониторах университета.</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.3, }} variants={motionPVariants}
                        ><EarthIcon />Количество видов отходов, для которых начат раздельный сбор.</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.35, }} variants={motionPVariants}
                        ><EarthIcon />Количество точек с экоплакатами на территории университета.</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.4, }} variants={motionPVariants}
                        ><EarthIcon />Количество батареек, переданных для переработки, кг/год.</motion.p>
                        <motion.p className={styles.extendSubTitle}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.45, }} variants={motionPVariants}
                        >Внешние индикаторы</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.5, }} variants={motionPVariants}
                        ><EarthIcon />Перечень волонтерских экологических мероприятий любого уровня с участием Экоклуба.</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.55, }} variants={motionPVariants}
                        ><EarthIcon />Перечень публикаций о работе Экоклуба в любых изданиях.</motion.p></> : null}
                </span>
            </div>

            <div>
                <div className={styles.container}
                    onClick={(e) => setActiveMenuHandler(e)}
                >
                    <ArrowIcon data-tag='expertGroups' className={cn(styles.arrow, {
                        [styles.arrowRotate]: isActiveMenu.expertGroups
                    })} />
                    <span data-tag='expertGroups' className={styles.accordion}>Экспертно-аналитические группы и функциональные группы экоклуба</span>
                </div>
                <span className={cn(styles.opener, {
                    [styles.activeMenu]: isActiveMenu.expertGroups
                })}>
                    {isActiveMenu.expertGroups ? <>
                        <motion.p className={styles.extendSubTitle}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.05, }} variants={motionPVariants}
                        >1. Группа внутреннего экологического аудита СамГТУ</motion.p>
                        <motion.p className={styles.extendSubTitle}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.1, }} variants={motionPVariants}
                        >2. Группа “Ноль отходов”:</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.15, }} variants={motionPVariants}
                        ><EarthIcon />лампы ртутные, люминесцентные, утратившие потребительские свойства</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.2, }} variants={motionPVariants}
                        ><EarthIcon />ПЭТ-бутылки</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.25, }} variants={motionPVariants}
                        ><EarthIcon />батареи и аккумуляторы отработавшие</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.3, }} variants={motionPVariants}
                        ><EarthIcon />макулатура</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.35, }} variants={motionPVariants}
                        ><EarthIcon />картриджи печатающих устройств отработанные</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.4, }} variants={motionPVariants}
                        ><EarthIcon />прочие отходы.</motion.p>
                        <motion.p className={styles.extendSubTitle}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.45, }} variants={motionPVariants}
                        >3. Группа значимых экологических аспектов СамГТУ (кроме отходов):</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.5, }} variants={motionPVariants}
                        ><EarthIcon />водосбережение и сточные воды</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.55, }} variants={motionPVariants}
                        ><EarthIcon />опасные химикаты</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.6, }} variants={motionPVariants}
                        ><EarthIcon />выбросы в атмосферу</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.65, }} variants={motionPVariants}
                        ><EarthIcon />энергосбережение.</motion.p>
                        <motion.p className={styles.extendSubTitle}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.7, }} variants={motionPVariants}
                        >4. Группа “Лучшие практики” (Выявление лучших практик экологизации внутрихозяйственной деятельности российских и зарубежных университетов)</motion.p>
                        <motion.p className={styles.extendSubTitle}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.75, }} variants={motionPVariants}
                        >5. Группа открытой информации:</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.8, }} variants={motionPVariants}
                        ><EarthIcon />привлечение к работе в Экоклубе студентов и сотрудников всех факультетов университета</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.85, }} variants={motionPVariants}
                        ><EarthIcon />поддержка сайта Экоклуба</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.9, }} variants={motionPVariants}
                        ><EarthIcon />подготовка фотовидеоматериалов, телевидение (университета)</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 0.95, }} variants={motionPVariants}
                        ><EarthIcon />размещение готовых материалов на сайте и консультирование по требованиям к размещаемым материалам</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 1.0, }} variants={motionPVariants}
                        ><EarthIcon />добровольная экологическая отчетность СамГТУ</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 1.05, }} variants={motionPVariants}
                        ><EarthIcon />ведение экологической хроники университета</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 1.1, }} variants={motionPVariants}
                        ><EarthIcon />ведение дубликатов официальной экологической документации СамГТУ для использования в работе Экоклуба и учебном процессе.</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 1.15, }} variants={motionPVariants}
                        ><EarthIcon />информирование о планах мероприятий экологических организаций и ведомств в целях возможного партнерства</motion.p>
                        <motion.p className={styles.extendP}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 1.2, }} variants={motionPVariants}
                        ><EarthIcon />работа по экологическому просвещению в школах</motion.p>
                        <motion.p className={styles.extendSubTitle}
                            initial={'hidden'} animate={'visible'} transition={{ duration: 0.2, delay: 1.25, }} variants={motionPVariants}
                        >6. Группа “Lingvo&Environmental” (переводы с иностранных языков по актуальной экологической тематике).</motion.p></> : null}
                </span>
            </div>

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