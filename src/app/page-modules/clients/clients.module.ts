import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { DataTableComponent } from './components/clients-table/datatable.component';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule
  ],
  declarations: [
      ClientsComponent,
      DataTableComponent,
  ]
})
export class ClientsModule { }
