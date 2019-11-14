import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule }   from '../shared/shared.module';
import { IndexComponent } from './index/index.component';

import { AdminOnlyService }  from '../admin-only/admin-only.service';

import { AdminOnlyRoutingModule } from './admin-only.routing-module';

@NgModule({
  declarations: [IndexComponent],
  providers: [ AdminOnlyService],
  imports: [
    CommonModule,  
    AdminOnlyRoutingModule,
    SharedModule
  ]
})
export class AdminOnlyModule { }
