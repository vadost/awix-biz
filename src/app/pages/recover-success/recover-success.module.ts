import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoverSuccessRoutingModule } from './recover-success-routing.module';
import { RecoverSuccessComponent } from './components/recover-success/recover-success.component';
import { RecoverSuccessFormComponent } from './components/recover-success-form/recover-success-form.component';

@NgModule({
  imports: [
    CommonModule,
    RecoverSuccessRoutingModule
  ],
  declarations: [RecoverSuccessComponent, RecoverSuccessFormComponent]
})
export class RecoverSuccessModule { }
