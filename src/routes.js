import { Navigate } from 'react-router-dom'
import {
    HomePage, NewsPage, UsefulPage,
    EventsPage, AboutUsPage, AssetPage, ContactsPage,
    AiremissionsPage, EcodesignPage, EcopoliticPage, EnergysavingPage,
    InitiativesPage, OtherdestinationsPage, RecyclingPage, WatersupplyPage,
} from './pages/index'
import { Layout } from './components/index'

const routesList = [
    {element: <HomePage />, path: '/'},
    {element: <NewsPage />, path: '/news'},
    {element: <UsefulPage />, path: '/useful'},
    {element: <AboutUsPage />, path: '/aboutus'},
    {element: <AssetPage />, path: '/asset'},
    {element: <ContactsPage />, path: '/contacts'},
    {element: <EventsPage />, path: '/events'},
    {element: <AiremissionsPage />, path: '/airemissions'},
    {element: <EcodesignPage />, path: '/ecodesign'},
    {element: <EcopoliticPage />, path: '/ecopolitic'},
    {element: <EnergysavingPage />, path: '/energysaving'},
    {element: <OtherdestinationsPage />, path: '/otherdestinations'},
    {element: <RecyclingPage />, path: '/recycling'},
    {element: <InitiativesPage />, path: '/initiatives'},
    {element: <WatersupplyPage />, path: '/watersupply'},
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