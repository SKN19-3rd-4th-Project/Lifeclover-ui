import React, { useState } from 'react';
import '../styles/ChatBot.css';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; content: string }[]>([
    { role: 'bot', content: '안녕하세요! 저는 Lifeclover입니다. 무엇을 도와드릴까요?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }]);
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', content: '정성스러운 답변을 준비 중입니다... 🍀' }]);
      }, 500);
      setInput('');
    }
  };

  return (
    <section className="chatbot">
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              <div className="message-content">{msg.content}</div>
            </div>
          ))}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            className="chat-input"
            placeholder="메시지를 입력하세요..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="send-button" onClick={handleSend}>전송</button>
        </div>
      </div>
    </section>
  );
};

export default ChatBot;
