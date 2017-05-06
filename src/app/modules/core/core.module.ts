import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LogoutComponent } from './components/logout/logout.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    LogoutComponent,
  ],
  exports: [
    LogoutComponent,
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthService,
        AuthGuard,
        NoAuthGuard,
      ],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
