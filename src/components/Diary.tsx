import React, { useState } from 'react';
import '../styles/Diary.css';

interface DiaryEntry {
  tag: string;
  icon: string;
  content: string[];
}

interface DiaryEntries {
  [key: string]: DiaryEntry;
}

const Diary: React.FC = () => {
  const diaryEntries: DiaryEntries = {
    "2025-11-01": { tag: "#생일", icon: "🎂", content: ["가족들과 작은 생일 파티를 즐겼어요.", "많은 축하를 받아서 감사한 하루였습니다."] },
    "2025-11-03": { tag: "#기억", icon: "🎀", content: ["좋은 기억들을 함께 떠올리며 웃을 수 있었어요."] },
    "2025-11-05": { tag: "#산책", icon: "🌻", content: ["가을 햇살을 느끼며 짧은 산책을 했습니다.", "조용한 시간이 마음을 따뜻하게 했어요."] },
    "2025-11-12": { tag: "#독서", icon: "📖", content: ["오랜만에 좋아하는 책을 읽으며 차분한 시간을 보냈어요."] },
    "2025-11-28": { tag: "#자분함", icon: "🎁", content: ["비가 오는 날이라 마음이 차분해졌네요.", "좋아하시는 영화 '인터스텔라' 이야기를 나누며 소소한 즐거움을 찾으셨습니다."] }
  };

  const diaryKeys = Object.keys(diaryEntries).sort();
  const keyToMonth = (key: string): Date => {
    const [y, m] = key.split('-').map(Number);
    return new Date(y, m - 1, 1);
  };

  const formatDateKey = (date: Date): string => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  };

  const [currentMonth, setCurrentMonth] = useState<Date>(
    diaryKeys.length ? keyToMonth(diaryKeys[diaryKeys.length - 1]) : new Date()
  );
  const [selectedDateKey, setSelectedDateKey] = useState<string | null>(
    diaryKeys.length ? diaryKeys[diaryKeys.length - 1] : formatDateKey(new Date())
  );

  const formatMonthTitle = (date: Date): string => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월`;
  };

  const isSameMonth = (dateKey: string, dateObj: Date): boolean => {
    if (!dateKey) return false;
    const [y, m] = dateKey.split('-').map(Number);
    return y === dateObj.getFullYear() && m === dateObj.getMonth() + 1;
  };

  const changeMonth = (offset: number) => {
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + offset, 1);
    setCurrentMonth(newMonth);

    if (!selectedDateKey || !isSameMonth(selectedDateKey, newMonth)) {
      const monthEntries = Object.keys(diaryEntries).filter(key => isSameMonth(key, newMonth)).sort();
      setSelectedDateKey(monthEntries[0] || formatDateKey(newMonth));
    }
  };

  const renderCalendar = () => {
    const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const days: JSX.Element[] = [];

    // Day headers
    ['일', '월', '화', '수', '목', '금', '토'].forEach(day => {
      days.push(
        <div key={`header-${day}`} className="calendar-day-header">
          {day}
        </div>
      );
    });

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day"></div>);
    }

    // Calendar days
    for (let day = 1; day <= daysInMonth; day++) {
      const dateKey = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const entry = diaryEntries[dateKey];
      const isSelected = selectedDateKey === dateKey;

      days.push(
        <div
          key={dateKey}
          className={`calendar-day ${entry ? 'has-entry' : ''} ${isSelected ? 'selected' : ''}`}
          onClick={() => setSelectedDateKey(dateKey)}
        >
          <span className="calendar-day-number">{day}</span>
          {entry?.icon && <span className="calendar-day-icon">{entry.icon}</span>}
        </div>
      );
    }

    return days;
  };

  const renderDiaryDetail = () => {
    if (!selectedDateKey) {
      return (
        <>
          <div className="diary-detail-header">
            <div>
              <div className="diary-date">날짜를 선택하세요</div>
              <div className="diary-tag">#미선택</div>
            </div>
            <button className="close-btn" onClick={() => setSelectedDateKey(null)}>×</button>
          </div>
          <div className="diary-content">
            <p>달력에서 날짜를 눌러 기록을 확인하세요.</p>
          </div>
        </>
      );
    }

    const entry = diaryEntries[selectedDateKey];

    return (
      <>
        <div className="diary-detail-header">
          <div>
            <div className="diary-date">{selectedDateKey}</div>
            <div className="diary-tag">{entry?.tag || '#기록 없음'}</div>
          </div>
          <button className="close-btn" onClick={() => setSelectedDateKey(null)}>×</button>
        </div>
        <div className="diary-content">
          {entry?.content?.length ? (
            entry.content.map((text, idx) => <p key={idx}>{text}</p>)
          ) : (
            <p>기록이 없습니다. 새로운 기억을 남겨주세요.</p>
          )}
        </div>
      </>
    );
  };

  return (
    <section className="diary">
      <div className="container">
        <h1 className="diary-main-title">나의 다이어리</h1>
        <div className="calendar-layout">
          <div className="calendar-container">
            <div className="calendar-header">
              <button className="calendar-nav" onClick={() => changeMonth(-1)}>◀</button>
              <div className="calendar-title">{formatMonthTitle(currentMonth)}</div>
              <button className="calendar-nav" onClick={() => changeMonth(1)}>▶</button>
            </div>
            <div className="calendar-grid">
              {renderCalendar()}
            </div>
          </div>

          <div className="diary-detail">
            {renderDiaryDetail()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diary;
