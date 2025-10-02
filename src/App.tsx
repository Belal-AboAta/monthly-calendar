import "./App.css";
import { CalendarHeader } from "./components/CalendarHeader";
import { useCalendarDays } from "./components/hooks/useCalendarDays";
import { useCurrentMonth } from "./components/hooks/useCurrentMonth";
import { WeekDays } from "./components/WeekDays";
import { CalendarDays } from "./components/CalendarDays";

function App() {
  const { currentMonth, onNext, onPrev, onToday } = useCurrentMonth();
  const calendarDays = useCalendarDays(currentMonth);

  return (
    <>
      <CalendarHeader
        currentMonth={currentMonth}
        onNext={onNext}
        onPrev={onPrev}
        onToday={onToday}
      />
      <WeekDays />
      <CalendarDays calendarDays={calendarDays} />
    </>
  );
}

export default App;
