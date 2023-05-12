import styles from './OuractivitiesPage.module.scss'
import cn from 'classnames'
import { ReactComponent as DoubleArrowIcon } from './assets/doublearrow.svg'
import { Link } from "react-router-dom"

const OuractivitiesPage = () => {

    return <>
        <span className={styles.title__gray}>Наша деятельность</span>
        <span className={styles.title__orange}>Проектный центр</span>

        <div>
            <div className={styles.content__block__1}>
                <div className={styles.images}>
                    <img src={require('./assets/Mask-group9.png')} alt="eco-ouractivities" />
                </div>
                <div>
                    <span className={styles.sub__title__orange}>Экопросвещение</span>
                    <p>Экопросвещение связывает все действующие проекты. Нашей целью является увеличение вовлеченности с нейтрального уровня до уровня ответственности и инициативности не только обучающихся и сотрудников СамГТУ, но и жителей Самарской области, путем внедрения и проведениях различного вида мероприятий. Это разработка проектов, участие в субботниках и различных экологических акциях, образовательные лекции и семинары.</p>
                </div>
            </div>
            <div className={styles.content__block__2}>
                <div className={cn(styles.images, styles.order)}>
                    <img src={require('./assets/РСО.png')} alt="eco-ouractivities" />
                </div>
                <div>
                    <span className={styles.sub__title__orange}>Устойчивое развитие. РСО</span>
                    <p>Целью проекта является создание экосистемы по раздельному сбору отходов, уменьшение негативного воздействие на окружающую среду. Для этого производится анализ, внедрение и реализация системы Экологического менеджмента на базе СамГТУ.</p>
                </div>
            </div>
            <div className={styles.content__block__1}>
                <div className={styles.images}>
                    <img src={require('./assets/берег.png')} alt="eco-ouractivities" />
                </div>
                <div>
                    <span className={styles.sub__title__orange}>Укрепление береговой области</span>
                    <p>Сейчас берега рек в Самарской области претерпевают не самые лучшие времена, большинство обваливаются, что негативно сказывается на экосистеме рек и озёр, близлежащих объектах инфраструктуры, задавшись этим вопрос, мы пришли к тому, что просто необходимо начать укрепление береговой области за счет посадки многолетних растений в береговой зоне.</p>
                </div>
            </div>
            <div className={styles.content__block__2}>
                <div className={cn(styles.images, styles.order)}>
                    <img src={require('./assets/гербарий.png')} alt="eco-ouractivities" />
                </div>
                <div>
                    <span className={styles.sub__title__orange}>Гербарный фонд</span>
                    <p>Целью проекта является создание гербарного фонда и цифровой базы данных антропогенно нарушенных территорий Самарской области.</p>
                </div>
            </div>
            <div className={styles.content__block__1}>
                <div className={styles.images}>
                    <img src={require('./assets/газоны.png')} alt="eco-ouractivities" />
                </div>
                <div>
                    <span className={styles.sub__title__orange}>Чистый газон – Чистый город</span>
                    <p>Наверное в каждом городе России остро обстоит вопрос с чистотой газонов, да-да, сейчас речь пойдёт именно о владельцах собак. Их питомцы испоражняются на газонах в скверах и парках, что оказывает негативное воздействие на окружающую среду и внешний облик города, именно поэтому мы задумались над тем, а как же сделать наш город чище?</p>
                </div>
            </div>
            <div className={styles.content__block__2}>
                <div className={cn(styles.images, styles.order)}>
                    <img src={require('./assets/туризм.png')} alt="eco-ouractivities" />
                </div>
                <div>
                    <span className={styles.sub__title__orange}>ЭкоТуризм</span>
                    <p>Экологический туризм – это направление туризма, предполагающее посещение территорий, не затронутых антропогенным воздействием. В современных реалиях люди все больше времени проводят в социальных сетях. Что повышает необходимость привлечения внимание населения к природе и оказываемым на нее негативном воздействии. Экотуризм направлен на увеличение уровня готовности к охране окружающей среды и формирование экологического воспитания.</p>
                </div>
            </div>
            <div className={styles.content__block__1}>
                <div className={styles.images}>
                    <img src={require('./assets/дебаты.png')} alt="eco-ouractivities" />
                </div>
                <div>
                    <span className={styles.sub__title__orange}>ЭкоДебаты</span>
                    <p>В современном мире экология занимает особое место в развитии корпораций. Одним из самых востребованных качеств сотрудника постепенно становится экологическая компетентность. Компании и предприятия ищут всевозможные способы повышения этого параметра у работников, однако несмотря на существование огромного количества различных решений, эта задача по-прежнему требует больших финансовых и, что важнее, временных затрат.</p>
                </div>
            </div>
            <div className={styles.content__block__2}>
                <div className={cn(styles.images, styles.order)}>
                    <img src={require('./assets/сэм.png')} alt="eco-ouractivities" />
                </div>
                <div>
                    <span className={styles.sub__title__orange}>Цифровизация СЭМ</span>
                    <p>Проект направлен на создание информационной среды, позволяющей своевременно предоставлять данные о деятельности Университета в области экологического менеджмента.</p>
                </div>
            </div>
        </div>

        <div className={styles.join__us__container}>
            <span className={styles.title__gray}>Понравился какой-то проект?</span>
            <span className={styles.title__gray}>Есть предложения по реализации проектов?</span>
            <Link to='/initiatives'>
                <div className={styles.join__us__button}><DoubleArrowIcon />Заполнить анкету</div>
            </Link>
        </div>

        <div className={styles.volunteer_container}>
            <div></div>
            <div className={styles.volunteer_text__container}>
                <span className={styles.title__orange}>Волонтерский центр</span>
                <p className={styles.volunteer_text}>Наши ребята принимают активное участие в мероприятиях различного масштаба:
                    всероссийские акции, высадка деревьев, помощь приютам для животных, выпуск мальков в
                    водоем для увеличения популяции рыб, уборка природных территорий Самарского региона,
                    посещение форумов, мастер-классов и тренингов. Так же мы помогаем в организации крупных
                    проектов нашей страны, как например: V Международный съезд региональных операторов,
                    Всероссийская студенческая Весна — 2022.

                    Волонтерский центр организовывает в Самарском политехе мероприятия, направленные на
                    повышение экологической ответственностии студентов: сбор макулатуры, SwopShop, помощь
                    приютам, сортировка отходов, проведение экологических лекций, квизов и соревнований.</p>
            </div>
            <div></div>
        </div>

        <div className={styles.content__block__3}>
            <div>
                <span className={styles.sub__title__orange}>Пресс-центр</span>
                <p>Возможность погрузиться в атмосферу
                    экологического клуба в любой момент и
                    из любой точки земного шара.

                    Этот проект направлен на экологическое
                    просвещение не только студентов и школьников,
                    но и всех пользователей социальных сетей,
                    заинтересованных в данной теме.</p>
            </div>
            <div className={cn(styles.images, styles.order)}>
                <img src={require('./assets/Group-16-1.png')} alt="eco-ouractivities" />
            </div>
        </div>

        <div className={styles.content__block__4}>
            <div>
                <span className={styles.sub__title__orange}>Кейс</span>
                <p>Для обучающихся нашего университета
                    был разработан план прохождения
                    учебной практики. Ребята в рамках данной
                    дисциплины занимаются: проведением
                    образовательных мероприятий как внутри-
                    вузовских, так и выездных, а так же
                    проводят субботники и экологические
                    акции.</p>
                <p>План мероприятий выходит в Telegram
                    каждое первое число месяца.</p>
            </div>
            <div>
                <span className={styles.sub__title__orange}>Биржа проектов</span>
                <p>В личном кабинете СамГТУ Вы сможете
                    ознакомиться со всеми действующими
                    проектами нашего Университета, в том
                    числе и с теми, которые курирует наш
                    ЭкоКлуб «Жизнь».</p>
                <p>Благодаря Бирже проектов Вы сможете
                    стать активистом СамГТУ и заработать
                    отличную оценку!</p>
            </div>
        </div>
    </>
}

export default OuractivitiesPage