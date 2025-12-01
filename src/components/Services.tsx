import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: '알려줘요',
      description: '궁금한 것들을 물어보세요',
      icon: '🤔'
    },
    {
      title: '대화해요',
      description: '편하게 대화를 나눠보세요',
      icon: '💬'
    },
    {
      title: '다이어리',
      description: '매일의 순간들을 기록하세요',
      icon: '📔'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Lifeclover의 서비스</h2>
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
