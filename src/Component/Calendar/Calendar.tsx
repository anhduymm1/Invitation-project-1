import './Calendar.scss';

export default function Calendar() {
  const weekdays = ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];

  const days = [
    { num: 1 }, { num: 2 }, { num: 3 },
    { num: 4 }, { num: 5 }, { num: 6 }, { num: 7 }, { num: 8 }, { num: 9 }, { num: 10 },
    { num: 11 }, { num: 12 }, { num: 13 }, { num: 14 }, { num: 15 }, { num: 16 }, { num: 17 },
    { num: 18 }, { num: 19 }, { num: 20 }, { num: 21 }, { num: 22 }, { num: 23 }, { num: 24 },
    { num: 25 }, { num: 26 }, { num: 27 }, { num: 28 }, { num: 29 }, { num: 30 }, { num: 31 },
    { num: 1, type: "prev" }, { num: 2, type: "prev" }, { num: 3, type: "prev" }, { num: 4, type: "prev" },

  ];

  const sampleToday = 17;

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div className="month-title">Tháng 12 <span className="year">2025</span></div>

      </div>

      <div className="weekdays">
        {weekdays.map((day) => (
          <div key={day} className="weekday">{day}</div>
        ))}
      </div>

      <div className="grid">
        {days.map((d, idx) => {
          const isToday = d.num === sampleToday && !d.type;
          return (
            <div
              key={idx}
              className={`cell ${d.type ? "prev" : "current"} ${isToday ? "today" : ""}`}
            >
              <span className="num">{d.num}</span>
              {isToday && <span className="highlight"></span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
