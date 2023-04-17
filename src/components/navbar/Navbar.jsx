import styles from './Navbar.module.css'
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
        // { title: 'События', route: '/events' },
        { title: 'Как связаться', route: '/contacts' },
        { title: 'Актив экоклуба', route: '/asset' },
    ]
    const subTitlesProject = [
        { title: 'Экологическая политика', route: '/ecopolitic' },
        // { title: 'Рециклинг', route: '/recycling' },
        // { title: 'Водоснабжение', route: '/watersupply' },
        { title: 'Выбросы в атмосферу', route: '/airemissions' },
        // { title: 'Энергосбережение', route: '/energysaving' },
        // { title: 'Экодизайн', route: '/ecodesign' },
        // { title: 'Другие направления', route: '/otherdestinations' },
        { title: 'Инициативы', route: '/initiatives' },
    ]

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
        const about = []
        const project = []
        if (pathname === '/') {
            return setActiveMenu({
                ...initial,
                home: true,
            })
        }
        subTitlesAbout.forEach((el) => {
            about.push(el.route)
        })
        if (about.includes(pathname)) {
            return setActiveMenu({
                ...initial,
                about: true,
            })
        }
        subTitlesProject.forEach((el) => {
            project.push(el.route)
        })
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
        subTitlesAbout.forEach((el) => {
            if (pathname === el.route) {
                return setActiveMenu({
                    ...initial,
                    about: true,
                })
            }
        })
        subTitlesProject.forEach((el) => {
            if (pathname === el.route) {
                return setActiveMenu({
                    ...initial,
                    projects: true,
                })
            }
        })
    }, [pathname])

    return (
        <>
            {!useResize().isScreenSm ?
                <div className={styles.burgerMenu}>
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
                        <div className={cn(styles.aboutSubMenu, {
                            [styles.activeSubMenu]: isActiveSubmenu.about
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
                        <div className={cn(styles.projectsSubMenu, {
                            [styles.activeSubMenu]: isActiveSubmenu.projects
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