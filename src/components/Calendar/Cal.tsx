import React, { useState, useEffect } from 'react';
import FullCalendar, { EventContentArg, EventClickArg, DateSelectArg, EventApi } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all';
import styled from 'styled-components';

let id = 0;
const Cal = () => {
  const [events, setEvents] = useState<Array<EventApi>>([]);
  const [initialEvents, setInitialEvents] = useState([
    {
      id: String(10001),
      title: '이벤트1',
      start: new Date().toISOString().split('T')[0],
    },
    {
      id: String(20002),
      title: '이벤트 2',
      start: new Date().toISOString().split('T')[0] + 'T14:05:00',
    },
  ]);

  const handleEvents = (events: EventApi[]) => {
    setEvents(events);
  };

  const renderEventContent = (eventContent: EventContentArg) => {
    return (
      <>
        <b> {eventContent.timeText}</b>
        <b style={{ color: 'white' }}> {eventContent.event.title}</b>
      </>
    );
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    alert(`일정을 삭제합니다.  ${clickInfo.event.title}`);
    console.log(clickInfo.event.id);
    clickInfo.event.remove();
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt('일정을 입력하세요');
    const calenderApi = selectInfo.view.calendar;
    calenderApi.unselect();
    if (title) {
      calenderApi.addEvent({
        id: String(id++),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        dateClick={(e) => {
          console.log('dateclick', e);
        }}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventContent={renderEventContent}
        initialEvents={initialEvents}
        headerToolbar={{
          left: 'prev,next',
          center: 'title',
          right: 'today',
        }}
        initialView="dayGridMonth"
        selectable={true}
        editable={true}
        eventBackgroundColor={'#114A38'}
        eventBorderColor={'#114A38'}
        eventsSet={handleEvents}
        dayMaxEvents={true}
        weekends={true}
        locales={allLocales}
        firstDay={1}
        locale={'ko'}
        buttonText={{
          day: 'Day',
          prev: 'prev',
          nextYear: 'Next Year',
          prevYear: 'Prev Year',
          next: 'next',
          month: 'Month',
          today: 'Today',
          week: 'Week',
        }}
      />
    </>
  );
};

export default Cal;
