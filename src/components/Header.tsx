import React from 'react';
import './Header.css';

interface HeaderProps {
  currentPage: 'home' | 'services' | 'chat' | 'diary';
  setCurrentPage: (page: 'home' | 'services' | 'chat' | 'diary') => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, isLoggedIn, setIsLoggedIn }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src="/logo.png" alt="Lifeclover" className="logo-image" />
            <span className="logo-text">Lifeclover</span>
          </div>

          <nav className="nav">
            <button 
              className={`nav-item ${currentPage === 'services' ? 'active' : ''}`}
              onClick={() => setCurrentPage('services')}
            >
              알려줘요
            </button>
            <span className="nav-divider">|</span>
            <button 
              className={`nav-item ${currentPage === 'chat' ? 'active' : ''}`}
              onClick={() => setCurrentPage('chat')}
            >
              대화해요
            </button>
            <span className="nav-divider">|</span>
            <button 
              className={`nav-item ${currentPage === 'diary' ? 'active' : ''}`}
              onClick={() => setCurrentPage('diary')}
            >
              다이어리
            </button>
          </nav>

          <div className="header-actions">
            {!isLoggedIn ? (
              <>
                <button 
                  className="button button-login"
                  onClick={() => setIsLoggedIn(true)}
                >
                  로그인
                </button>
                <button className="button button-signup">
                  회원가입
                </button>
              </>
            ) : (
              <button 
                className="button button-logout"
                onClick={() => setIsLoggedIn(false)}
              >
                로그아웃
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
