import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import { addDays, endOfDay, startOfDay } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  today = new Date();
  todayStr: string = this.today.toISOString().replace(/T.*$/, '');
  viewTime: '17:00';

  events = [
    {
      title: 'App:Ramanaujam',
      start: this.todayStr + 'T10:00:00',
      end: this.todayStr + 'T11:30:00',
      color: 'black',
    },
    {
      title: 'App:Rampotheni',
      start: this.todayStr + 'T13:00:00',
      end: this.todayStr + 'T13:30:00',
      draggable: true,
    },
    {
      start: addDays(startOfDay(this.today), 2),
      end: addDays(endOfDay(this.today), 4),
      title: 'Chennai Head Office Meeting ',
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addDays(startOfDay(this.today), 2),
      end: addDays(endOfDay(this.today), 2),
      title: 'DRM meeting',
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addDays(startOfDay(this.today), 2),
      end: addDays(endOfDay(this.today), 2),
      title: 'Today Esclation : 2',
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
    {
      start: addDays(startOfDay(this.today), 2),
      end: addDays(endOfDay(this.today), 2),
      title: 'Today Appointment : 5',
      allDay: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
      draggable: true,
    },
  ];

  calendarOptions: CalendarOptions = {
    initialDate: this.todayStr,
    weekNumberCalculation: 'ISO',
    height: 'auto',
    contentHeight: 'auto',
    // aspectRatio: 2,
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    editable: true,
    selectable: true,
    droppable: true,
    navLinks: true,
    events: this.events,
  };

  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  constructor() {}

  ngOnInit(): void {}
}
