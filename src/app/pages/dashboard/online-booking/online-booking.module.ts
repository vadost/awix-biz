import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineBookingRoutingModule } from './online-booking-routing.module';
import { OnlineBookingComponent } from './online-booking.component';

@NgModule({
  imports: [
    CommonModule,
    OnlineBookingRoutingModule
  ],
  declarations: [OnlineBookingComponent]
})
export class OnlineBookingModule { }
