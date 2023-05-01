import { Navigate } from 'react-router-dom'
import {
    HomePage, NewsPage, UsefulPage, AboutUsPage, AssetPage, ContactsPage,
    AiremissionsPage, EcopoliticPage, InitiativesPage, News, EcomanagePage,
    OuractivitiesPage, EventsPage,
} from './pages/index'
import { Layout } from './components/index'

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