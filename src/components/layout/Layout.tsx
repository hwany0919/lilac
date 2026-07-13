import { Menus } from '@/routes/const'
import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router'
import './Layout.scss'
import Navigation from './Navigation'

const Layout = () => {
  useLayoutEffect(() => {
    console.log('Main!!')
    // 토큰 없으면 로그인 화면으로 이동
    window.location.href = Menus.Login
  }, [])

  return (
    <div className="layout">
      <Navigation />

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout
