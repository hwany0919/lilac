import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import './Layout.scss'

const Layout = () => {
    return (
        <div className="layout">
            <Navigation />

            <main className="main-content">
                <Outlet />
            </main>

            <footer className="footer">
                <p>&copy; 2026 OnStyle. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Layout
