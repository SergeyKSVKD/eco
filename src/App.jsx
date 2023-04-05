import { RouterProvider, createBrowserRouter, ScrollRestoration } from 'react-router-dom'
import { routes } from './routes'

const router = createBrowserRouter(routes)

function App() {
  return (
    <>
    <RouterProvider router={router} >
      <ScrollRestoration />
    </RouterProvider>
  </>
  );
}

export default App;
