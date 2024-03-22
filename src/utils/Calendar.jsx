import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

const Calendar = ({events}) => {
 return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin,listPlugin]}
      initialView="listWeek"
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,listWeek,timeGridDay"
      }}
      events={events}
    />
 );
};

export default Calendar;