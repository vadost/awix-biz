import { NgModule } from '@angular/core';

import { SharedModule } from '../../modules/shared/shared.module';
import { SigninRoutingModule } from './signin-routing.module';

import { SigninComponent } from './signin.component';
import { SigninFormComponent } from './components/signin-form/signin-form.component';

@NgModule({
  imports: [
    SharedModule,
    SigninRoutingModule,
  ],
  declarations: [
    SigninComponent,
    SigninFormComponent,
  ],
})
export class SigninModule {
}
