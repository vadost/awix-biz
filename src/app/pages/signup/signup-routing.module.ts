import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NoAuthGuard } from '../../modules/core/guards/no-auth.guard';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        canActivate: [
          NoAuthGuard,
        ],
        component: SignupComponent,
      }
    ])
  ],
  exports: [RouterModule]
})
export class SignupRoutingModule {
}
