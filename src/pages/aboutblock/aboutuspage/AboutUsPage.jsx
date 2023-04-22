import styles from './AboutUsPage.module.scss'
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
                className={styles.title__gray}>
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

            <p className={styles.border__left}>Добро пожаловать в сообщество активных ребят, которые могут проявить себя не только в волонтёрской, но и в научной сферах деятельности. Вместе с клубом ты сможешь воплотить все свои смелые и прогрессивные идеи в жизнь!</p>
            <p className={styles.border__left}>Неравнодушные студенты и преподаватели, идеи и желание дать чуточку добра окружающим - вот КТО МЫ!</p>
            <hr className={styles.devider} />
            <span className={styles.sub__title__gray}>Полное название клуба - Экологический Клуб "Жизнь" Самарского государственного технического университета.</span>
            <span className={styles.sub__title__gray}>Сокращенное название - Экоклуб СамГТУ "Жизнь"</span>
            <br />

            <span className={styles.sub__title__orange}>Истоки «Жизни»</span>
            <p className={styles.border__left}>Экологический Клуб СамГТУ «Жизнь» был образован в 2009 году инициативой
                студентов под руководством доцента и профессора кафедры «Химическая технология и
                промышленная экология» Гладышева Николая Григорьевича. Цель – организация
                пространства для взаимодействия студентов и сотрудников университета с целью
                распространения инициатив, популяризации вопросов экологии и создания
                информационной платформы для открытого диалога всех заинтересованных лиц.</p>
            <p className={styles.border__left}>Первоначальным достижением ЭкоКлуба была разработка студентами проекта
                экологической политики университета. А в 2010 году был принят устав ЭкоКлуба.
                Однако с выпуском основной части активистов деятельность клуба полностью
                ограничилась рамками дисциплины «Экологический менеджмент и экологическое
                аудирование».</p>

            <span className={styles.sub__title__orange}>«Возрождение»</span>
            <p className={styles.border__left}>В декабре 2016 года началась «реанимация» деятельности ЭкоКлуба. Были организованы
                собрания для студентов, поездки в школы, где ребята рассказывали про экологию, добычу
                и переработку нефти, о том, какой вред может быть нанесен окружающей среде при
                аварийных ситуациях, о раздельном сборе мусора, о важности заботы об окружающей
                среде.</p>
            <p className={styles.border__left}>Одной из выпускниц кафедры «Химическая технология и промышленная экология»
                Ефимовой Надеждой была спроектирована и презентована первая версия компактора
                ПЭТ-бутылок. Были выстроены контакты с сотрудниками университета, владеющими
                конкретной информацией о внутрихозяйственной деятельности – специалистами отделов
                экологии, энергосбережения, бухгалтерии и др. Более того, студентами периодически
                проводился внутренний экологический аудит университета. Так при содействии ГК Эковоз
                в некоторых корпусах СамГТУ были установлены контейнеры для сбора использованных
                батареек и контейнеры для пластиковой тары ПЭТ.</p>
            <p className={styles.border__left}>Так как основная часть актива состояла из студентов-экологов 4 курсов, наблюдалась
                непостоянная динамика: активность резко падала, либо резко увеличивалась. И поэтому в
                какой-то момент деятельность в Экоклубе снова сошла на «нет».</p>

            <span className={styles.sub__title__orange}>С чистого листа</span>
            <p className={styles.border__left}>Во второй половине 2020 года было решено возобновить работу, но в новом формате и
                уже при поддержке проректора по развитию кадрового потенциала ФГБОУ ВО СамГТУ
                Франка Евгения Владимировича. В феврале 2021 года был выпущен обновленный устав,
                содержащий новые функции, принципы, приоритеты и цель – это решение актуальных
                вопросов, связанных с экологической безопасностью и сохранностью окружающей среды,
                установление и поддержание связи с органами власти в вопросах экологии,
                формирование студенческих инициатив. Был выполнен полный ребрендинг, и организация
                получила свое название «Жизнь».</p>

            <hr className={styles.devider} />
            <div className={styles.ul__container}>
                <div><span className={styles.sub__title2__gray}>Участие в Экоклубе это:</span>
                    <ul>
                        <li>Расширение кругозора;</li>
                        <li>Приобретение навыков организатора;</li>
                        <li>Приобретение новых знакомых;</li>
                        <li>Общение с интересными людьми;</li>
                        <li>Самореализация.</li>
                    </ul>
                </div>
                <div className={styles.ul__images}            >
                    <img src={require('./assets/802e0e6d-7ab3-39d7-7842-ad38521bcaac.webp')} alt="eco-samgtu" />
                </div>
            </div>

            <div className={styles.ul__container}>
                <div>
                    <span className={styles.sub__title2__gray}>Как вы можете нам помочь?</span>
                    <ul>
                        <li>Вступить в наш клуб и регулярно приходить на встречи;</li>
                        <li>Правильно сортировать отходы;</li>
                        <li>Помогать в организации мероприятий;</li>
                        <li>Читать наши статьи.</li>
                    </ul>
                </div>
                <div className={styles.ul__images}            >
                    <img src={require('./assets/14f5e8f7-92ed-dc1f-25cb-4f4eaec40351.webp')} alt="eco-samgtu" />
                </div>
            </div>

            <hr className={styles.devider} />
            <QuoteIcon />
            <span className={styles.quote__title}>Каждый имеет право на благоприятную окружающую среду, достоверную информацию о ее состоянии и на возмещение ущерба, причиненного его здоровью или имуществу экологическим правонарушением.</span>
            <QuoteIcon className={styles.quote__rotate__180} />
            <br className={styles.devider} />
            <br />
            <span className={styles.quote}>Ст. 42 Конституции РФ</span>
            <hr className={styles.devider} />

            <div className={styles.join__us}>
                <span className={styles.extend__title__white}>Готовы менять и меняться? Есть мысли и идеи, которые нужно воплотить в жизнь?</span>
                <Link to='/contacts'>
                    <div className={styles.join__us__button}><DoubleArrowIcon />Присоединяйтесь к НАМ!</div>
                </Link>
                <span className={styles.extend__title__white}>НАШЕ БУДУЩЕЕ - В НАШИХ РУКАХ!</span>
            </div>
        </>
    )
} 