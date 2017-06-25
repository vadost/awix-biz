import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './branches.component';

@NgModule({
  imports: [
    CommonModule,
    BranchesRoutingModule
  ],
  declarations: [BranchesComponent]
})
export class BranchesModule { }
