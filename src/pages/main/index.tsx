import { Menus } from '@/routes/const'
import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
    useLayoutEffect(() => {
        console.log('Main!!')
        // 토큰 없으면 로그인 화면으로 이동
        window.location.href = Menus.Login
    }, [])

    return (
        <div id="main">
            <Outlet />
        </div>
    )
}
export default Main
