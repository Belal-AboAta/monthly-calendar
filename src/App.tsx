import { useState } from "react";

import "./App.css";
import { CalendarHeader } from "./components/CalendarHeader";
import { useCalendarDays } from "./components/hooks/useCalendarDays";
import { useCurrentMonth } from "./components/hooks/useCurrentMonth";
import { WeekDays } from "./components/WeekDays";
import { CalendarDays } from "./components/CalendarDays";
import { CalendarEventFlagContext } from "./context/CalendarEventFlagContext";

function App() {
  const { currentMonth, onNext, onPrev, onToday } = useCurrentMonth();
  const calendarDays = useCalendarDays(currentMonth);
  const [flag, toggleFlag] = useState(false);

  return (
    <CalendarEventFlagContext
      value={{
        flag,
        toggleFlag,
      }}
    >
      <CalendarHeader
        currentMonth={currentMonth}
        onNext={onNext}
        onPrev={onPrev}
        onToday={onToday}
      />
      <WeekDays />
      <CalendarDays calendarDays={calendarDays} />
    </CalendarEventFlagContext>
  );
}

export default App;
