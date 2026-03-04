import './AboutPage.scss'

const AboutPage = () => {
    return (
        <div className="about-page">
            <h1>프로젝트 소개</h1>

            <section className="section">
                <h2>기술 스택</h2>
                <div className="tech-list">
                    <div className="tech-item">
                        <h3>React 18</h3>
                        <p>최신 버전의 React로 효율적인 UI 구성</p>
                    </div>

                    <div className="tech-item">
                        <h3>TypeScript</h3>
                        <p>타입 안정성으로 안전한 개발</p>
                    </div>

                    <div className="tech-item">
                        <h3>Vite</h3>
                        <p>빠른 개발 서버와 최적화된 빌드</p>
                    </div>

                    <div className="tech-item">
                        <h3>Zustand</h3>
                        <p>간단하고 직관적인 상태 관리</p>
                    </div>

                    <div className="tech-item">
                        <h3>TanStack Query</h3>
                        <p>서버 상태 관리와 캐싱</p>
                    </div>

                    <div className="tech-item">
                        <h3>React Router</h3>
                        <p>선언적 라우팅</p>
                    </div>

                    <div className="tech-item">
                        <h3>SCSS</h3>
                        <p>강력한 CSS 전처리기</p>
                    </div>

                    <div className="tech-item">
                        <h3>Axios</h3>
                        <p>Promise 기반 HTTP 클라이언트</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>주요 기능</h2>
                <ul className="feature-list">
                    <li>전역 SCSS 변수 자동 import</li>
                    <li>SVG를 React 컴포넌트로 import</li>
                    <li>Path alias (@/) 지원</li>
                    <li>Axios interceptor 설정</li>
                    <li>TanStack Query 기본 설정</li>
                    <li>Zustand devtools 통합</li>
                    <li>반응형 네비게이션</li>
                </ul>
            </section>
        </div>
    )
}

export default AboutPage
