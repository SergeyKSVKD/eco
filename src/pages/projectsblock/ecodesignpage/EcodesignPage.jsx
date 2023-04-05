import styles from './EcodesignPage.module.css'
import cn from 'classnames'
import { ReactComponent as EarthIcon } from './assets/earth.svg'

export const EcodesignPage = () => {
    return (
        <>
            <span className={styles.title}>ЭТОТ РАЗДЕЛ ОЖИДАЕТ ИНИЦИАТИВ ОТ СТУДЕНТОВ И СОТРУДНИКОВ АРХИТЕКТУРНО-СТРОИТЕЛЬНОГО НАПРАВЛЕНИЯ</span>
            <p className={cn(styles.borderLeft, styles.bold)}>Одна идея выносится на обсуждение: разработка серии типовых проектов зоны сбора отходов и вторичных ресусов для университетов и школ.</p>
            <p className={cn(styles.boldWithMargin)}>Критерии:</p>
            <p className={styles.earth}><EarthIcon />Использование принципов наилучших доступных технологий и лучшей практики</p>
            <p className={styles.earth}><EarthIcon />Модульность с включением модулей первичной обработки отходов</p>
            <p className={styles.earth}><EarthIcon />Возможность использования в качестве составляющей лабораторных практикумов</p>
            <p className={styles.earth}><EarthIcon />Ориентация на промышленное производство</p>

        </>
    )
} 