import { useState } from "react";
import dayjs from "dayjs";

const CalendarGrid = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  
  const startDay = currentMonth.startOf("month").startOf("week");
  const endDay = currentMonth.endOf("month").endOf("week");

  const days = [];
  let day = startDay;

  while (day.isBefore(endDay) || day.isSame(endDay, "day")) {
    days.push(day);
    day = day.add(1, "day");
  }

  
  const getDateClass = (date) => {
    if (!date.isSame(currentMonth, "month")) return "classColor4";

    if ([3, 10, 19, 21, 23].includes(date.date())) return "classColor1";
    if (date.isSame(dayjs(), "day")) return "classColor2";
    if ([6, 8, 12, 14, 16].includes(date.date())) return "classColor3";

    return "";
  };

  return (
    <>
      {/* Month Header */}
      <div className="calender-top d-flex justify-content-between align-items-center">
        <button
          className="changeBtn"
          onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
        >
          ◀
        </button>

        <h2 className="title2">
          {currentMonth.format("MMMM, YYYY")}
        </h2>

        <button
          className="changeBtn"
          onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
        >
          ▶
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="calender-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="day">{d}</div>
        ))}

        {days.map((date, i) => (
          <div
            key={i}
            className={`date ${getDateClass(date)}`}
          >
            {date.date()}
          </div>
        ))}
      </div>
    </>
  );
};

export default CalendarGrid;
