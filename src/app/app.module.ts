import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import '../rxjs';

import { SharedModule } from './modules/shared/shared.module';
import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
