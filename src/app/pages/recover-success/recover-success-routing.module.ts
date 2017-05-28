import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecoverSuccessComponent } from './components/recover-success/recover-success.component';
import { NoAuthGuard } from '../../modules/core/guards/no-auth.guard';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        canActivate: [
          NoAuthGuard,
        ],
        component: RecoverSuccessComponent,
      }
    ])
  ],
  exports: [RouterModule]
})
export class RecoverSuccessRoutingModule {
}
