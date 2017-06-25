import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineBookingComponent } from './online-booking.component';

const routes: Routes = [
  {
    path: '',
    component: OnlineBookingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineBookingRoutingModule { }
