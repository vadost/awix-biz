import { NgModule } from '@angular/core';

import { SharedModule } from '../../modules/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarModule } from '../../modules/sidebar/sidebar.module';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    SidebarModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule {
}
