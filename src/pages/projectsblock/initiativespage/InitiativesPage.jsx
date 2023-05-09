import styles from './InitiativesPage.module.scss'
import cn from 'classnames'
import { useState, useRef, useEffect } from 'react'
import { Modal } from '../../../components/index'
import { ReactComponent as PlusIcon } from './assets/plus.svg'
import { ReactComponent as CloseIcon } from './assets/close.svg'
import { ReactComponent as EmailIcon } from './assets/email.svg'
import { ReactComponent as PhoneIcon } from './assets/phone.svg'
import initiativesList from './initiativesList.json'
import {backend_mailer_url} from '../../../api'

export const InitiativesPage = () => {
    const ref = useRef()

    const url = `${backend_mailer_url}/initiatives`

    const [activeForm, setActiveForm] = useState(false)
    const [modal, setModal] = useState({
        message: '',
        status: '',
        isModalActive: false,
    })

    const date = new Date()

    const initialForm = {
        date: new Intl.DateTimeFormat('ru-Ru').format(date),
        name: "",
        fullname: "",
        sername: "",
        email: "",
        phone: "",
        initiatives: "",
        message: "",
    }

    const [initiativesState, setinitiativesState] = useState(initialForm)
    const [isValid, setValid] = useState(
        {
            fullname: false,
            email: false,
            phone: false,
            initiatives: false,
            message: false,
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
        setinitiativesState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    function handleStateChangeWithinItiativesValidation(e) {
        if (e.target.value.length <= 5) {
            setValid({
                ...isValid,
                [e.target.name]: false,
            })
        }
        if (e.target.value.length > 5) {
            setValid({
                ...isValid,
                [e.target.name]: true,
            })
        }
        setinitiativesState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
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
        setinitiativesState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const submitEmail = async (e) => {
        e.preventDefault()
        await fetch(`${url}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ initiativesState }),
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
                setinitiativesState(initialForm)
                setActiveForm(false)
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

    useEffect(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [])

    return (
        <>
            <span className={styles.title} ref={ref}>Инициативы</span>
            <br />
            <div className={styles.addBtn}
                onClick={() => setActiveForm(true)}
            ><PlusIcon /><span>Добавить инициативу </span></div>
            <br />

            {initiativesList.map((el, index) =>
                <div className={styles.initiativesContainer} key={el.description}>
                    <div className={styles.initiative}>
                        <span className={styles.number}>{index + 1}</span>
                        <br />
                        <p>Название инициативы: &nbsp;<span className={styles.textInitiative}>{el.name}</span></p>
                        <p>Описание инициативы: &nbsp;<span className={styles.textInitiative}>{el.description}</span></p>
                        <p>Состояние на дату регистрации: &nbsp;<span className={styles.textInitiative}>{el.status}</span></p>
                        <p>Автор инициативы (ФИО): &nbsp;<span className={styles.textInitiative}>{el.author}</span></p>
                        <p>Подразделение / Должность: &nbsp;<span className={styles.textInitiative}>{el.department}</span></p>
                        <div className={styles.contacts}>Контакты:
                            {el.contacts[0] ?
                                <p className={styles.phone}><PhoneIcon /> &nbsp;{el.contacts[0]}</p> : null}
                            {el.contacts[1] ?
                                <p className={styles.email}><EmailIcon /> &nbsp;{el.contacts[1]}</p> : null}
                        </div>
                        <p className={styles.textInitiative}>Дата регистрации инициативы: &nbsp;<span className={styles.textInitiative}>{el.date}</span></p>
                        <p >Возможность публикаци: &nbsp;<span className={styles.textInitiative}>{el.published}</span></p>
                    </div>
                </div>
            )}

            <div className={cn(styles.shadow, {
                [styles.active]: activeForm
            })}
                onClick={() => {
                    setinitiativesState(initialForm)
                    setActiveForm(false)
                }}
            >
                <form className={cn(styles.formContainer, {
                    [styles.active]: activeForm
                })}>
                    <fieldset className={styles.fieldset}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <legend className={styles.legend}>Регистрация инициатив</legend>
                        <input className={cn(styles.hidden)}
                            type='hidden'
                            name="name"
                            value={initiativesState.name}
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
                                value={initiativesState.fullname}
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
                                value={initiativesState.sername}
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
                                value={initiativesState.email}
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
                                value={initiativesState.phone}
                            />
                            <span className={styles.text}>Телефон</span>
                            <span className={styles.line}></span>
                        </div>

                        <div className={styles.inputContainer}>
                            <input className={cn(styles.input, {
                                [styles.error]: !isValid.initiatives
                            })}
                                required='required'
                                autoComplete="off"
                                placeholder='Введите название инициативы'
                                title='Обязательное поле для заполнения'
                                onChange={handleStateChangeWithinItiativesValidation}
                                name="initiatives"
                                value={initiativesState.initiatives}
                            />
                            <span className={styles.text}>Название инициативы *</span>
                            <span className={styles.line}></span>
                        </div>

                        <div className={styles.inputContainer}>
                            <input className={cn(styles.input, {
                                [styles.error]: !isValid.message
                            })}
                                required='required'
                                autoComplete="off"
                                placeholder='Введите описание инициативы'
                                title='Обязательное поле для заполнения'
                                onChange={handleStateChangeWithinItiativesValidation}
                                name="message"
                                value={initiativesState.message}
                            />
                            <span className={styles.text}>Описание инициативы *</span>
                            <span className={styles.line}></span>
                        </div>

                        {initiativesState.fullname != '' && isValid.fullname
                            && initiativesState.email != '' && isValid.email
                            && initiativesState.initiatives != '' && isValid.initiatives
                            && initiativesState.message != '' && isValid.message ?
                            <button
                                className={styles.submit}
                                onClick={
                                    submitEmail
                                }>Отправить</button>
                            :
                            <button
                                className={styles.unsubmit}>Отправить</button>
                        }
                        <CloseIcon className={styles.close}
                            onClick={() => {
                                setinitiativesState(initialForm)
                                setActiveForm(false)
                            }}
                        />
                        <Modal message={modal.message} isModalActive={modal.isModalActive} modal='sent' successful={modal.status} />
                    </fieldset>
                </form></div>
        </>
    )
} 