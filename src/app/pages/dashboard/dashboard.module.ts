import { NgModule } from '@angular/core';

import { SharedModule } from '../../modules/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule {
}
