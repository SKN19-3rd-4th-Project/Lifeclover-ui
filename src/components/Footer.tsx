import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Lifeclover</h4>
          <p>당신만의 클로버가 되어드릴게요</p>
        </div>

        <div className="footer-section">
          <h4>서비스</h4>
          <ul>
            <li><a href="#services">알려줘요</a></li>
            <li><a href="#chat">대화해요</a></li>
            <li><a href="#diary">다이어리</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>정보</h4>
          <ul>
            <li><a href="#privacy">개인정보처리방침</a></li>
            <li><a href="#terms">이용약관</a></li>
            <li><a href="#contact">문의하기</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>팔로우</h4>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Lifeclover. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
