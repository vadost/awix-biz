import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { UserComponent } from './components/userpage/user.component';
import { WizardComponent } from './components/wizard/wizard.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [
    AccountComponent,
    UserComponent,
    WizardComponent
  ]
})
export class AccountModule { }
