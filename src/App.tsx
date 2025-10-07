import React, { useCallback, useState } from "react";

import "./App.css";
import { SwitchCalendarView } from "./components/SwitchCalendarView";
import { DayCalendarView } from "./containers/DayCalendarView";
import { MonthCalendarView } from "./containers/MonthCalendarView/";
import { WeekCalendarView } from "./containers/WeekCalendarView";
import { CalendarEventFlagContext } from "./context/CalendarEventFlagContext";
import { CalendarViewEnum } from "./types/SwitchCalendarViewTypes";

function App() {
  const [flag, toggleFlag] = useState(false);
  const [view, setView] = useState<CalendarViewEnum>(CalendarViewEnum.Month);

  const onViewChange = (view: CalendarViewEnum) => {
    setView(view);
  };

  const RenderView: React.FC = useCallback(() => {
    switch (view) {
      case CalendarViewEnum.Day:
        return <DayCalendarView />;
      case CalendarViewEnum.Week:
        return <WeekCalendarView />;
      case CalendarViewEnum.Month:
        return <MonthCalendarView />;
      case CalendarViewEnum.Year:
        return <>Year</>;
    }
  }, [view]);

  return (
    <CalendarEventFlagContext
      value={{
        flag,
        toggleFlag,
      }}
    >
      <SwitchCalendarView onValueChange={onViewChange} />
      <RenderView />
    </CalendarEventFlagContext>
  );
}

export default App;
