import Loading from '@/components/loading'
import Pages from '@/pages'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Menus } from './const'

const Router = () => {
    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Routes>
                    <Route path={Menus.Login} element={<Pages.Login />} />
                    <Route path="/" element={<Pages.Main />}>
                        <Route path={Menus.Home} element={<Pages.Home />} />
                    </Route>
                    <Route path="/test">
                        <Route path="home" element={<Pages.Homepage />} />
                    </Route>
                    <Route path="*" element={<Pages.NotFound />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default Router
