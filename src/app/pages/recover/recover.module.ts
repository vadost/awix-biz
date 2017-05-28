import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecoverRoutingModule } from './recover-routing.module';
import { RecoverComponent } from './components/recover/recover.component';
import { RecoverFormComponent } from './components/recover-form/recover-form.component';

@NgModule({
  imports: [
    CommonModule,
    RecoverRoutingModule
  ],
  declarations: [RecoverComponent, RecoverFormComponent]
})
export class RecoverModule { }
