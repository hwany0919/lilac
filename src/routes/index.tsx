import Layout from '@/components/layout/Layout'
import Loading from '@/components/loading'
import Pages from '@/pages'
import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Menus } from './const'

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path={Menus.Login} element={<Pages.Login />} />
          <Route path={Menus.Home} element={<Pages.Main />}>
            <Route index element={<Pages.Home />} />
          </Route>
          <Route element={<Layout />}>
            <Route path={Menus.About} element={<Pages.About />} />
            <Route path={Menus.Example} element={<Pages.Example />} />
            <Route path={Menus.TestHome} element={<Pages.TestHome />} />
          </Route>
          <Route path="*" element={<Pages.NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default Router
