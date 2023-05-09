import styles from './ContactsPage.module.scss'
import cn from 'classnames'
import { useResize } from '../../../helpers/useResize'
import { ReactComponent as VKIcon } from './assets/vk.svg'
import { ReactComponent as TelegramIcon } from './assets/telegram.svg'
import { useState, useRef, useEffect } from 'react'
import { Modal } from '../../../components/index'
import { backend_mailer_url } from '../../../api'

export const ContactsPage = () => {
    useEffect(() => social.current.scrollIntoView({ behavior: 'smooth', block: 'center' }), [])

    const url = `${backend_mailer_url}/register`
    const [modal, setModal] = useState({
        message: '',
        status: '',
        isModalActive: false,
    })
    const date = new Date()
    const social = useRef()

    const initialState = {
        date: new Intl.DateTimeFormat('ru-Ru').format(date),
        name: "",
        fullname: "",
        sername: "",
        email: "",
        phone: "",
        work: "",
        message: "",
    }
    const [mailerState, setMailerState] = useState(initialState)
    const [isValid, setValid] = useState(
        {
            fullname: false,
            email: false,
            work: false,
        }
    )

    function handleStateChangeWithValidation(e) {
        if (e.target.value.length <= 1) {
            setValid({
                ...isValid,
                [e.target.name]: false,
            })
        }
        if (e.target.value.length > 1) {
            setValid({
                ...isValid,
                [e.target.name]: true,
            })
        }
        setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    function handleStateChangeWithEmailValidation(e) {
        function isEmail(email) {
            return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email);
        }
        if (isEmail(e.target.value.toLowerCase())) {
            setValid({
                ...isValid,
                [e.target.name]: true,
            })
        }
        if (!isEmail(e.target.value.toLowerCase())) {
            setValid({
                ...isValid,
                [e.target.name]: false,
            })
        }
        setMailerState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const submitEmail = async (e) => {
        if (mailerState.fullname.length < 2) {
            setModal({
                status: 'false',
                isModalActive: true,
                message: "Необходимо заполнить форму"
            })
            setTimeout(() => {
                setModal({
                    status: '',
                    isModalActive: false,
                    message: ""
                })
            }, [5000])
            return
        }
        e.preventDefault()
        await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ mailerState }),
        })
            .then((res) => res.json())
            .then(async (res) => {
                const resData = await res;
                if (resData.status === "success") {
                    setModal({
                        status: 'true',
                        isModalActive: true,
                        message: "Заявка отправлена на обработку"
                    })
                    setTimeout(() => {
                        setModal({
                            status: '',
                            isModalActive: false,
                            message: ""
                        })
                    }, [5000])
                } else if (resData.status === "error") {
                    setModal({
                        status: 'false',
                        isModalActive: true,
                        message: "Произошла ошибка при отправке"
                    })
                    setTimeout(() => {
                        setModal({
                            status: '',
                            isModalActive: false,
                            message: ""
                        })
                    }, [5000])
                }
            })
            .then(() => {
                setMailerState(initialState)
            })
            .catch(() => {
                setModal({
                    status: 'false',
                    isModalActive: true,
                    message: "Произошла ошибка при отправке"
                })
                setTimeout(() => {
                    setModal({
                        status: '',
                        isModalActive: false,
                        message: ""
                    })
                }, [5000])
            })
    }

    return (
        <>
            <span className={styles.title} ref={social}>Экоклуб "Жизнь" СамГТУ в социальных сетях</span>
            <br />
            <div className={styles.socialImageContainer}>
                {!useResize().isScreenSm ? null :
                    <div className={cn(styles.images)}>
                        <img src={require('./assets/social.webp')} alt="social-samgtu" />
                    </div>}
                <div className={cn(styles.images)}>
                    <img src={require('./assets/social2.webp')} alt="social-samgtu" />
                </div>
                <div className={cn(styles.images, styles.hidden)}>
                    <img src={require('./assets/social3.webp')} alt="social-samgtu" />
                </div>
            </div>

            <div className={styles.social}>
                <div className={styles.socialContainer}>
                    <VKIcon />
                    <a href="https://vk.com/eco_samgtu" target='_blanc'>Экологический клуб СамГТУ</a>
                </div>
                <div className={styles.socialContainer}>
                    <TelegramIcon className={styles.border} />
                    <a href="https://web.telegram.org/k/#@eco_samgtu" target='_blanc'>Эколклуб "Жизнь" СамГТУ</a>
                </div>
                <div className={styles.socialContainer}>
                    <VKIcon />
                    <a href="https://vk.com/samgtu_officiall" target='_blanc'>Самарский политех официальный</a>
                </div>
                <div className={styles.socialContainer}>
                    <VKIcon />
                    <a href="https://vk.com/ovr.samgtu" target='_blanc'>Студенческая жизнь СамГТУ</a>
                </div>
            </div>

            <form className={styles.formContainer}>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>Форма для вступления в экоклуб</legend>
                    <input className={cn(styles.hidden)}
                        type='hidden'
                        value={mailerState.name}
                        name='name'
                    />
                    <div className={styles.inputContainer}>
                        <input className={cn(styles.input, {
                            [styles.error]: !isValid.fullname
                        })}
                            required='required'
                            autoComplete="off"
                            placeholder='Введите имя'
                            title='Введенное имя должно содержать не менее 2-ух символов'
                            onChange={handleStateChangeWithValidation}
                            name="fullname"
                            value={mailerState.fullname}
                        />
                        <span className={styles.text}>Имя *</span>
                        <span className={styles.line}></span>
                    </div>

                    <div className={styles.inputContainer}>
                        <input className={styles.input}
                            required='required'
                            autoComplete="off"
                            placeholder='Введите фамилию'
                            onChange={handleStateChangeWithValidation}
                            name="sername"
                            value={mailerState.sername}
                        />
                        <span className={styles.text}>Фамилия</span>
                        <span className={styles.line}></span>
                    </div>

                    <div className={styles.inputContainer}>
                        <input className={cn(styles.input, {
                            [styles.error]: !isValid.email
                        })}
                            required='required'
                            autoComplete="off"
                            placeholder='Введите email-адрес'
                            title='Введенный адрес должен содержать символов "@"'
                            onChange={handleStateChangeWithEmailValidation}
                            name="email"
                            value={mailerState.email}
                        />
                        <span className={styles.text}>Адрес электронной почты *</span>
                        <span className={styles.line}></span>
                    </div>

                    <div className={styles.inputContainer}>
                        <input className={styles.input}
                            required='required'
                            autoComplete="off"
                            placeholder='Введите номер телефона'
                            onChange={handleStateChangeWithValidation}
                            name="phone"
                            value={mailerState.phone}
                        />
                        <span className={styles.text}>Телефон</span>
                        <span className={styles.line}></span>
                    </div>

                    <div className={styles.inputContainer}>
                        <input className={cn(styles.input, {
                            [styles.error]: !isValid.work
                        })}
                            required='required'
                            autoComplete="off"
                            placeholder='Введите место работы / учебы'
                            title='Обязательное поле для заполнения'
                            onChange={handleStateChangeWithValidation}
                            name="work"
                            value={mailerState.work}
                        />
                        <span className={styles.text}>Место работы / учебы *</span>
                        <span className={styles.line}></span>
                    </div>

                    <div className={styles.inputContainer}>
                        <input className={styles.input}
                            required='required'
                            autoComplete="off"
                            placeholder='Введите комментарий'
                            onChange={handleStateChangeWithValidation}
                            name="message"
                            value={mailerState.message}
                        />
                        <span className={styles.text}>Комментарий</span>
                        <span className={styles.line}></span>
                    </div>

                    {mailerState.fullname != '' && isValid.fullname
                        && mailerState.email != '' && isValid.email
                        && mailerState.work != '' && isValid.work ?
                        <button
                            className={styles.submit}
                            onClick={
                                submitEmail
                            }>Отправить</button>
                        :
                        <button
                            className={styles.unsubmit}>Вступить</button>}
                    <Modal message={modal.message} isModalActive={modal.isModalActive} modal='sent' successful={modal.status} />
                </fieldset>
            </form>
        </>
    )
} 