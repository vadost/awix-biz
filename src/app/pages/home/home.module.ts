import { NgModule } from '@angular/core';

import { SharedModule } from '../../modules/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule {
}
