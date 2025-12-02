import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: '장례 시설 안내',
      description: (
        <>
          장례식장/봉안당/화장시설/묘지/자연장지 등의<br />장례 시설 정보를 제공합니다.
        </>
      ),
      icon: '🏛️'
    },
    {
      title: '지원 정책',
      description: '공영장례, 화장 장려금 등의 정보를 제공합니다.',
      icon: '🤝'
    },
    {
      title: '유산 상속 안내',
      description: '유산 상속 절차 및 법률 정보를 제공합니다.',
      icon: '⚖️'
    },
    {
      title: '디지털 개인 정보',
      description: '디지털 계정 처리 방법에 대한 정보를 제공합니다.',
      icon: '🔐'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
