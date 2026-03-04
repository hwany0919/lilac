import { lazy } from 'react'

export default {
    Main: lazy(() => import('./main')),
    Home: lazy(() => import('./home')),
    Login: lazy(() => import('./login')),
    NotFound: lazy(() => import('./errorPage')),
    Homepage: lazy(() => import('./test/HomePage')),
}
