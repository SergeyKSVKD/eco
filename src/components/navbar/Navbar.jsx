import styles from './Navbar.module.scss'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cn from 'classnames'

import { ReactComponent as AboutIcon } from './assets/about.svg'
import { ReactComponent as FavoritesIcon } from './assets/favorites.svg'
import { ReactComponent as HomeIcon } from './assets/home.svg'
import { ReactComponent as NewsIcon } from './assets/news.svg'
import { ReactComponent as ProjectIcon } from './assets/project.svg'
import { ReactComponent as MenuIcon } from './assets/menu.svg'

import { useResize } from '../../helpers/useResize'


export const Navbar = () => {
    const [isActiveMenuBurger, setActiveMenuBurger] = useState(false)

    const initial = {
        news: false,
        home: false,
        about: false,
        projects: false,
        useful: false,
    }
    const initialSub = {
        about: false,
        projects: false,
    }

    const subTitlesAbout = [
        { title: 'О нас', route: '/aboutus' },
        { title: 'Как связаться', route: '/contacts' },
        { title: 'Актив экоклуба', route: '/asset' },
    ]
    const subTitlesProject = [
        { title: 'Экологический менеджмент', route: '/ecomanage' },
        { title: 'Наша деятельность', route: '/ouractivities' },
        { title: 'Календарь событий', route: '/events' },
        { title: 'Экологическая политика', route: '/ecopolitic' },
        { title: 'Выбросы в атмосферу', route: '/airemissions' },
        { title: 'Инициативы', route: '/initiatives' },
    ]

    const about = []
    const project = []
    subTitlesAbout.forEach((el) => {
        about.push(el.route)
    })
    subTitlesProject.forEach((el) => {
        project.push(el.route)
    })

    const [isActiveMenu, setActiveMenu] = useState(
        {
            ...initial,
            home: true,
        }
    )
    const [isActiveSubmenu, setActiveSubmenu] = useState({ ...initialSub })

    function resetActiveSubMenu() {
        setActiveSubmenu({ ...initialSub })
        setActiveMenuBurger(false)
    }

    function backToPreviousActiveLink() {
        if (pathname === '/') {
            return setActiveMenu({
                ...initial,
                home: true,
            })
        }
        if (about.includes(pathname)) {
            return setActiveMenu({
                ...initial,
                about: true,
            })
        }
        if (project.includes(pathname)) {
            return setActiveMenu({
                ...initial,
                projects: true,
            })
        }
        setActiveMenu({
            ...initial,
            [pathname.slice(1, pathname.length)]: true,
        })
    }

    const { pathname } = useLocation()

    useEffect(() => {
        if (pathname === '/') {
            return setActiveMenu({
                ...initial,
                home: true,
            })
        }
        if (pathname === '/news') {
            return setActiveMenu({
                ...initial,
                news: true,
            })
        }
        if (pathname === '/useful') {
            return setActiveMenu({
                ...initial,
                useful: true,
            })
        }
        if (about.includes(pathname)) {
            return setActiveMenu({
                ...initial,
                about: true,
            })
        }
        if (project.includes(pathname)) {
            return setActiveMenu({
                ...initial,
                projects: true,
            })
        }
    }, [pathname])

    return (
        <>
            {!useResize().isScreenSm ?
                <div className={styles.burger__menu}>
                    <span className={styles.cursor}>
                        <MenuIcon
                            onClick={() => setActiveMenuBurger(!isActiveMenuBurger)}
                        />
                    </span>
                </div>
                : null}

            {useResize().isScreenSm || isActiveMenuBurger ?
                <div className={styles.navbar}>
                    <Link className={(cn(styles.menu, {
                        [styles.active]: isActiveMenu.news
                    }))} to="/news"
                        onClick={() => {
                            setActiveMenu(
                                {
                                    ...initial,
                                    news: true,
                                }
                            )
                            resetActiveSubMenu()
                        }}>Новости
                        <NewsIcon />
                    </Link>

                    <Link className={(cn(styles.menu, {
                        [styles.active]: isActiveMenu.home
                    }))} to="/"
                        onClick={() => {
                            setActiveMenu(
                                {
                                    ...initial,
                                    home: true,
                                }
                            )
                            resetActiveSubMenu()
                        }}>Главная
                        <HomeIcon />
                    </Link>

                    <Link className={(
                        cn(styles.menu, {
                            [styles.activeSub]: isActiveSubmenu.about,
                            [styles.active]: isActiveMenu.about
                        }))}
                        onClick={() => {
                            setActiveMenu(
                                {
                                    ...initial,
                                    about: true,
                                }
                            )
                            setActiveSubmenu(
                                {
                                    ...initialSub,
                                    about: true
                                }
                            )
                        }}>Кто мы
                        <AboutIcon />
                    </Link>

                    <Link className={(
                        cn(styles.menu, {
                            [styles.activeSub]: isActiveSubmenu.projects,
                            [styles.active]: isActiveMenu.projects
                        }))}
                        onClick={() => {
                            setActiveMenu(
                                {
                                    ...initial,
                                    projects: true,
                                }
                            )
                            setActiveSubmenu(
                                {
                                    ...initialSub,
                                    projects: true
                                }
                            )
                        }}>Проекты
                        <ProjectIcon />
                    </Link>

                    <Link className={(cn(styles.menu, {
                        [styles.active]: isActiveMenu.useful
                    }))} to='/useful'
                        onClick={() => {
                            setActiveMenu(
                                {
                                    ...initial,
                                    useful: true,
                                }
                            )
                            resetActiveSubMenu()
                        }}>Полезное
                        <FavoritesIcon />
                    </Link>

                    {isActiveSubmenu.about ?
                        <div className={cn(styles.about__sub__menu, {
                            [styles.active__sub__menu]: isActiveSubmenu.about
                        })} onMouseLeave={() => {
                            resetActiveSubMenu()
                            backToPreviousActiveLink()
                        }}>
                            {subTitlesAbout.map(el => <Link key={el.title}
                                className={(cn(styles.submenu))} to={el.route}
                                onClick={() => {
                                    setActiveSubmenu(
                                        {
                                            ...initialSub,
                                        }
                                    )
                                    setActiveMenuBurger(false)
                                }}>{el.title}</Link>)}
                        </div> : null}

                    {isActiveSubmenu.projects ?
                        <div className={cn(styles.projects__sub__menu, {
                            [styles.active__sub__menu]: isActiveSubmenu.projects
                        })} onMouseLeave={() => {
                            resetActiveSubMenu()
                            backToPreviousActiveLink()
                        }}>
                            {subTitlesProject.map(el => <Link key={el.title}
                                className={(cn(styles.submenu))} to={el.route}
                                onClick={() => {
                                    setActiveSubmenu(
                                        {
                                            ...initialSub,
                                        }
                                    )
                                    setActiveMenuBurger(false)
                                }}>{el.title}</Link>)}
                        </div> : null}
                </div>
                : null}
        </>
    )
}