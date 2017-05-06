import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NoAuthGuard } from '../../modules/core/guards/no-auth.guard';
import { SigninComponent } from './signin.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [
      NoAuthGuard,
    ],
    component: SigninComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SigninRoutingModule {
}
