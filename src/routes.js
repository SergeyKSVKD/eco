import { Navigate } from 'react-router-dom'
import { Layout } from './components/index'
import { lazy } from 'react'

const AboutUsPage = lazy(() => import('./pages/aboutblock/aboutuspage/AboutUsPage'))
const ContactsPage = lazy(() => import('./pages/aboutblock/contactspage/ContactsPage'))
const AssetPage = lazy(() => import('./pages/aboutblock/assetpage/AssetPage'))

const HomePage = lazy(() => import('./pages/homepage/HomePage'))

const NewsPage = lazy(() => import('./pages/newspage/NewsPage'))
const News = lazy(() => import('./pages/newspage/newsComponent'))

const AiremissionsPage = lazy(() => import('./pages/projectsblock/airemissionspage/AiremissionsPage'))
const EcomanagePage = lazy(() => import('./pages/projectsblock/ecomanagepage/EcomanagePage'))
const EcopoliticPage = lazy(() => import('./pages/projectsblock/ecopoliticpage/EcopoliticPage'))
const EventsPage = lazy(() => import('./pages/projectsblock/eventspage/EventsPage'))
const InitiativesPage = lazy(() => import('./pages/projectsblock/initiativespage/InitiativesPage'))
const OuractivitiesPage = lazy(() => import('./pages/projectsblock/ouractivitiespage/OuractivitiesPage'))

const UsefulPage = lazy(() => import('./pages/usefulpage/UsefulPage'))

const routesList = [
    { element: <HomePage />, path: '/' },
    { element: <NewsPage />, path: '/news' },
    { element: <News />, path: '/news/:id' },
    { element: <UsefulPage />, path: '/useful' },
    { element: <AboutUsPage />, path: '/aboutus' },
    { element: <AssetPage />, path: '/asset' },
    { element: <ContactsPage />, path: '/contacts' },
    { element: <AiremissionsPage />, path: '/airemissions' },
    { element: <EcopoliticPage />, path: '/ecopolitic' },
    { element: <EcomanagePage />, path: '/ecomanage' },
    { element: <InitiativesPage />, path: '/initiatives' },
    { element: <OuractivitiesPage />, path: '/ouractivities' },
    { element: <EventsPage />, path: '/events' },
]

const publicRoutes = []

routesList.map(item => {
    publicRoutes.push({
        path: item.path,
        element: <Layout>
            {item.element}
        </Layout>
    })
})

const defaultRoutes = [
    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
]

const authRoutes = []

const InDevelopingRoutes = []

export const routes = publicRoutes.concat(defaultRoutes, authRoutes, InDevelopingRoutes)