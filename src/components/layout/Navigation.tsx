import { Menus } from '@/routes/const'
import { NavLink } from 'react-router'
import './Navigation.scss'

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <NavLink to={Menus.TestHome}>Lilac</NavLink>
        </div>

        <ul className="nav-menu">
          <li>
            <NavLink to={Menus.TestHome} className={({ isActive }) => (isActive ? 'active' : '')} end>
              홈
            </NavLink>
          </li>
          <li>
            <NavLink to={Menus.About} className={({ isActive }) => (isActive ? 'active' : '')}>
              소개
            </NavLink>
          </li>
          <li>
            <NavLink to={Menus.Example} className={({ isActive }) => (isActive ? 'active' : '')}>
              예시
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
