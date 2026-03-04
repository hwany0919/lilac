import { Link } from 'react-router-dom'
import './HomePage.scss'

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="hero-section">
                <h1>사이트에 방문하신 것을 환영합니다</h1>
                <p className="subtitle">React + TypeScript + Vite + Zustand 기반의 모던 웹 애플리케이션</p>

                <div className="feature-grid">
                    <div className="feature-card">
                        <h3>⚡ 빠른 개발</h3>
                        <p>Vite의 빠른 HMR로 즉각적인 피드백</p>
                    </div>

                    <div className="feature-card">
                        <h3>🎨 SCSS 스타일링</h3>
                        <p>전역 변수와 모듈화된 스타일</p>
                    </div>

                    <div className="feature-card">
                        <h3>🔄 상태 관리</h3>
                        <p>Zustand와 TanStack Query</p>
                    </div>

                    <div className="feature-card">
                        <h3>🛣️ 라우팅</h3>
                        <p>React Router로 쉬운 네비게이션</p>
                    </div>
                </div>

                <div className="cta-buttons">
                    <Link to="/example" className="btn btn-primary">
                        예시 보기
                    </Link>
                    <Link to="/about" className="btn btn-secondary">
                        자세히 알아보기
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
