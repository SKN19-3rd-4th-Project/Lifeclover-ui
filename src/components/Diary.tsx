import React, { useState } from 'react';
import '../styles/Diary.css';

const Diary: React.FC = () => {
  const [entries, setEntries] = useState<{ date: string; content: string }[]>([
    { date: '2025-12-01', content: '오늘 날씨가 정말 좋았어요!' },
    { date: '2025-11-30', content: 'Lifeclover를 시작했습니다! 🍀' }
  ]);
  const [newEntry, setNewEntry] = useState('');

  const handleAddEntry = () => {
    if (newEntry.trim()) {
      setEntries([{ date: new Date().toISOString().split('T')[0], content: newEntry }, ...entries]);
      setNewEntry('');
    }
  };

  return (
    <section className="diary">
      <div className="diary-container">
        <h2 className="diary-title">나의 다이어리</h2>

        <div className="diary-input-section">
          <textarea
            className="diary-textarea"
            placeholder="오늘의 일을 작성해보세요..."
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
          />
          <button className="diary-submit" onClick={handleAddEntry}>기록하기</button>
        </div>

        <div className="diary-entries">
          {entries.map((entry, index) => (
            <div key={index} className="diary-entry">
              <div className="entry-date">{entry.date}</div>
              <div className="entry-content">{entry.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Diary;
