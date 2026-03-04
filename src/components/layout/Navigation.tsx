import { NavLink } from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="nav-container">
                <div className="nav-brand">
                    <NavLink to="/">OnStyle</NavLink>
                </div>

                <ul className="nav-menu">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                            end
                        >
                            홈
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            소개
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/example"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            예시
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation
