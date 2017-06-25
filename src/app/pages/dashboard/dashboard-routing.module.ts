import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'calendar',
      },
      {
        path: 'calendar',
        loadChildren: 'app/pages/dashboard/calendar/calendar.module#CalendarModule'
      },
      {
        path: 'branches',
        loadChildren: 'app/pages/dashboard/branches/branches.module#BranchesModule'
      },
      {
        path: 'services',
        loadChildren: 'app/pages/dashboard/services/services.module#ServicesModule'
      },
      {
        path: 'employees',
        loadChildren: 'app/pages/dashboard/employees/employees.module#EmployeesModule'
      },
      {
        path: 'clients',
        loadChildren: 'app/pages/dashboard/clients/clients.module#ClientsModule'
      },
      {
        path: 'statistics',
        loadChildren: 'app/pages/dashboard/statistics/statistics.module#StatisticsModule'
      },
      {
        path: 'online-booking',
        loadChildren: 'app/pages/dashboard/online-booking/online-booking.module#OnlineBookingModule'
      },
      {
        path: 'account',
        loadChildren: 'app/pages/dashboard/account/account.module#AccountModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DashboardRoutingModule {
}
