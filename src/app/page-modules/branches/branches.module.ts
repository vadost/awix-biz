import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './branches.component';
import { ExtendedTableComponent } from './components/branches-extendedtable/extendedtable.component';

@NgModule({
  imports: [
    CommonModule,
    BranchesRoutingModule
  ],
  declarations: [
      BranchesComponent,
      ExtendedTableComponent
  ]
})
export class BranchesModule { }
