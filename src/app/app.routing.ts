import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'calendar',
      pathMatch: 'full',
    },
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },{
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
    },{
        path: 'forms',
        loadChildren: './forms/forms.module#Forms'
    },{
        path: 'tables',
        loadChildren: './tables/tables.module#TablesModule'
    },{
        path: 'maps',
        loadChildren: './maps/maps.module#MapsModule'
    },{
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
    },{
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule'
    },{
        path: '',
        loadChildren: './userpage/user.module#UserModule'
    },{
        path: '',
        loadChildren: './timeline/timeline.module#TimelineModule'
    },
          {
              path: 'calendar',
              loadChildren: './page-modules/calendar/calendar.module#CalendarModule'
          },
          {
              path: 'branches',
              loadChildren: './page-modules/branches/branches.module#BranchesModule'
          },
          {
              path: 'services',
              loadChildren: './page-modules/services/services.module#ServicesModule'
          },
          {
              path: 'employees',
              loadChildren: './page-modules/employees/employees.module#EmployeesModule'
          },
          {
              path: 'clients',
              loadChildren: './page-modules/clients/clients.module#ClientsModule'
          },
          {
              path: 'statistics',
              loadChildren: './page-modules/statistics/statistics.module#StatisticsModule'
          },
          {
              path: 'booking',
              loadChildren: './page-modules/booking/booking.module#BookingModule'
          },
          {
              path: 'account',
              loadChildren: './page-modules/account/account.module#AccountModule'
          },

  ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];
