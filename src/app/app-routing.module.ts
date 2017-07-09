import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AuthGuard } from './modules/core/guards/auth.guard';
import { NoAuthGuard } from './modules/core/guards/no-auth.guard';
import { LogoutComponent } from './modules/core/components/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'signup',
    loadChildren: 'app/pages/signup/signup.module#SignupModule',
    canLoad: [NoAuthGuard]
  },
  {
    path: 'signin',
    loadChildren: 'app/pages/signin/signin.module#SigninModule',
    canLoad: [NoAuthGuard]
  },
  {
    path: 'recover',
    loadChildren: 'app/pages/recover/recover.module#RecoverModule',
    canLoad: [NoAuthGuard]
  },
  {
    path: 'recover-success',
    loadChildren: 'app/pages/recover-success/recover-success.module#RecoverSuccessModule',
    canLoad: [NoAuthGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'dashboard',
    loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule',
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
