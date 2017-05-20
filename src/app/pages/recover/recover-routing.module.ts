import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecoverComponent } from './components/recover/recover.component';
import { NoAuthGuard } from '../../modules/core/guards/no-auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        canActivate: [
          NoAuthGuard,
        ],
        component: RecoverComponent,
      }
    ])
  ],
  exports: [RouterModule]
})
export class RecoverRoutingModule {
}
