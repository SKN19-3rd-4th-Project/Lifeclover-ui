import React from 'react';
import '../styles/Hero.css';

const imgLify3 = 'src/img/lify.png';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text-section">
          <h1 className="hero-title">
            당신만의<br />
            클로버가 되어드릴게요
          </h1>
          <div className="hero-cta">
            <button className="cta-button primary">지금 시작하기</button>
          </div>
        </div>

        <div className="hero-image-section">
          <img src={imgLify3} alt="Lifeclover 캐릭터" className="clover-image" />
        </div>
      </div>

      <div className="hero-input-section">
        <input
          type="text"
          className="hero-input"
          placeholder="오늘의 일을 나누고 싶으신가요?"
        />
      </div>
    </section>
  );
};

export default Hero;
