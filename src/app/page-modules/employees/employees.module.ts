import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { DataTableComponent } from './components/employees-table/datatable.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ],
  declarations: [
      EmployeesComponent,
      DataTableComponent
  ]
})
export class EmployeesModule { }
