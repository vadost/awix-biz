import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleComponent } from './schedule.component';
import { CalendarModule } from 'ap-angular2-fullcalendar';

@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    CalendarModule.forRoot()
  ],
  declarations: [ScheduleComponent]
})
export class ScheduleModule { }
